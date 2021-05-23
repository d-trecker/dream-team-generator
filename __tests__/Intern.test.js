const Intern = require('../lib/Intern.js');

test('Checks for school', () => {
    const intern = new Intern ('Dylan', '101', 'd_treck@yahoo.com', 'treck-acad');
    expect(intern.school).toBe('treck-acad');
});

test('Checks to see if school is returned from getSchool', () => {
    const intern = new Intern ('Dylan', '101', 'd_treck@yahoo.com', 'treck-acad');
    expect(intern.getSchool()).toBe('treck-acad');
});

test('Checks to see if Intern is returned from getRole', () => {
    const intern = new Intern ('Dylan', '101', 'd_treck@yahoo.com', 'treck-acad');
    expect(intern.getRole()).toBe('Intern');
});