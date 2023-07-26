// Included packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Created an array of questions for user input.
const questions = [
    {
        type: "input",
        name: 'title',
        message: ''
    },
    {
        type: "input",
        name: 'description',
        message: ''
    },
    {
        type: "input",
        name: 'installation',
        message: ''
    },
    {
        type: "input",
        name: 'usage',
        message: ''
    },
    {
        type: "input",
        name: 'contribution',
        message: ''
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose License:',
        choices: [''],
    },
    {
        type: "input",
        name: 'test',
        message: ''
    },
    {
        type: "input",
        name: 'questions',
        message: ''
    },
];

// Created a function to write README file.
function writeToFile(fileName, data) {
    const resolved = data
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
