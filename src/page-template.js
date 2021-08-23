
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
        <div class = "card col-6 col-lg-3 m-3">
            <div class = "card-body">
                <h3 class = "card-title">${teamMember.getName()}</h3>
                <h4 class = "card-subtitle mb-2">${teamMember.getRole()}</h4> 
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

const generatePage = (teamMembers, teamName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet" />
        <title>Team Builder</title>
    </head>
    <body>
        <header class="text-center p-2">
            <h1>${teamName}</h1>
        </header>
        <main class="container">
            <div class= "d-flex flex-row justify-content-center align-items-center flex-wrap  card-wrapper">
                ${generateTeamCards(teamMembers)}
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = generatePage;