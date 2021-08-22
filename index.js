const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generatePage = require('./src/page-template'); 
const {writeFile, copyFile} = require('./utils/generate-site'); 
// Initialize array to hold all team members
teamMembers = []; 
// Create function to check if the user wants to add an engineer, intern, or if they're done. 
const getNextMember = () => {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'nextMember',
                message: "Would you like to add more team members?",
                choices: ['Engineer', 'Intern', "No, I'm done!"]
            }
        )
        .then(answer => {
            const {nextMember} = answer; 
            if( nextMember === 'Engineer') {
                return getEngineerData(); 
            } else if (nextMember === 'Intern') {
                return getInternData(); 
            } else {
                return teamMembers; 
            }
        })
}

const getManagerData = function() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the team manager's name: ", 
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's name!"); 
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the team manager's ID: ",
                validate: idInput => {
                    // If the input is not a number or empty, the user will be given a message informing them of that. Otherwise, valid and can continue
                    if (isNaN(idInput) || !idInput) {
                        return "This input is meant to be a number! (Start typing to dismiss this message)"
                    } else {
                        return true; 
                    }
                },
                // Filter is neccesary to remove the past invalid input. Thus return blank if the input is not a number and return the value if it is a number 
                filter: idInput => {
                    if (isNaN(idInput)) {
                        return "";
                    } else {
                        return idInput; 
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the team manager's email: ",
                validate: emailInput => {
                    // Check if there is an "@" sign in the email input
                    if(emailInput.includes('@')) {
                        return true; 
                    } else {
                        return "Please enter a valid email address!(Start typing to dismiss this message)"
                    }
                },
                // Again, filter is used to clear old input or pass on valid input
                filter: emailInput => {
                    if(emailInput.includes('@')) {
                        return emailInput; 
                    } else {
                        return ""; 
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the team manager's office number: "
            }
        ])
        .then(managerData => {
            const {name, id, email, officeNumber} = managerData; 
            const manager = new Manager(name, id, email, officeNumber); 
            teamMembers.push(manager); 
            return getNextMember();
        });
        
}


// Create function to gather Engineer data
const getEngineerData = () => {
    return inquirer 
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the engineer's name: "
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter engineer's ID:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the engineer's email: "
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter engineer's Github: "
            }
        ])
        .then(engineerData => {
            const {name, id, email, github} = engineerData; 
            const engineer = new Engineer(name, id, email, github); 
            teamMembers.push(engineer); 
            return getNextMember(); 
        });
}
// Create function to gather Intern data 
const getInternData = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name: "
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email: "
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school: "
        }
    ])
    .then(internData => {
        const {name, id, email, school} = internData;
        const intern = new Intern(name, id, email, school); 
        teamMembers.push(intern);
        return getNextMember(); 
    });
}

getManagerData()
    .then(teamData => generatePage(teamData))
    .then(siteHTML => writeFile(siteHTML))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message); 
    })
    .catch(err => {
        console.log(err); 
    })