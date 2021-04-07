// Require section
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const generateHtml = require('./src/html-template');
const { writeFile, copyFile, copyJSFile } = require('./utils/generate-site');
const teamData = [];

// Prompt user for manager Data
const promptAddManager = teamData => {
    console.log(`
  =================
  Add Manager Data
  =================
  `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter Name of the Manager: (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the Manager!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID of the Manager:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Email ID of the Manager:',
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
                type: 'input',
                name: 'officeNo',
                message: 'Enter the office no of the manager:',
            },
            {
                type: 'confirm',
                name: 'confirmAddTeamMembers',
                message: 'Would you like to add team members?',
                default: false
            }
        ])

        // push the prompt response data array to the teamData object
        .then(response => {
            if (!teamData) {
                teamData = [];
            }
            const manager = new Manager(response.name, response.id, response.email, response.officeNo);
            teamData.push(manager);

            if (response.confirmAddTeamMembers) {
                // console.log(response.confirmAddTeamMember);
                return promptAddteam(teamData);
            } else {
                return teamData;
            }
        });
};

// Prompt user for employee Data
const promptAddteam = teamData => {
    console.log(`
  =================
  Add Team memember 
  =================
  `);

    return inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the team member: (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the team member');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter Employee ID of the team member:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Email ID of the team member:',
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
                    'Engineer',
                    'Intern',
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
                name: 'school',
                message: 'Enter the school of the intern:',
                when: ({ role }) => role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'confirmAddTeamMember',
                message: 'Would you like to add another team member?',
                default: false
            }
        ])

        .then(response => {

            if (response.role === "Engineer") {
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                teamData.push(engineer);
            } else {
                const intern = new Intern(response.name, response.id, response.email, response.school);
                teamData.push(intern);
            }

            if (response.confirmAddTeamMember) {
                // console.log(response.confirmAddTeamMember);
                return promptAddteam(teamData);
            } else {
                return teamData;
            }
        });
};

promptAddManager()
    .then(teamData => {
        return generateHtml(teamData);
    })
    .then(response => {
        return writeFile(response);
    })
    .then(response => {
        console.log(response);
        return copyFile(response);
    })
    .then(response => {
        console.log(response);
        return copyJSFile(response);
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });