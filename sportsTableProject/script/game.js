const data = JSON.parse(localStorage.getItem('teams'));



const tableContainer = document.querySelector("body > div:nth-child(4) > div");


addTitle();

teamInput(document.querySelector("body > div:nth-child(3) > div > div"), "Filter by opposition name:", "filter");

//location of the filter input box
const filterInput = document.querySelector("#filter");
let log = '';

filterInput.addEventListener('input', updateValue);


//I do this as a work around so I know the index of the team that we are displaying
const index = getIndex();

//lets the program know how many tables to create since there are two arrays per game
let numTables = data[index].games.length / 2;

let pageNumber = 1;

let gamesArray = data[index].games;

//deals with the filtering stuff
function updateValue(e) {
    log = e.target.value.toLowerCase();

    //try to do this so itll remove the no games found text thing if its there and the filter field is typed in
    try {
        document.querySelector("#invalidinput").remove();
    } catch (error) {
        
    }

    //need to do this stuff as a kind of reset for when the box is typed in. Otherwise itll go haywire.
    gamesArray = []
    pageNumber = 1

    if (e.target.value == "" || e.target.value.includes(data[index].Team)) {
        gamesArray = data[index].games;
        numTables = data[index].games.length / 2;

        paginationNation(0);
    } else {
        for (m = 0; m < Object.keys(data[index].games).length; m++) {

            //need to make everything lower case here just to be sure that everything is included :)
            if (data[index].games[m].Name.toLowerCase().includes(log)) {
                gamesArray.push(data[index].games[m - 1]);
                gamesArray.push(data[index].games[m]);

                numTables = gamesArray.length / 2;
            }
        }

        //no idea why it tries to make more than 0 tables but whatever
        if (gamesArray.length == 0) {
            numTables = 0;
        }

        //index 0 because team name is always in index 0
        if (data[index].games[0].Name.toLowerCase().includes(log)) {

            //I know this is super sketchy but I have no idea why it likes to create a blank set of tables on page 1 so lets just set the page number to two and grey out the back button so no one can go back a page. 
            pageNumber = 2;

            let backButton = document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-previous");
            backButton.classList.add("has-background-grey-light");

            //the array becomes all messed up so I just reset it
            gamesArray = data[index].games

            //I have no reason why but this number equates wrong every time so I just reset it again 
            numTables = data[index].games.length / 2;

            //I pass in -1 precisely so it will just return out of the method instantly.
            paginationNation(-1)
        } else {

            //I pass in 0 because I need to pass in a number and I pass in -1 for page back and +1 for page forward so I thought 0 would be a great middle ground. Turns out it works really well
            paginationNation(0)
        }


    }


    //I repurpose my pagination method here because it works for the filtering surprisingly well. I pass in 1 to turn to next page and -1 to turn to before page, so I figured passing in 0 would work well.

}


//I initially used i as my index but it didnt work for whatever reason so k is always a good kandidate haha Im so funny
//also this is for the initial table creation. It will always try to create four, since there is more than four games per team period.
for (k = 0; k < 4; k++) {
    createTable(2 * k);
}

function createTable(tableIndex) {
    makeTableHead(tableIndex)

    //loops twice because there are two teams per table
    for (i = 0; i < 2; i++) {
        let score = gamesArray[tableIndex + i]
        const row = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = score.Name;
        row.appendChild(td);

        let totalScore = 0;
        for (j = 1; j < Object.keys(score).length; j++) {
            td = document.createElement('td');
            td.textContent = score[j];
            row.appendChild(td);

            //need the parseInt for some reason. Not too sure why but itll print like 20002010 as the total score without it so it stays
            totalScore = totalScore + parseInt(score[j])
        }
        td = document.createElement('td');
        td.textContent = totalScore;
        td.setAttribute('value', totalScore)
        td.classList.add("totalScore")
        row.appendChild(td);

        let tableBody = document.querySelector(`#scores${tableIndex}`);
        tableBody.appendChild(row);
    }

    //i want to make it highlight it green if u win and red if u lose
    if (parseInt(document.querySelector(`#scores${tableIndex} > tr:nth-child(2) > td:nth-child(11)`).textContent) > parseInt(document.querySelector(`#scores${tableIndex} > tr:nth-child(3) > td:nth-child(11)`).textContent)) {
        let winner = document.querySelector(`#scores${tableIndex} > tr:nth-child(2) > td:nth-child(1)`)
        let loser = document.querySelector(`#scores${tableIndex} > tr:nth-child(3) > td:nth-child(1)`)


        //makes it green
        winner.classList.add('content')
        winner.classList.add("is-primary")

        //makes it red
        loser.classList.add('content')
        loser.classList.add("is-danger")
    } else {
        let loser = document.querySelector(`#scores${tableIndex} > tr:nth-child(2) > td:nth-child(1)`)
        let winner = document.querySelector(`#scores${tableIndex} > tr:nth-child(3) > td:nth-child(1)`)

        //makes it green
        winner.classList.add('content')
        winner.classList.add("is-primary")

        //makes it red
        loser.classList.add('content')
        loser.classList.add("is-danger")
    }
}

//I know I dont need this but this is to make this thing easier to debug. Makes the head of the table.
function makeTableHead(tableIndex) {
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    table.setAttribute('id', `scores${tableIndex}`)
    table.classList.add("table")
    table.classList.add("is-fullwidth")

    let headRow = document.createElement("tr");
    let headCellName = document.createElement('th');
    headCellName.classList.add('N');
    headRow.appendChild(headCellName)
    headCellName.textContent = 'Team Name';

    for (i = 1; i < 10; i++) {
        let th = document.createElement('th')
        th.classList.add(i)
        th.textContent = i
        headRow.appendChild(th)
    }

    let totalCell = document.createElement('th');
    totalCell.classList.add('tot');
    totalCell.textContent = 'Total';
    headRow.appendChild(totalCell)

    thead.appendChild(headRow);
    table.appendChild(thead)
    tableContainer.appendChild(table);
}

//adds the title to the document
function addTitle() {
    let location = document.querySelector("#title")

    //sets the title to match whatever is in the search URL
    location.textContent = `Here are all the recent games played by team ${window.location.href.slice(window.location.href.indexOf("?team=") + 6)}`;
}

function getIndex() {
    //simply iterates through all the teams and determines if they are the correct one or not
    for (i = 0; i < Object.keys(data).length; i++) {
        if (data[i].Team === window.location.href.slice(window.location.href.indexOf("?team=") + 6)) {
            return i;
        }
    }
}

//deals with rebuilding tables
function paginationNation(whatPage) {

    let atMaxPage = false;
    let atMinPage = false;

    //remve removes it through css in display: none
    document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-next").classList.remove('remove')
    document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-previous").classList.remove('remove')

    //returns out of the method if you press the next button and the next button is grey (at the maximum value)
    if (document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-next.has-background-grey-light") !== null) {
        atMaxPage = true
    }

    if (atMaxPage && whatPage == 1) {
        return;
    }

    //deals with the colours of the pagination (nation) buttons
    if (pageNumber + whatPage > 1)
        document.querySelector('.pagination-previous').classList.remove('has-background-grey-light');
    else if (pageNumber + whatPage == 1) {
        document.querySelector('.pagination-previous').classList.add('has-background-grey-light')
    } else if (pageNumber + whatPage < 1) return;



    if (pageNumber + whatPage < Math.ceil(numTables / 4))
        document.querySelector('.pagination-next').classList.remove('has-background-grey-light');
    else {
        document.querySelector('.pagination-next').classList.add('has-background-grey-light');
        // return;
    }

    //need this again because the button may have changed colour;
    if (document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-next.has-background-grey-light") !== null) {
        atMaxPage = true
    } else {
        atMaxPage = false;
    }

    //returns out of the method if you press the prev button and the button is grey (at the min value)
    if (document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-previous.has-background-grey-light") !== null) {
        atMinPage = true
    }

    if (atMaxPage && atMinPage) {
        document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-next").classList.add('remove')
        document.querySelector("body > div:nth-child(3) > div > nav > a.pagination-previous").classList.add('remove')
    }

    pageNumber = pageNumber + whatPage;

    //gets rid of all the existing tables
    tableContainer.replaceChildren();

    //if it needs to make 0 tables, lets just reutrn out of the method after putting some text there that says search params invalid
    if (numTables == 0) {
        let textLocation = document.querySelector("body > div:nth-child(4)")

        let div = document.createElement('div')
        div.setAttribute('id', 'invalidinput')
        div.classList.add('content')
        div.classList.add('is-large')

        let h1 = document.createElement('h4')
        h1.textContent = "No games played."

        //append this to the div rather than the main thing so when I remove the div and readd it EVERY TIME the field is typed in, it wont keep stacking up brs
        //div.appendChild(document.createElement('br'))
        div.appendChild(h1)
        textLocation.appendChild(div)

        //returns out of the method because nothing else to do
        return;
    }

    //since we want to display four tables per page, if the page number is less than the 1/4 the amt of tables we need to create, we can just fill it with four tables
    if (pageNumber > numTables / 4) {
        for (k = (pageNumber - 1) * 4; (k < numTables); k++) {
            createTable(2 * k);
        }
    } else {

        //runs the for loop for how many tables are left. Remember, the index has to start at the number of tables created. I did this math a few days ago in english class but it checks out.
        for (k = (pageNumber - 1) * 4; k < ((pageNumber - 1) * 4) + 4; k++) {
            createTable(2 * k);
        }
    }
}

//creates an input box. Param 1: where it goes, Param 2: placeholder text, Param 3: the id of the input box
function teamInput(row, placeholder, id) {
    let cell = document.createElement('td')
    let input = document.createElement('input')

    input.setAttribute("id", id);
    input.classList.add("input");
    input.classList.add("is-medium");
    //input.classList.add('is-fluid')

    input.setAttribute("placeholder", placeholder)

    cell.appendChild(input);
    row.appendChild(cell);
}
