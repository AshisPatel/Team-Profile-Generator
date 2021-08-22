

const getManager = function (teamMembers) {

    const managers = teamMembers.filter(teamMember => teamMember.getRole() === 'Manager');

    return managers.map(manager => {
        return `
        ${manager.getName()} <br />
        ${manager.getId()} <br />
        ${manager.getEmail()} <br />
        ${manager.getOfficeNumber()} <br />
        `;
    })
}

const getEngineers = function (teamMembers) {
    const engineers = teamMembers.filter(teamMember => teamMember.getRole() === 'Engineer');

    return engineers.map(engineer => {
        return `
        ${engineer.getName()} <br />
        ${engineer.getId()} <br />
        ${engineer.getEmail()} <br />
        ${engineer.getGithub()} <br />
        `;
    }).join(' ');

}

const getInterns = function (teamMembers) {
    const interns = teamMembers.filter(teamMember => teamMember.getRole() === 'Intern');

    return interns.map(intern => {
        return `
        ${intern.getName()} <br />
        ${intern.getId()} <br />
        ${intern.getEmail()} <br />
        ${intern.getSchool()} <br />
        `;
    }).join(' ');

}


const generatePage = (templateData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
    </head>
    <body>
        
    </body>
    </html>
    `;
}

module.exports = generatePage;