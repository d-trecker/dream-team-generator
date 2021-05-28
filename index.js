const inquirer =  require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const generatedPage = './dist/DreamTeam.html'
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
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
                if (emailInput.includes("@" && ".com")){
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
            validate: officeInput => {
                if (isNaN(officeInput)) {
                    console.log('Please enter a valid number.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(dreamMember => {
        const manager = new Manager(dreamMember.bossName, dreamMember.bossId, dreamMember.bossEmail, dreamMember.bossNumber);
        dreamTeam.push(manager);
        // console.log(dreamTeam);
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
                createDreamTeam()
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
                if (emailInput.includes("@" && ".com")){
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
                  console.log('Please enter a GitHub user name.');
                  return false;
                }
              }
        }

    ]).then (dreamMember => {
        const engineer = new Engineer (dreamMember.enginName, dreamMember.enginId, dreamMember.enginEmail, dreamMember.github);
        dreamTeam.push (engineer);
        // console.log(dreamTeam);
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
                if (emailInput.includes("@" && ".com")){
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
        // console.log(dreamTeam);
        moreDreamers();
    })

};

function callBack(err) {
    if (err) throw err; 
    console.log('Your Dream Team has been created!');
};

//Function to write file to desired path and added copyfile to add CSS to desired path. 
function createDreamTeam() {
    const context = pageTemplate(dreamTeam);
    fs.writeFileSync(generatedPage, context);
    fs.copyFile('./src/style.css', './dist/style.css', callBack); 
};

}
assembleDreamTeam();

module.exports = dreamTeam;