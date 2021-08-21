const Manager = require('../lib/Manager');


test('creates a manager object', () => {
    const manager = new Manager('Ashis', 1, 'ashis@work.com', 103);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email).toContain('@');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager object', () => {
    const manager = new Manager('Ashis', 1, 'ashis@work.com', 103);

    expect(manager.getRole()).toBe('Manager');
});

test("gets manager's office number", () => {
    const manager = new Manager('Ashis', 1, 'ashis@work.com', 103);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString())); 
});



