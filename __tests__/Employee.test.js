const Employee = require('../lib/Employee.js');

test('creates new employee', () => {
    const employee = new Employee ('Dylan', '10186812', 'dylan_trecker@yahoo.com');

    expect(employee.name).toBe('Dylan');
    expect(employee.id).toBe('10186812');
    expect(employee.email).toBe('dylan_trecker@yahoo.com');
});