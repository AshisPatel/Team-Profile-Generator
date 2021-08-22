const inquirer = require('inquirer');

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
            },
            {
                type: 'list',
                name: 'nextMember',
                message: "Would you like to add more team members?",
                choices: ['Engineer', 'Intern', "No, I'm done!"]
            }
        ])
        .then(managerData => console.log(managerData));
        
}

// Create function to check if the user wants to add an engineer, intern, or if they're done. 
const getNextMember = (teamData) => {
    if 
}

// Create function to gather Engineer data
const getEngineerData = (teamData) => {

}
// Create function to gather Intern data 
const getInternData = (teamData) => {

}
getManagerData();