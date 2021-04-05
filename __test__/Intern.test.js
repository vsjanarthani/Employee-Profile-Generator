const Intern = require('../lib/Intern.js');

describe('gets intern data', () => {
    let intern1;

    beforeAll(() => {
        intern1 = new Intern("Janarthani", 1055356, "janarthani.vs@gmail.com", 'UC Berkeley');
    });

    it('should return the  name passed in to the intern constructor function', () => {
        expect(intern1.name).not.toBe('');
        expect(intern1.name).toEqual(expect.any(String));
        expect(intern1.name).toEqual('Janarthani');
    });

    it('should return the ID passed in to the intern constructor function', () => {
        expect(intern1.id).toEqual(expect.any(Number));
        expect(intern1.id).toEqual(1055356);
    });

    it('should return the email passed in to the intern constructor function', () => {
        expect(intern1.email).toEqual(expect.any(String));
        expect(intern1.email).toContain('@');
        expect(intern1.email).toEqual("janarthani.vs@gmail.com");
    });

    it('should return the school passed in to the intern constructor function', () => {
        expect(intern1.school).toEqual(expect.any(String));
        expect(intern1.school).toEqual("UC Berkeley");
    });

    it('should return the name passed in to the intern constructor function', () => {
        expect(intern1.getName()).toBe('Janarthani');
    });

    it('should return the ID passed in to the intern constructor function', () => {
        expect(intern1.getId()).toBe(1055356);
    });

    it('should return the email passed in to the intern constructor function', () => {
        expect(intern1.getEmail()).toBe('janarthani.vs@gmail.com');
    });

    it('should return the school passed in to the intern constructor function', () => {
        expect(intern1.getSchool()).toBe('UC Berkeley');
    });

    it('should return the role as intern', () => {
        expect(intern1.getRole()).toBe("Intern");
    });

});