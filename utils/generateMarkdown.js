// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      break;
    case 'APACHE 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
      break;
    case 'GPL 3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      break;
    case 'BSD 3':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
      break;
    default:
      licenseBadge = ''
      break;
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = '(https://opensource.org/licenses/MIT)'
      break;
    case 'APACHE 2.0':
      licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GPL 3.0':
      licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD 3':
      licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    default:
      licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install necessary dependencies, run the following commands:
${data.command}

## Usage
${data.usage}

## License
This project is licensed under ${data.license} license.

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions feel free to contact me directly at ${data.email}. You can also find more of my work at my Github: [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
