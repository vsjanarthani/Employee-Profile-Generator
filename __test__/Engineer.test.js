const Engineer = require('../lib/Engineer.js');

describe('gets engineer data', () => {
    let engineer1;

    beforeAll(() => {
        engineer1 = new Engineer("Janarthani", "1055356", "janarthani.vs@gmail.com", 'github.git');
    });

    it('should return the  name passed in to the engineer constructor function', () => {
        expect(engineer1.name).not.toBe('');
        expect(engineer1.name).toEqual(expect.any(String));
        expect(engineer1.name).toEqual('Janarthani');
    });

    it('should return the ID passed in to the engineer constructor function', () => {
        expect(engineer1.id).toEqual(expect.any(String));
        expect(engineer1.id).toEqual('1055356');
    });

    it('should return the email passed in to the engineer constructor function', () => {
        expect(engineer1.email).toEqual(expect.any(String));
        expect(engineer1.email).toContain('@');
        expect(engineer1.email).toEqual("janarthani.vs@gmail.com");
    });

    it('should return the github path passed in to the engineer constructor function', () => {
        expect(engineer1.github).toEqual(expect.any(String));
        expect(engineer1.github).toEqual("github.git");
    });

    it('should return the name passed in to the engineer constructor function', () => {
        expect(engineer1.getName()).toBe(engineer1.name);
    });

    it('should return the ID passed in to the engineer constructor function', () => {
        expect(engineer1.getId()).toBe(engineer1.id);
    });

    it('should return the email passed in to the engineer constructor function', () => {
        expect(engineer1.getEmail()).toBe(engineer1.email);
    });

    it('should return the github path passed in to the engineer constructor function', () => {
        expect(engineer1.getGithub()).toBe(engineer1.github);
    });

    it('should return the role as engineer', () => {
        expect(engineer1.getRole()).toBe("Engineer");
    });

});