const Employee = require('../lib/Employee'); 

test('creates a employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(emmployee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
});