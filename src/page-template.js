//Need to create Cards for each Employee

const generateManager = manager => {
    if (!manager){
        return ''
    }
    return `
    <div class = "row">
    <div class = "col-sm-6>
    <div class="card">
    <div class = "card-body">
    <h5 class = "card-header bg-primary text-white"> ${manager.name} </h5>
    <h6> ${manager.getRole()} </h6>
    <ul class = "list-group list-group-flush">
    <li class = "list-group-item"> ${manager.id} </li>
    <li class = "list-group-item> ${manager.email} </li>
    <li class = "list-group-item> ${manager.officeNumber} </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    `
}

module.export = templateData => {
    console.log(templateData);
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
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
  <h1>Here is your page</h1>

  </body>
  </html>
  `;
};