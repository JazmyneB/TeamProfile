const Engineer = require('../lib/Engineer');

//Testing Engineer Object
test('creates Engineer Object', () =>{
    const engin = new Engineer('Dave', '1452', 'davehub@email.com', 'DaveHub');

    expect(engin.name).toBe('Dave');
    expect(engin.id).toBe('1452');
    expect(engin.email).toBe('davehub@email.com');
    expect(engin.github).toBe('DaveHub');
});

//Methods --> Test
test('gets Engineer Methods: Name, ID, Email, Github, Role', () =>{
    const engin = new Engineer('Lee', '1223', 'leehub@gmail.com', 'Leehub');

    expect(engin.getName()).toBe('Lee');
    expect(engin.getId()).toBe('1223');
    expect(engin.getEmail()).toBe('leehub@gmail.com');
    expect(engin.getGithub()).toBe('Leehub');
    expect(engin.getRole()).toEqual('Engineer');
})