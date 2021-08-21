const Employee = require('../lib/Employee'); 

test('creates a employee object', () => {
    const employee = new Employee('Ashis',1,'ashis@work.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    // Check that the email input contains an '@' to validate an actual email ... 
    expect(employee.email).toEqual(expect.any(String)); 
    expect(employee.email).toContain('@'); 
});

test("gets employee's name", () => {
    const employee = new Employee('Ashis',1,'ashis@work.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name)); 
});

test("gets employee's id value", () => {
    const employee = new Employee('Ashis',1,'ashis@work.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email address", () => {
    const employee = new Employee('Ashis',1,'ashis@work.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email)); 
});

test("gets employee's role", () => {
    const employee = new Employee('Ashis',1,'ashis@work.com');

    expect(employee.getRole()).toEqual('Employee'); 
});