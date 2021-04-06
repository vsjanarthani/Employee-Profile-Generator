const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school, icon ='<i class="fas fa-graduation-cap"></i>') {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
        this.icon = icon;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;