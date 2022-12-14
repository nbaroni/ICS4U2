
    let data = JSON.parse(localStorage.getItem('teams'));

    //rows of the table (how you submit new games added)
    const row1 = document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1)")
    const row2 = document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(2)")

    teamDropdown(row1);
    build(row1);

    teamInput(row2, "Team Name", "team2");
    build(row2);

    teamDropdown(document.querySelector("#winsInputDropdown"))
    teamInput(document.querySelector("#winsInputDropdown"), "Amount of wins", "winsAmt")

    //creates a cell with a drop down menu from 0 to 8
    function build(row) {
        //creates nine cells 
        for (i = 0; i < 9; i++) {
            let td = document.createElement('td');
            let select = document.createElement('select')

            select.classList.add('select')
            select.classList.add('is-medium')
            select.classList.add('is-danger')
            select.setAttribute('onclick', 'calcTotal();')

            //creates nine options in each select. (starting at 0 goign to 8)
            for (j = 0; j < 9; j++) {
                let option = document.createElement('option');
                option.textContent = j;
                option.setAttribute('value', j)
                select.appendChild(option)
            }
            td.appendChild(select);
            row.appendChild(td);
        }

        //this is an admin page it can set to 0 once you press a button I dont care :')
        row.appendChild(document.createElement('td'))
    }

    //checks if string has special character
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/;
        return specialChars.test(str);
    }


    //adds what has been submitted to the local storage
    function addLocalStorage() {
        data.forEach(team => {
            const teamName1 = document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(1) select').value;

            //makes a boolean. Determines if the top score is higher than the bottom score to determine the winner
            let winner = parseInt(document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(11)").textContent) > parseInt(document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(11)").textContent)

            //if one or both fields for team input is invalid, or if the scores are equal (they should never be), it wont let you submit and will put a notification thingy.
            if (document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(1) select').value === 'Select a team' || containsSpecialChars(document.querySelector("#team2").value) || document.querySelector("#team2").value == '' || parseInt(document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(11)").textContent) == parseInt(document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(11)").textContent)) {

                //for some reason it puts it five times so i check if its there and if its not then itll create the notification thing
                if (document.querySelector('#invalid > div:nth-child(1)') == null) {
                    let theLocation = document.querySelector("#invalid")

                    //sorts out the bulma notfication thing.
                    let notification = document.createElement("div")
                    notification.classList.add('notification')
                    notification.classList.add('is-danger')
                    notification.classList.add("is-light");
                    notification.textContent = 'Invalid Input'

                    theLocation.appendChild(notification)
                }

            }
            else {
                // console.log('push to local storage') [my cool way of commenting B-) ]
                if (team.Team === teamName1) {

                    //pushes two arrays. One for the top and one for the bottom part of the table.
                    team.games.push({
                        "Name": teamName1,
                        "1": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(2) select').value,
                        "2": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(3) select').value,
                        "3": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(4) select').value,
                        "4": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(5) select').value,
                        "5": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(6) select').value,
                        "6": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(7) select').value,
                        "7": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(8) select').value,
                        "8": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(9) select').value,
                        "9": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(10) select').value,
                    },
                        {
                            "Name": document.querySelector("#team2").value,
                            "1": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(2) select').value,
                            "2": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(3) select').value,
                            "3": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(4) select').value,
                            "4": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(5) select').value,
                            "5": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(6) select').value,
                            "6": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(7) select').value,
                            "7": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(8) select').value,
                            "8": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(9) select').value,
                            "9": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(10) select').value,
                        }
                    )

                    //integer + true = integer + 1. Therefore it adds one to the wincount if the team won!
                    let winCount = parseInt(team.Wins) + winner

                    //updates the local storage
                    team.Wins = winCount;
                    //localStorage.setItem(team.Team + "Wins", winCount.toString())
                }
                //this is here in case the two teams that play each other are both team liquid sponsored. It will add the game to the array for both teams!
                if (document.querySelector("#team2").value === team.Team) {
                    team.games.push(
                        {
                            "Name": document.querySelector("#team2").value,
                            "1": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(2) select').value,
                            "2": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(3) select').value,
                            "3": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(4) select').value,
                            "4": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(5) select').value,
                            "5": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(6) select').value,
                            "6": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(7) select').value,
                            "7": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(8) select').value,
                            "8": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(9) select').value,
                            "9": document.querySelector('.main-table tbody tr:nth-child(2) td:nth-child(10) select').value,
                        },
                        {
                            "Name": document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > select").value,
                            "1": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(2) select').value,
                            "2": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(3) select').value,
                            "3": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(4) select').value,
                            "4": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(5) select').value,
                            "5": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(6) select').value,
                            "6": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(7) select').value,
                            "7": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(8) select').value,
                            "8": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(9) select').value,
                            "9": document.querySelector('.main-table tbody tr:nth-child(1) td:nth-child(10) select').value,
                        }
                    )
                    //need to put !winner for some reason but its fine because it works (after a lot of trial and error. I know it reverses the boolean)
                    //integer + true = integer + 1. Therefore it adds one to the wincount if the team won!
                    let winCount = parseInt(team.Wins) + !winner

                    //updates the local storage
                    team.Wins = winCount;
                    //localStorage.setItem(team.Team + "Wins", winCount.toString())
                }

                //resets the local storage stuff
                localStorage.setItem('teams', JSON.stringify(data));

                // console.log(data);

                //reloads the page to clear the fields
                location.reload();
            }

        });

    }

    //creates a drop down menu with the team names
    function teamDropdown(row) {
        let cell = document.createElement('td')
        let teamDropdown = document.createElement('select')

        teamDropdown.classList.add('select')
        teamDropdown.classList.add('is-medium')
        teamDropdown.classList.add('is-danger')


        let option = document.createElement('option')
        option.textContent = 'Select a team'
        teamDropdown.appendChild(option)

        //this is so the team names go in the first select. Getting the length of the object I thought was very smart
        for (i = 0; i < Object.keys(data).length; i++) {
            let option = document.createElement('option')

            //this grabs the team name from the local storage
            option.textContent = data[i].Team

            //sets the value thing for later when I grab the thing so we can add scores to the local storage
            option.setAttribute('value', data[i].Team)
            teamDropdown.appendChild(option)
        }
        cell.appendChild(teamDropdown);

        //for whatever reason this stuff likes to run more times than it should so if it encounters an error itll just leave the method.
        try {
            row.appendChild(cell);
        } catch (error) {
            
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

        //for whatever reason this stuff likes to run more times than it should so if it encounters an error itll just leave the method.
        try {
            row.appendChild(cell);            
        } catch (error) {
            
        }
    }

    //updates the total score on the far right of the table
    function calcTotal() {
        let topTotal = document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(11)")
        let botTotal = document.querySelector("body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(11)")

        //will infinitely add stuff if I dont set this to 0 and readd everything every time
        topTotal.textContent = 0
        botTotal.textContent = 0

        //just a for loop. Start at 2 and end at 11 because those are the table slots for each end.
        for (i = 2; i < 11; i++) {
            let index = document.querySelector(`body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(${i}) > select`)
            topTotal.textContent = parseInt(topTotal.textContent) + parseInt(index.value)
        }
        for (i = 2; i < 11; i++) {
            let index = document.querySelector(`body > div.container > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(${i}) > select`)
            botTotal.textContent = parseInt(botTotal.textContent) + parseInt(index.value)
        }
    }

    //this is for the like shortcut thing I used to debug for a bit that edits the amt of wins a team has in the local storage. It has no verification check, but I mean like if the team is on 'select a team' its not going to work anyways. ANd its very easy to reset to the correct amount of wins if a mistake is made.
    // function updateWinsLocalStorage() {
    //     let index = getIndex();
    //     data[index].Wins = document.querySelector("#winsAmt").value;
    //     localStorage.setItem('teams', JSON.stringify(data));

    //     location.reload();
    // }

    //just borrowed this from my other file. Its useful enough.
    function getIndex() {
        //simply iterates through all the teams and determines if they are the correct one or not
        for (i = 0; i < Object.keys(data).length; i++) {
            if (data[i].Team === document.querySelector("#winsInputDropdown > td:nth-child(1) > select").value) {
                return i;
            }
        }
    }

    //I dont know if I need this but whatever. If local storage is gone then itll reset it back to what it was.
    function resetLocalStorage() {
        if (localStorage.getItem('teams') == null) {

            const backup = [
                {
                    "Team": "Mouat",
                    "img": "img/mouat_team2022.jpeg",
                    "Fourth": "Bruce Mouat",
                    "Third": "Grant Hardie",
                    "Second": "Bobby Lammie",
                    "Lead": "Hammy McMillan Jr.",
                    "games": [
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "1",
                            "Name": "Mouat"
                        },
                        {
                            "1": "3",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "1",
                            "Name": "Mouat"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "1",
                            "5": "1",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "0",
                            "Name": "Epping"
                        },
                        {
                            "1": "4",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Howard"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Edin"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "6",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "5",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "4",
                            "8": "0",
                            "9": "0",
                            "Name": "Merkeley"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Howard"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "1",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Edin"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "0",
                            "Name": "Edin"
                        },
                        {
                            "1": "3",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Howard"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "1",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Flasch"
                        },
                        {
                            "1": "3",
                            "2": "1",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Merkeley"
                        }
                    ],
                    "Wins": "13"
                },
                {
                    "Team": "Koe",
                    "img": "img/koe_team2022.jpeg",
                    "Fourth": "Kevin Koe",
                    "Third": "Tyler Tardi",
                    "Second": "Brad Thiessen",
                    "Lead": "Karrick Martin",
                    "games": [
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "1",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "1",
                            "8": "1",
                            "9": "1",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Flasch"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "1",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "4",
                            "8": "0",
                            "9": "1",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "1",
                            "9": "0",
                            "Name": "Howard"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "2",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Flasch"
                        }
                    ],
                    "Wins": "4"
                },
                {
                    "Team": "Bottcher",
                    "img": "img/bottcher_team2022.jpeg",
                    "Fourth": "Brendan Bottcher",
                    "Third": "Marc Kennedy",
                    "Second": "Brett Gallant",
                    "Lead": "Ben Hebert",
                    "games": [
                        {
                            "1": "3",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "1",
                            "Name": "Mouat"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Gueshue"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "1",
                            "8": "1",
                            "9": "1",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "3",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "4",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "3",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "7",
                            "9": "0",
                            "Name": "Winson"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "4",
                            "8": "0",
                            "9": "1",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "1",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        }
                    ],
                    "Wins": "5"
                },
                {
                    "Team": "Dunstone",
                    "img": "img/dunstone_team2022.jpeg",
                    "Fourth": "Matt Dunstone",
                    "Third": "B.J. Neufeld",
                    "Second": "Colton Lott",
                    "Lead": "Ryan Harnden",
                    "games": [
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "1",
                            "Name": "Mouat"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "3",
                            "8": "0",
                            "9": "1",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Schwaller"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "1",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "1",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Koe"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Mouat"
                        },
                        {
                            "1": "3",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "1",
                            "8": "1",
                            "9": "0",
                            "Name": "Merkeley"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "3",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Edin"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "1",
                            "8": "0",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "1",
                            "Name": "Bottcher"
                        }
                    ],
                    "Wins": 6
                },
                {
                    "Team": "Whyte",
                    "img": "img/whyte_team2022.jpeg",
                    "Fourth": "Ross Whyte",
                    "Third": "Robin Brydone",
                    "Second": "Duncan McFadzean",
                    "Lead": "Euan Kyle",
                    "games": [
                        {
                            "1": "0",
                            "2": "2",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "1",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Flasch"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Epping"
                        },
                        {
                            "1": "2",
                            "2": "0",
                            "3": "0",
                            "4": "1",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "0",
                            "6": "2",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Howard"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Dunstone"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "2",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "1",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Bottcher"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "1",
                            "4": "0",
                            "5": "0",
                            "6": "1",
                            "7": "0",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "2",
                            "6": "0",
                            "7": "0",
                            "8": "2",
                            "9": "0",
                            "Name": "Edin"
                        },
                        {
                            "1": "0",
                            "2": "0",
                            "3": "0",
                            "4": "2",
                            "5": "0",
                            "6": "0",
                            "7": "2",
                            "8": "0",
                            "9": "0",
                            "Name": "Whyte"
                        },
                        {
                            "1": "1",
                            "2": "0",
                            "3": "0",
                            "4": "0",
                            "5": "1",
                            "6": "0",
                            "7": "0",
                            "8": "1",
                            "9": "0",
                            "Name": "Howard"
                        }
                    ],
                    "Wins": "4"
                }
            ]
            localStorage.setItem('teams', JSON.stringify(backup));

            location.reload();
        }
    }


