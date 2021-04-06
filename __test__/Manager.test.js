const Manager = require('../lib/Manager.js');

describe('gets manager data', () => {
    let manager1;

    beforeAll(() => {
        manager1 = new Manager("Janarthani", "1055356", "janarthani.vs@gmail.com", "12560");
    });

    it('should return the  name passed in to the manager constructor function', () => {
        expect(manager1.name).not.toBe('');
        expect(manager1.name).toEqual(expect.any(String));
        expect(manager1.name).toEqual('Janarthani');
    });

    it('should return the ID passed in to the manager constructor function', () => {
        expect(manager1.id).toEqual(expect.any(String));
        expect(manager1.id).toEqual('1055356');
    });

    it('should return the email passed in to the manager constructor function', () => {
        expect(manager1.email).toEqual(expect.any(String));
        expect(manager1.email).toContain('@');
        expect(manager1.email).toEqual("janarthani.vs@gmail.com");
    });

    it('should return the office no passed in to the manager constructor function', () => {
        expect(manager1.officeNo).toEqual(expect.any(String));
        expect(manager1.officeNo).toEqual('12560');
    });

    it('should return the name passed in to the manager constructor function', () => {
        expect(manager1.getName()).toBe('Janarthani');
    });

    it('should return the ID passed in to the manager constructor function', () => {
        expect(manager1.getId()).toBe('1055356');
    });

    it('should return the email passed in to the manager constructor function', () => {
        expect(manager1.getEmail()).toBe('janarthani.vs@gmail.com');
    });

    it('should return the office number passed in to the manager constructor function', () => {
        expect(manager1.getofficeNo()).toBe('12560');
    });

    it('should return the role as manager', () => {
        expect(manager1.getRole()).toBe("Manager");
    });

});