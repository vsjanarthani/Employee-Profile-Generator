const Employee = require('../lib/Employee.js');

describe('gets employee data', () => {
    let employee1;

    beforeAll(() => {
        employee1 = new Employee("Janarthani", 1055356, "janarthani.vs@gmail.com");
    });

    it('should return the  name passed in to the employee constructor function', () => {
        expect(employee1.name).not.toBe('');
        expect(employee1.name).toEqual(expect.any(String));
        expect(employee1.name).toEqual('Janarthani');
    });

    it('should return the ID passed in to the employee constructor function', () => {

        expect(employee1.id).toEqual(expect.any(Number));
        expect(employee1.id).toEqual(1055356);
    });

    it('should return the email passed in to the employee constructor function', () => {

        expect(employee1.email).toEqual(expect.any(String));
        expect(employee1.email).toContain('@');
        expect(employee1.email).toEqual("janarthani.vs@gmail.com");
    });

    it('should return the  name passed in to the employee constructor function', () => {
        expect(employee1.getName()).toBe(employee1.name);
    });

    it('should return the ID passed in to the employee constructor function', () => {
        expect(employee1.getId()).toBe(employee1.id);
    });

    it('should return the email passed in to the employee constructor function', () => {
        expect(employee1.getEmail()).toBe(employee1.email);
    });

    it('should return the role as employee', () => {
        expect(employee1.getRole()).toBe("Employee");
    });

});