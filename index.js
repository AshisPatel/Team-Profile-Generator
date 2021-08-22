const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const generatePage = require('./src/page-template'); 
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
                message: "Enter the team manager's name: "
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the team manager's ID: "
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the team manager's email: "
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

getManagerData().then(teamData => generatePage(teamData)).then(data => console.log(data));  