class Employee{
    constructor(name, id, title, email, role){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
    }
}



// const josh = new Employee("Josh", 4, "boss");
// console.log(josh)

module.exports = Employee;