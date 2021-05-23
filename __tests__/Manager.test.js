const Manager = require('../lib/Manager.js');

test('Checks for office number', () => {
    const manager = new Manager('Dylan', '101', 'd_treck@yahoo.com', '111-111-1111');
    expect(manager.officeNumber).toBe('111-111-1111');
});

test('Checks to see if getRole returns Manager', () => {
    const manager = new Manager('Dylan', '101', 'd_treck@yahoo.com', '111-111-1111');
    expect(manager.getRole()).toBe('Manager');
});