const teamRoster = require('../index')

//Function to determine what employee card to generate. 
const theDreamTeam = (teamRoster) => {
    let generate = '';

    teamRoster.forEach(Employee => {
        if(Employee.getRole() === 'Manager'){
            generate += `

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">Name: ${Employee.name} </h5>
              <h5 class="card-title">Position: ${Employee.getRole()} </h5>
            </div>
            <div class="card-body">
              <p class="card-header">ID: ${Employee.id} </p> 
              <p class="card-header">Email: <a href="mailto:${Employee.email}">${Employee.email}</a> </p>
              <p class="card-header">Office Number: ${Employee.officeNumber} </p>
            </div>
          </div>
         `;
        }

        if (Employee.getRole() === 'Engineer') {
            generate += `

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">Name: ${Employee.name} </h5>
              <h5 class="card-title">Position: ${Employee.getRole()} </h5>
            </div>
            <div class="card-body">
              <p class="card-header">ID: ${Employee.id} </p>
              <p class="card-header">Email: <a href="mailto:${Employee.email}">${Employee.email}</a> </p>
              <p class="card-header">GitHub: <a href="https://github.com/${Employee.github}" target="_blank"> ${Employee.github}</a> </p>
            </div>
          </div>
         `;

        }

        if (Employee.getRole() === 'Intern') {
            generate += `

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">
              <h5 class="card-title">Name: ${Employee.name} </h5>
              <h5 class="card-title">Position: ${Employee.getRole()} </h5>
            </div>
            <div class="card-body">
              <p class="card-header">ID: ${Employee.id} </p>
              <p class="card-header">Email: <a href="mailto:${Employee.email}">${Employee.email}</a> </p>
              <p class="card-header">School: ${Employee.school} </p>
            </div>
          </div>
         `;

        }

    });
    return generate;
}

//Function to generate main HTML. 
const mainPage = (teamRoster) => {
    // console.log(teamRoster);
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dream-Team</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <h1 class="page-header text-white">The Dream Team </h1>
  </header>

  <main class="container">


    ${theDreamTeam(teamRoster)}


  </main>
</body>

</html> `

}

module.exports = mainPage;