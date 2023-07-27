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
        message: 'Open for contribution:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose License:',
        choices: ['MIT', 'Apache 2.0', 'EPL 2.0', 'GNU GPL v2.0', 'None'],
    },
    {
        type: "input",
        name: 'test',
        message: 'Test?'
    },
    {
        type: "input",
        name: 'questions',
        message: 'Any questions?'
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
    });
}

// Function call to initialize app.
init();
