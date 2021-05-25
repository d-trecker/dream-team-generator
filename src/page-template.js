// const fs = require('fs');
// const path = require('path');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
// const Employee = require('./lib/Employee.js');
const teamRoster = require('../index')
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
              <p class="card-header">Office Number:${Employee.officeNumber} </p>
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
              <p class="card-header">GitHub:<a herf="https://github.com/${Employee.getGithub()}" ${Employee.getGithub()} </p>
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
              <p class="card-header">School:${Employee.school} </p>
            </div>
          </div>
         `;

        }

    });
    return generate;
}

const mainPage = (teamRoster) => {
    console.log(teamRoster);
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

    <section class=" card-section">

    ${theDreamTeam(teamRoster)}

    </section>
  </main>
</body>

</html> `

}

module.exports = mainPage;













// const addTeamCard = dreamTeamArr => {
//     const dreamHtmlArr = dreamTeamArr.map(({name, id, email}) => {
//             return `
//     <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
//     <div class="card-header">
//       <h5 class="card-title">Name: ${Employee.name} </h5>
//       <h5 class="card-title">Position: ${Employee.role} </h5>
//     </div>
//     <div class="card-body">
//       <p class="card-header">ID: ${Employee.id} </p>
//       <p class="card-header">Email: ${Employee.email} dylan_trecker@yahoo.com </p>
//       <p class="card-header">Office Number: 847-848-4341 </p>
//     </div>
//   </div>
//     `;
// });
// }


// mainPageTemplate => {
//     // destructure page data by section
//     const { projects, about, ...header } = createPageTemplate;
  
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Dream-Team</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//   <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//   <link rel="preconnect" href="https://fonts.gstatic.com">
//   <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//     integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
//   <link rel="stylesheet" href="style.css">
// </head>

// <body>
//   <header>
//     <h1 class="page-header text-white">The Dream Team </h1>
//   </header>

//   <main class="container">

//     <section class=" card-section">

//     ${addTeamCard()}

//     </section>
//   </main>
// </body>

// </html> `

// };

// module.exports = {
//     mainPageTemplate,
//     addTeamCard
// };
