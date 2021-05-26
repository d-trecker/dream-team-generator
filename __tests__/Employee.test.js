const Employee = require('../lib/Employee.js');

test('creates new employee', () => {
    const employee = new Employee ('Dylan', '10186812', 'dylan_trecker@yahoo.com');

    expect(employee.name).toBe('Dylan');
    expect(employee.id).toBe('10186812');
    expect(employee.email).toBe('dylan_trecker@yahoo.com');
});

test('Checks to see if getName returns the name', () => {
    const employee = new Employee('Dylan', '101', 'd_treck@yahoo.com');
    expect(employee.getName()).toBe('Dylan');
});

test('Checks to see if getId returns ID', () => {
    const employee = new Employee('Dylan', '101', 'd_treck@yahoo.com');
    expect(employee.getId()).toBe('101');
});

test('Checks to see if getEmail returns the email', () => {
    const employee = new Employee('Dylan', '101', 'd_treck@yahoo.com');
    expect(employee.getEmail()).toBe('d_treck@yahoo.com');
});

test('Checks to see if getRole returns the role', () => {
    const employee = new Employee('Dylan', '101', 'd_treck@yahoo.com');
    expect(employee.getRole()).toBe('Employee');
});

