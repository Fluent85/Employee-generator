const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

let managersHTML = "";
let engineersHTML = "";
let internsHTML = "";

function writeHtml(){

    // templateHTML =  fs.readfile templatehtml
    // Use JS Replace "{{managerRow}}" with managersHTML
    // Same Replace for Engineers
    // Same Replace for Interns
    // with new HTML...
    // write new team.html fs.writefile

}
function generateTeamMember() {
    return inquirer.prompt([{
            type: "list",
            message: "Which type of team member do you want to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any additional team members."]
        }]).then(function (answer) {
        switch (answer.teamMembers) {
            case "Engineer": generateEngineer();
                break;
            case "Intern": generateIntern();
                break;
            default:
                console.log("***** Your team is complete. *****");
                //write to the html file
                writeHtml();
                
        }
    })
}

function generateManager() {
    console.log("***** Please build your team. *****");
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
        }, {
            type: "input",
            message: "What is your manager's employee ID?",
            name: "managerID"
        }, {
            type: "input",
            message: "What is your manager's email address?",
            name: "managerEmail"
        }, {
            type: "input",
            message: "What is your manager's office number?",
            name: "managerOffice"
        },{
            type: "input",
            message: "What is your manager's role?",
            name: "role"
        }
    ]).then(function ({managerName, managerID, managerEmail, managerOffice, role}) {

        managersHTML = managersHTML + `<div class="col-md-4">
        <div class="card" style="width: 18rem;">
                <div class="card-body" style="background-color: gold;">
                  <h5 class="card-title">${managerName} ${role}</h5>
                  <p class="card-text"><i class="fas fa-coffee"></i> Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>ID</strong>: ${managerID}</li>
                  <li class="list-group-item"><strong>Email</strong>: ${managerEmail}</li>
                  <li class="list-group-item"><strong>Office Number</strong>: ${managerOffice}</li>
                </ul>
        </div>
    </div>`;
        generateTeamMember();
    })
}

function generateEngineer() {
    console.log("***** Enter your engineer's information. *****")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName"
        }, {
            type: "input",
            message: "What is your engineer's employee ID?",
            name: "engineerID"
        }, {
            type: "input",
            message: "What is your engineer's email address?",
            name: "engineerEmail"
        }, {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engineerGithub"
        }
    ]).then(function ({engineerName, engineerID, engineerEmail, engineerGithub}) {
        generateTeamMember();
        fs.appendFile("output/./team.html", `
        <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-body" style="background-color: royalblue;">
                          <h5 class="card-title">${engineerName}</h5>
                          <p class="card-text"><i class="fas fa-flask"></i> Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${engineerID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${engineerEmail}</li>
                          <li class="list-group-item"><strong>GitHub</strong>: ${engineerGithub}</li>
                        </ul>
            </div>
                </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

function generateIntern() {
    console.log("***** Enter your intern's information. *****")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        }, {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "internID"
        }, {
            type: "input",
            message: "What is your intern's email address?",
            name: "internEmail"
        }, {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        }
    ]).then(function ({internName, internID, internEmail, internSchool}) {
        generateTeamMember();
        fs.appendFile("output/./team.html", `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-body" style="background-color: crimson;">
                          <h5 class="card-title">${internName}</h5>
                          <p class="card-text"><i class="fas fa-graduation-cap"></i> Intern</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${internID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${internEmail}</li>
                          <li class="list-group-item"><strong>School</strong>: ${internSchool}</li>
                        </ul>
                </div>
            </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

generateManager();






        // inquirer.prompt([
//     {
//         type: "input",
//         message: "What is your name?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "What is your ID?",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is your title?",
//         name: "title"
//     },
//     {
//         type: "input",
//         message: "What is your email?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your role?",
//         name: "role"
//     },
// ]).then(function(response){
    
//     var person = new Employee(response.name, response.id, response.title, response.email, response.role);
//     console.log(person)
// })


// Make a switch statement
