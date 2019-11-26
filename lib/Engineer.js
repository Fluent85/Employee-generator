const Employee = require("./employee.js");

class Engineer extends Employee{
    constructor(name, id, title, role, email, getGithubId){
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = role;
        this.email = email;
        this.getGithubId = getGithubId;    
    }
}

module.exports = Engineer;