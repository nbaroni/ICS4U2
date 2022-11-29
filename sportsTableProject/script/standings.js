const data = JSON.parse(localStorage.getItem('teams'));

let tableHeadPTS = document.querySelector('tr .PTS')
let tableBody = document.querySelector('#standings tbody');

createTable();

//this creates the table
function createTable(teams) {
    tableBody.replaceChildren();

    //iterates through each team. Just like a for each loop would. Imagine using that.
    for (i = 0; i < Object.keys(data).length; i++) {
        const row = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = data[i].Team;
        row.appendChild(td);

        //wins counter
        td = document.createElement('td');
        td.textContent = data[i].Wins
        row.appendChild(td);

        //losses counter
        td = document.createElement('td');
        td.textContent = (data[i].games.length / 2) - data[i].Wins
        row.appendChild(td);

        //percentage calculator
        td = document.createElement('td');

        //wins over games played
        let percentage = (parseInt(data[i].Wins)) / (data[i].games.length / 2)

        //limits the amt of decimal points
        td.textContent = percentage.toFixed(3)
        row.appendChild(td);
        tableBody.appendChild(row);

        //if the team hasnt played any games, itll put 0 as the pct intstead of NaN
        if (document.querySelector(`#standings > tbody > tr:nth-child(${i + 1}) > td:nth-child(2)`).textContent === '0' && document.querySelector(`#standings > tbody > tr:nth-child(${i + 1}) > td:nth-child(3)`).textContent === '0') {
            td.textContent = '0'
        }

    }

}


//times each thing has been sorted (keeps track so it can change direction each time its sorted)
let nTimes = 0;
let pTimes = 0;
let wTimes = 0;
let lTimes = 0;

//creates the icon which is an up/down arrow from fontawesome
let icon = document.createElement('i');
let arrowLocation = document.querySelector('#standings > thead > tr > th.PTS')

//need this variable because data is constant and cant be reordered.
let teams = data;

function sort(field) {

    icon.remove()
    icon = document.createElement('i')

    if (field === 'Name') {
        arrowLocation = document.querySelector('#standings > thead > tr > th.N')
        //want to add icon arrow pointing up or down
        //gets the remainder
        if (nTimes % 2 == 0) {
            teams = teams.sort((teamA, teamB) => {
                return (teamA.Team < teamB.Team) ? -1 : 1
            });
            nTimes++;
            changeArrow(arrowLocation, true);
        } else {
            teams = teams.sort((teamA, teamB) => {
                return (teamA.Team > teamB.Team) ? -1 : 1
            });
            nTimes++;
            changeArrow(arrowLocation, false);
        }
    } else if (field === 'PTS') {
        arrowLocation = document.querySelector('#standings > thead > tr > th.PTS')
        //want to add icon arrow pointing up or down
        //gets the remainder
        if (pTimes % 2 == 0) {
            teams = teams.sort((teamA, teamB) => ((parseInt(teamB.Wins)) / (teamB.games.length / 2) - (parseInt(teamA.Wins)) / (teamA.games.length / 2)));
            pTimes++;
            changeArrow(arrowLocation, true);
        } else {
            teams = teams.sort((teamA, teamB) => (parseInt(teamA.Wins)) / (teamA.games.length / 2) - (parseInt(teamB.Wins)) / (teamB.games.length / 2));
            pTimes++;
            changeArrow(arrowLocation, false);
        }
    } else if (field === 'Wins') {
        arrowLocation = document.querySelector('#standings > thead > tr > th.W');

        if (wTimes % 2 == 0) {
            teams = teams.sort((teamA, teamB) => teamB.Wins - teamA.Wins);
            wTimes++;
            changeArrow(arrowLocation, true);
        } else {
            teams = teams.sort((teamA, teamB) => teamA.Wins - teamB.Wins);
            wTimes++;
            changeArrow(arrowLocation, false);
        }
    } else if (field === 'Losses') {
        arrowLocation = document.querySelector('#standings > thead > tr > th.L');

        //want to initially sort by lowest # losses first
        if (lTimes % 2 == 1) {
            teams = teams.sort((teamA, teamB) => (((teamB.games.length / 2) - teamB.Wins) - (teamA.games.length / 2) - teamA.Wins));
            lTimes++;

            changeArrow(arrowLocation, true);
        } else {
            teams = teams.sort((teamA, teamB) => ((teamA.games.length / 2) - teamA.Wins) - ((teamB.games.length / 2) - teamB.Wins));
            lTimes++;
            changeArrow(arrowLocation, false);
        }
    }

    //recreates the table
    createTable(data);
}

//determines which way arrow should be pointed
function changeArrow(location, up) {
    if (up) {
        icon.setAttribute("class", "fa-solid fa-arrow-up");
        location.appendChild(icon);
    } else {
        icon.setAttribute("class", "fa-solid fa-arrow-down");
        location.appendChild(icon);
    }
}


