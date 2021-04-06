// Require section
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
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
                message: 'Enter Employee Email ID:',
                validate: emailInput => {
                    if (!emailInput.includes('@')) {
                        console.log('Please enter a valid email address');
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select the role of the employee',
                choices: [
                    'Employee',
                    'Engineer',
                    'Manager',
                    'Intern'
                ]
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the github username of the engineer:',
                when: ({ role }) => role === 'Engineer'
            },
            {
                type: 'input',
                name: 'officeNo',
                message: 'Enter the office no of the manager:',
                when: ({ role }) => role === 'Manager'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the school of the intern:',
                when: ({ role }) => role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'confirmAddTeamMember',
                message: 'Would you like to enter another team member?',
                default: false
            }
        ])

        .then(response => {

            if (response.role === "Employee") {
                const employee = new Employee(response.name, response.id, response.email);
                employeeData.push(employee);
             } else if (response.role === "Engineer") {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                employeeData.push(engineer);
             } else if (response.role === "Manager") {
                const manager = new Manager(response.name, response.id, response.email, response.officeNo);
                employeeData.push(manager);
             } else if (response.role === "Intern") {
                const intern = new Intern(response.name, response.id, response.email, response.school);
                employeeData.push(intern);
            }
            
            if (response.confirmAddTeamMember) {
                // console.log(response.confirmAddTeamMember);
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
        return copyFile(response);
    })
    // .then(response => {
    //     console.log(response);
    // })
    .catch(err => {
        console.log(err);
    });