
const generateRoleSpecificItem = (teamMember) => {
    if(teamMember.getRole() === 'Manager') {
        return teamMember.getOfficeNumber(); 
    } else if (teamMember.getRole() === 'Engineer') {
        return teamMember.getGithub(); 
    } else {
        return teamMember.getSchool(); 
    }
}


const generateTeamCards = (teamMembers) => {

    const managers = teamMembers.filter(teamMember => teamMember.getRole() === 'Manager');
    const engineers = teamMembers.filter(teamMember => teamMember.getRole() === 'Engineer');
    const interns = teamMembers.filter(teamMember => teamMember.getRole() === 'Intern');

    const sortedTeamMembers= [...managers, ...engineers, ...interns]; 

    return sortedTeamMembers.map(teamMember => {
        return `
        <div class = "card col-3 m-3">
            <div class = "card-body">
                <h5 class = "card-title">${teamMember.getName()}</h5>
                <h6 class = "card-subtitle mb-2">${teamMember.getRole()}</h6> 
                <ul class = "card-text list-group">
                    <li class = "list-group-item">${teamMember.getId()}</li> 
                    <li class = "list-group-item">${teamMember.getEmail()}</li>
                    <li class = "list-group-item">${generateRoleSpecificItem(teamMember)}</li>
                </ul>
            </div>
        </div>
        `;
    }).join(''); 

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
            <div class= "d-flex flex-row justify-content-center">
                ${generateTeamCards(teamData)}
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = generatePage;