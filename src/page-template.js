//Need to create Cards for each Employee
let manny = [];
let eng = [];
let inter = [];
const generateManager = manager => {
    if (!manager){
        return ''
    }
    return `
    
    <div class="card" style="width: 15rem;">
    <div class = "card-header bg-primary text-white">
    <h5 class = "card-title"> ${manager.name} </h5>
    <h6 class="card-subtitle"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h6>
    </div>
    <div class="card-body">
    <ul class = "list-group list-group-flush">
    <li class = "list-group-item"> ID: ${manager.id} </li>
    <li class = "list-group-item"> Email: <a href=mailto:${manager.email}> ${manager.email}</a> </li>
    <li class = "list-group-item"> Office Number: ${manager.officeNumber} </li>
    </ul>
    </div>
    </div>
    `
}
const generateEngineer = engineer => {
    if (!engineer){
        return ''
    }
    return `
    
    <div class="card" style="width: 15rem;">
    <div class = "card-header bg-primary text-white">
    <h5 class = "card-title"> ${engineer.name} </h5>
    <h6 class="card-subtitle"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
    <ul class = "list-group list-group-flush">
    <li class = "list-group-item"> ID: ${engineer.id} </li>
    <li class = "list-group-item"> Email: <a href=mailto:${engineer.email}> ${engineer.email} </a></li>
    <li class = "list-group-item"> GitHub: <a href=https://github.com/${engineer.github}> ${engineer.github} </a></li>
    </ul>
    </div>
    </div>
    `
}

const generateIntern = intern => {
    if (!intern){
        return ''
    }
    return `
    
    <div class="card" style="width: 15rem;">
    <div class = "card-header bg-primary text-white">
    <h5 class = "card-title"> ${intern.name} </h5>
    <h6 class="card-subtitle"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h6>
    </div>
    <div class="card-body">
    <ul class = "list-group list-group-flush">
    <li class = "list-group-item"> ID: ${intern.id} </li>
    <li class = "list-group-item"> Email: <a href=mailto:${intern.email}>${intern.email} </a></li>
    <li class = "list-group-item"> School: ${intern.school} </li>
    </ul>
    </div>
    </div>
    `
}

function generateHTML(teamInfo) {
    //console.log(Object.keys(teamInfo));
    console.log(teamInfo.length);
    console.log(teamInfo[0].getRole())
    for (let i=0; i < teamInfo.length; i++){
        console.log(teamInfo[i])
        if (teamInfo[i].getRole() === "Manager"){
             manny += generateManager(teamInfo[i]);
        } else if (teamInfo[i].getRole() === "Engineer"){
            eng += generateEngineer(teamInfo[i]);
        } else if(teamInfo[i].getRole() === "Intern"){
            inter += generateIntern(teamInfo[i]);
        }
    }
   // const {Manager} = teamInfo;
    return `
    <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css">
  </head>

  <body>
  
  <nav class = "navbar navbar-dark bg-danger justify-content-center">
  <div class="navbar-header">
  <span class = "navbar-brand mb-0 h1">Team Chart</span>
  </div>
  </nav>
  <div class = "container text-center mx-auto">
  <div class = "row">
    ${(manny)}

    ${(eng)}

    ${(inter)}


    </div>

    </div>
  
  
  


  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  </body>
  </html>
  `;
};

module.exports = generateHTML;