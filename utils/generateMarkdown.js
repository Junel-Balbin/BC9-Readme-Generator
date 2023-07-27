// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `MIT (https://opensource.org/licenses/MIT)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contribution](#contribution)
  6. [License](#license)
  7. [Test](#test)
  8. [Questions](#questions)

  
## Title
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test Instructions
${data.testInstructions}

## License
${renderLicenseLink(data.license)}

## Questions
If you have any questions please contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

#### GitHub Username: ${data.github}

#### GitHub Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
