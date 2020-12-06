const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');


// array of questions for user
const prompts = [
        {
            type: 'input',
            name: 'project name',
            message: 'What is the the title of your project?', 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How may this project be used?', 
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install the project?', 
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Provide test instructions, if any.', 
        },
        {
            type: 'input',
            name: 'GitHub username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
             
        {
            type: 'input',
            name: 'contribution guidlines',
            message: 'How may one contribute to this project?', 
        },
        {
            type: 'list',
            name: 'license choices',
            message: 'What project license do you intend to implement?',
            choices: ["MIT", "Boost Software License 1.0", "GNU AGPLv3", "The Unlicense"] 
        },
        {
            type: 'input',
            name: 'year',
            message: 'Enter the current year.', 
        },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown(data), (err) => 
    err ? console.error(err) : console.log("You ReadMe has been saved.")
    );
}

// function to initialize program
function init() {
 inquirer.prompt(prompts).then((response) => {
     writeToFile("userREADME.md", response);
 });
}

// function call to initialize program
init();
