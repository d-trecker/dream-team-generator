const inquirer =  require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const generatedPage = './dist/DreamTeam.html'
const path = require('path');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// Empty array created to capture user input response. 
const dreamTeam = [];
// Initial prompt to obtain manager info and start cycle through team members. 
function assembleDreamTeam() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'bossName',
            message: "What is your Manager's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter their name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'bossId',
            message: "What is your Manager's ID number?",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('This is not a valid ID. Try again only with numbers.');
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'bossEmail',
            message: "What is your Manager's email?",
            validate: emailInput => {
                if (emailInput.includes("@")){
                    return true;
                }else {
                    console.log('This is not a valid email. Try again.');
                    return false;
                }
            }
        },
        {
            input: 'input',
            name: 'bossNumber',
            message: "What is your Manager's office number?",
            validate: phoneInput => {
                if (isNaN(phoneInput)) {
                    console.log('Please enter a valid number.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(dreamMember => {
        const manager = new Manager(dreamMember.bossName, dreamMember.bossId, dreamMember.bossId, dreamMember.bossNumber);
        dreamTeam.push(manager);
        moreDreamers();
    })
    // Function to create more members. 
    function moreDreamers() {
        inquirer.prompt ([
            {
                type: 'checkbox',
                name: 'dreamEmployee',
                message: 'What other Dream Employee(s) would you like to add?',
                choices: [
                    "Engineer",
                    "Intern",
                    "None"
                ]
            }
        ]) .then(dreamMember => {
            const pick = dreamMember.dreamEmployee;
            if(pick == "Engineer"){
                dreamEngineer();
            } else if (pick == "Intern") {
                dreamIntern();
            } else if (pick == "None") {
                createDreamTeam();
            }
        })
        
    }

// function to create engineers. 
function dreamEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'enginName',
            message: "What is the name of the Engineer?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter their name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'enginId',
            message: 'What is their ID number?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('This is not a valid ID. Try again only with numbers.');
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'enginEmail',
            message: 'What is their email address?',
            validate: emailInput => {
                if (emailInput.includes("@")){
                    return true;
                }else {
                    console.log('This is not a valid email. Try again.');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub user name?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter a school.');
                  return false;
                }
              }
        }

    ]).then (dreamMember => {
        const engineer = new Engineer (dreamMember.enginName, dreamMember.enginId, dreamMember.enginEmail, dreamMember.github);
        dreamTeam.push (engineer);
        moreDreamers();
    })
};
// function to create interns. 
function dreamIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the name of the Intern?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter their name.');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is their ID number?',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log('This is not a valid ID. Try again only with numbers.');
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is their email address?',
            validate: emailInput => {
                if (emailInput.includes("@")){
                    return true;
                }else {
                    console.log('This is not a valid email. Try again.');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'school',
            message: "What is their School's user name?",
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('Please enter a school.');
                  return false;
                }
              }
        }

    ]).then (dreamMember => {
        const intern = new Intern (dreamMember.internName, dreamMember.internId, dreamMember.internEmail, dreamMember.school);
        dreamTeam.push(intern);
        moreDreamers();
    })

};

function createDreamTeam() {
    fs.writeFileSync(generatedPage, "");

    
    // fs.writeFile(fileName, data, function (err) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Your ReadMe has been generated! Please check out the __")
    //     }
    // });
}

}
assembleDreamTeam();
