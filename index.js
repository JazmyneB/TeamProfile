const Inquirer = require('inquirer')
//Generates and starts application


const EmployeeInfo = () => {
    return Inquirer.prompt([
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
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmEmployee',
        //     message: 'Would you like to add another Employee?',
        //     default: false
        // }

    ])
}

EmployeeInfo();