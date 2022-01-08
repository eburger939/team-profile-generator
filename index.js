const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager');
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

// const template = require('template.html')

let team = [];

function init() {
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
  .then((data) => {
      const manager = new Manager(data.name, data.ID, data.email, data.number)
      team.push(manager);
      teamMember()
  });
}
init();

    function teamMember() {
      inquirer.prompt([
        {
          type: "list",
          message:"What team memeber would you like to create?",
          name: "option",
          choices:["Engineer", "Intern", "Exit & Build team!"]
        }
      ]).then(function(answer){
        switch (answer.option) {
          case "Engineer":
            newEngineer();
            break;
          case "Intern":
            newIntern();
            break; 
          default:
            buildTeam();
        }
      })
    }


    function newEngineer() {
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
            message: 'What is your GitHub username?',
            name: 'github',
          },
          
      ])
      .then((data) => {
          const engineer = new Engineer(data.name, data.ID, data.email, data.github)
          team.push(engineer);
          teamMember()
      });
      
      
    }

    function newIntern() {
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
            message: 'What school do you attend?',
            name: 'school',
          },
          
      ])
      .then((data) => {
          const intern = new Intern(data.name, data.ID, data.email, data.school)
          team.push(intern);
          teamMember()
      });
      
    }

    function buildTeam() {
      console.log(team)  
    }