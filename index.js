const inquirer = require('inquirer')
const fs = require('fs')
const template = requie('template.html')



inquirer
  .prompt([
    {
      type: 'input',
      message: "Team member's name",
      name: 'name',
    },
      {
        type: 'input',
        message: 'Employee ID:',
        name: 'ID',
      },
      {
        type: 'input',
        message: 'Employee email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Employee office number: ',
        name: 'number',
      },
      
  ])
  .then((data) =>

    ));