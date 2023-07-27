// Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user input.
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: "input",
        name: 'description',
        message: 'A brief description:'
    },
    {
        type: "input",
        name: 'installation',
        message: 'Installation Guide:'
    },
    {
        type: "input",
        name: 'usage',
        message: 'Usage Instruction:'
    },
    {
        type: "input",
        name: 'contribution',
        message: 'Contribution:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose License:',
        choices: ['Apache 2.0', 'EPL 2.0', 'GNU GPL v2.0', 'BSL 1.0', 'MIT', 'MPL 2.0', 'None'],
    },
    {
        type: "input",
        name: 'test',
        message: 'Test:'
    },
    {
        type: "input",
        name: 'questions',
        message: 'Any questions?'
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub Username:",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username:");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address:");
            return false;
          }
        },
      },
];

// Created a function to write README file.
function writeToFile(fileName, data) {
    const resolved = data
    const folderPath = './readme_generated';

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    fs.writeFileSync(fileName, resolved)
}

// Created a function to initialize app.
function init() {
    inquirer.prompt(questions).then((data)=>
    {
        writeToFile('./readme_generated/README_Generated.md', generateMarkdown(data))
        console.log("Successful, great job. Now check out your new generated README!");
    });
}

// Function call to initialize app.
init();
