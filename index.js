const Inquirer = require('inquirer');
const fs = require('fs');
//Need Class files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile, copyFile }  = require('./src/generate-site');
const template = require('./src/page-template');

//console.log(template);

const team = [];


const EmployeeInfo = () => {
    Inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name of Employee!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is the Employee ID?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('Please enter the EMployee ID!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter the email of Employee!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the Employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
        // {
        //     type: 'confirm',
        //     name: 'confirmEmployee',
        //     message: 'Would you like to add another Employee?',
        //     default: false
        // }

    ]).then(answer => {
        //console.log(answer);
        if (answer.role === 'Manager'){
            Inquirer.prompt([
                {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Office Number'
                }
            ]).then(data =>{
                //console.log(data);
                //console.log(answer);
                const newMange = new Manager(answer.name, answer.Id, answer.email, data.officeNumber);
                //console.log(newMange.getRole());
                team.push(newMange);
                //team["role"] = newMange.getRole();
                //console.log(team);
                addEmployee();
                // if (answer.confirmEmployee){
                //     return EmployeeInfo(team);
                // } else {
                //     return team;
                // }
            })
            
        }
        else if (answer.role === 'Engineer'){
            Inquirer.prompt([
                {
                type: 'input',
                name: 'gitHub',
                message: 'What is their GitHub?'

                }
            ]).then(data => {
                const newEngin = new Engineer(answer.name, answer.Id, answer.email, data.gitHub);
                team.push(newEngin);
                addEmployee();
            })
        }
        else if (answer.role === 'Intern'){
            Inquirer.prompt([
                {
                type: 'input',
                name: 'School',
                message: 'What school do they attend?'
                }
            ]).then(data => {
                const newIntern = new Intern(answer.name, answer.Id, answer.email, data.School);
                team.push(newIntern);
                addEmployee();
            })
        }
        // console.log(team)
        // setTimeout(function() {
        //     if (answer.confirmEmployee === true){
        //         EmployeeInfo();
        //     }

        // },4000)
        

    })
}

const addEmployee = () => {
    console.log(team);
    Inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add another Employee?',
            default: false
        }
    ]).then(info =>{
        console.log(info);
        //console.log(addData);
        if (info.confirmEmployee){
            EmployeeInfo(team);
        } else {
            //console.log(team);
            let wF = template(team);
            writeFile(wF);
            console.log(writeFile(wF));
            copyFile();
        }
    })
}



EmployeeInfo();


// .then(info =>{
//    console.log(info);
    //return generatePage(info);
//});
// .then(pageHTML =>{
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err =>{
//     console.log(err);
// });