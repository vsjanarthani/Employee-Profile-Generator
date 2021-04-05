class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id= id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        // console.log(this.name);
        return this.name;
    }

    getId() {
        // console.log(this.id);
        return this.id;
    }

    getEmail() {
        // console.log(this.email);
        return this.email;
    }
    getRole() {
        // console.log(this.role);
        return this.role;
    }
}

module.exports = Employee;