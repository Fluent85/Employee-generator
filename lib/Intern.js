const Employee = require("./employee.js");

class Intern extends Employee{
    constructor(name, id, title, role, email, schoolName){
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = role;
        this.email = email;
        this.school = schoolName;
    }
}

module.exports = Intern;