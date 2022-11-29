const data = JSON.parse(localStorage.getItem('teams'));

const section = document.querySelector("body > div.container.teams");

build(data);

//builds the main page. Format: team name, team image (with hyperlink), table at bottom with all player names and positions
function build(data) {

    //the array has multiple teams on it so we sort through that 
    data.forEach((team) => {
        //team.Team is the team name

        //the createDiv method produces an output so I can append that instantly
        section.appendChild(createDiv(false, 'container', team.Team))


        //I was legitemately in shock when this section of code worked FIRST TRY. I am insane
        const cont = document.querySelector(`.container .${team.Team}`)
        cont.appendChild(createDiv(false, 'content', 'is-large', 'Team ' + team.Team))

        //image stuff. Image has link that works
        let a = document.createElement('a')
        a.setAttribute('href', `game.html?team=${team.Team}`)
        let img = document.createElement('img');
        img.classList.add('fullwidth')
        img.setAttribute("src", team.img)
        a.appendChild(img)
        cont.appendChild(a)

        //I know tabel is a horrible name for a var but i dont care
        //really just sets up the table. The elements are created later with my fancy createDiv() function
        let tabel = document.createElement('table');
        let tbody = document.createElement('tbody')
        tabel.classList.add('table')
        tabel.classList.add('is-bordered')
        tabel.classList.add('is-fullwidth')
        tabel.classList.add(team.Team)
        tabel.appendChild(tbody);
        cont.appendChild(tabel);

        //define
        const row = document.createElement('tr')

        //fills in the table
        row.appendChild(createDiv(true, "", "", "Fourth: " + team.Fourth))
        row.appendChild(createDiv(true, "", "", "Third: " + team.Third))
        row.appendChild(createDiv(true, "", "", "Second: " + team.Second))
        row.appendChild(createDiv(true, "", "", "Lead: " + team.Lead))

        //each time i make something in this section I add a class with the team name (team.Team) to the end
        const table = document.querySelector(`body > div.container.teams > div > table.${team.Team} > tbody`)
        table.appendChild(row)
        section.appendChild(document.createElement('br'));
    })
}

//creates a div thats it :) 
//param1: if the div we are creating is actually a td. param 2 and 3: classes to be added to the div. param 4: the text content of the div
function createDiv(isTable, className1, className2, divText) {

    //I know this is not the way to do it but i dont care it is easy copy paste moment
    if (isTable) {
        let div = document.createElement('td');

        try {
            //code will break if empty class name is added so I need this try catch thing
            div.classList.add(className1);
            div.classList.add(className2);
        } catch (error) {//i dont need code in here
        }

        //if no text content it doesnt break so we keep it
        div.textContent = divText;

        //we return that stuff so I can do it all in one very complicated line that no one will understand
        return div;
    } else {
        let div = document.createElement('div');

        try {
            //code will break if empty class name is added so I need this try catch thing
            div.classList.add(className1);
            div.classList.add(className2);
        } catch (error) { }
        div.textContent = divText;

        return div;
    }


    //hello
}
