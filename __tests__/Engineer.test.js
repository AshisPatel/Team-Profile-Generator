const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Ashis', 1, 'ashis@work.com', 'ashisGitHub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String)); 
    expect(engineer.email).toContain('@'); 
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Ashis', 1, 'ashis@work.com', 'ashisGitHub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github)); 
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Ashis', 1, 'ashis@work.com', 'ashisGitHub');

    expect(engineer.getRole()).toBe('Engineer'); 
});