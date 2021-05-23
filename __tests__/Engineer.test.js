const Engineer = require('../lib/Engineer.js');

test('Checks for github account', () => {
    const engineer = new Engineer ('Dylan', '101', 'd_treck@yahoo.com', 'd-treck');
    expect(engineer.github).toBe('d-treck');
});

test('Checks to see if github act. is returned from getGithub', () => {
    const engineer = new Engineer ('Dylan', '101', 'd_treck@yahoo.com', 'd-treck');
    expect(engineer.getGithub()).toBe('d-treck');
});

test('Checks to see if getRole returns a Engineer', () => {
    const engineer = new Engineer ('Dylan', '101', 'd_treck@yahoo.com', 'd-treck');
    expect(engineer.getRole()).toBe('Engineer');
});