const inquirer = require('inquirer');


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
                console.log(teamMembers); 
                return teamMembers; 
            }
        })
}

const getManagerData = () => {
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
            managerData.role = 'Manager'; 
            teamMembers.push(managerData); 
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
        .then(memberData => {
            memberData.role = 'Engineer'; 
            teamMembers.push(memberData); 
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
            name: 'github',
            message: "Enter intern's school: "
        }
    ])
    .then(memberData => {
        memberData.role = 'Intern'; 
        teamMembers.push(memberData);
        return getNextMember(); 
    });
}

getManagerData();