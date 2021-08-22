

const getManager = function (teamMembers) {

    const managers = teamMembers.filter(teamMember => teamMember.getRole() === 'Manager');

    return managers.map(manager => {
        return `
        <div class = "col-2 card">
            <div class = "card-body">
                <h5 class = "card-title">${manager.getName()}</h5>
                <h6 class = "card-subtitle">${manager.getRole()}</h6> 
                <ul class = "card-text list-group">
                    <li class = "list-group-item">${manager.getId()}</li> 
                    <li class = "list-group-item">${manager.getEmail()}</li>
                    <li class = "list-group-item"> ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
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


const generatePage = (teamData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Builder</title>
    </head>
    <body>
        <main class="container">
            <div class="flex-row">
                ${getManager(teamData)}

                ${getEngineers(teamData)}

                ${getInterns(teamData)}
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = generatePage;