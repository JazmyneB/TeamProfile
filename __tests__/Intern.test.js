const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Zeek', '0293', 'zeek@email.com', 'UC Berkley');

    expect(intern.name).toBe('Zeek');
    expect(intern.id).toBe('0293');
    expect(intern.email).toBe('zeek@email.com');
    expect(intern.school).toBe('UC Berkley');
});

//Methods --> Test
test('gets Intern Methods: Name, ID, Email, School, Role', () =>{
    const intern = new Intern('Lee', '1223', 'leehub@gmail.com', 'UofA');

    expect(intern.getName()).toBe('Lee');
    expect(intern.getId()).toBe('1223');
    expect(intern.getEmail()).toBe('leehub@gmail.com');
    expect(intern.getSchool()).toBe('UofA');
    expect(intern.getRole()).toEqual('Intern');
});