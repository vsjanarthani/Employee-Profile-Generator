const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super(name, id, email);
        this.officeNo = officeNo;
        this.role = 'Manager';
    }

    getofficeNo() {
        // console.log(`Office no: ${this.officeNo}`);
        return this.officeNo;
    }
}

module.exports = Manager;

