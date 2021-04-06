const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNo, icon ='<i class="fas fa-mug-hot"></i>') {
        super(name, id, email);
        this.officeNo = officeNo;
        this.role = 'Manager';
        this.icon = icon;
    }

    getofficeNo() {
        // console.log(`Office no: ${this.officeNo}`);
        return this.officeNo;
    }
}

module.exports = Manager;

