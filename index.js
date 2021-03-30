// TODO: Include packages needed for this application
const readline = require('readline');
const fs = require('fs');


// TODO: Create an array of questions for user input
const promptUser = () =>
prompt([
    {
       type: 'input',
       name: 'Title',
       message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'how do you install this app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is this app about?'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'what was your motivation for making this project'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'what do want in the table of contents'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'who contributed on your project'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'what questions did u have?'
    },
]);
// TODO: Create a function to write README file
const generateReadMe = (answers) =>
`${answers.Title}
Description
${answers.description}
Motivation
${answers.motivation}
Contents
${answers.contents}
Contributors
${answers.contributors}
Questions
${answers.question}
install 
${answers.install}
Contact
For further inforation please contact via email placeholder@place.hold`;

// TODO: Create a function to initialize app

const init = () => {
    promptUser().then((answers) => {
      try {
        const md = generateReadMe(answers);
        fs.writeFileSync('readme.md', md);
        console.log('Successfully wrote to readme.md');
      } catch (error) {
        console.log(error);
      }
    });
  };

// Function call to initialize app
init();
