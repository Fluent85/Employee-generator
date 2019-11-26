const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, title, officeNumber, role, email){
        this.name = name;
        this.id = id;
        this.title = title;
        this.officeNumber = officeNumber;
        this.role = role;
        this.email = email;      
    }
}

module.exports = Manager;