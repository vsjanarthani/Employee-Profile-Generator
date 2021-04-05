const inquirer = require('inquirer');
const generateHtml = require('./src/html-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = employeeData => {
    console.log(`
  =================
  Add a New Employee
  =================
  `);
 // If there's no 'projects' array property, create one
    if (!employeeData) {
        employeeData = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name of the Employee: (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter Employee name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Employee Email ID:'
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another Employee?',
                default: false
            }
        ])
        
        .then(response => {
           
            employeeData.push(response);
            if (employeeData.confirmAddEmployee) {
                return promptUser(employeeData);
            } else {
                return employeeData;
            }
        });
};

promptUser()
    .then(employeeData => {
        return generateHtml(employeeData);
    })
    .then(response => {
        return writeFile(response);
    })
    .then(response => {
        console.log(response);
        return copyFile();
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });