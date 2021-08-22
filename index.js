const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
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
            const { nextMember } = answer;
            if (nextMember === 'Engineer') {
                return getEmployeeData(nextMember);
            } else if (nextMember === 'Intern') {
                return getEmployeeData(nextMember); 
            } else {
                return teamMembers;
            }
        })
}

const getEmployeeData = function (type) {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the employee's name: ",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the employee's ID: ",
                validate: idInput => {
                    // If the input is not a number or empty, the user will be given a message informing them of that. Otherwise, valid and can continue
                    if (isNaN(idInput) || !idInput) {
                        return "This input is meant to be a number! (Start typing to dismiss this message)";
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
                message: "Enter the employee's email: ",
                validate: emailInput => {
                    // Check if there is an "@" sign in the email input
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        return "Please enter a valid email address!(Start typing to dismiss this message)"
                    }
                },
                // Again, filter is used to clear old input or pass on valid input
                filter: emailInput => {
                    if (emailInput.includes('@')) {
                        return emailInput;
                    } else {
                        return "";
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the team manager's office number: ",
                validate: officeNumberInput => {
                    // If the input is not a number or empty, the user will be given a message informing them of that. Otherwise, valid and can continue
                    if (isNaN(officeNumberInput) || !officeNumberInput) {
                        return "This input is meant to be a number! (Start typing to dismiss this message)";
                    } else {
                        return true;
                    }
                },
                // Filter is neccesary to remove the past invalid input. Thus return blank if the input is not a number and return the value if it is a number 
                filter: officeNumberInput => {
                    if (isNaN(officeNumberInput)) {
                        return "";
                    } else {
                        return officeNumberInput;
                    }
                },
                when: () => {
                    if (type) {
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's Github: ",
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log("Please enter in the engineer's Github username!"); 
                        return false; 
                    }
                },
                when: () => {
                    if (type === 'Engineer') {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school: ",
                validate: schoolInput => {
                    if(schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter in the intern's school!"); 
                        return false; 
                    }
                },
                when: () => {
                    if (type === 'Intern') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(employeeData => {
            if (type === 'Engineer') {
                const { name, id, email, github } = employeeData;
                const engineer = new Engineer(name, id, email, github);
                teamMembers.push(engineer);
                return getNextMember();
            } else if (type === 'Intern') {
                const { name, id, email, school } = employeeData;
                const intern = new Intern(name, id, email, school);
                teamMembers.push(intern);
                return getNextMember();
            } else {
                const { name, id, email, officeNumber } = employeeData;
                const manager = new Manager(name, id, email, officeNumber);
                teamMembers.push(manager);
                return getNextMember();
            }
        })
}

getEmployeeData()
    .then(teamData => generatePage(teamData))
    .then(siteHTML => writeFile(siteHTML))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message); 
    })
    .catch(err => {
        console.log(err); 
    })

