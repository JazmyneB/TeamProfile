const Manager = require('../lib/Manager');


//test Manager object
test('creates Manager object', () =>{
    const manager = new Manager('Tom', '1345', 'tomhub@email.com', '01');

    expect(manager.name).toBe('Tom');
    expect(manager.id).toBe('1345');
    expect(manager.email).toBe('tomhub@email.com');
    expect(manager.officeNumber).toBe('01');
});

test('gets manager Methods: Name, ID, EMail, Role', () =>{
    const manager = new Manager('Tom', '1223', 'tomhub@gmail.com', '01');

    expect(manager.getName()).toBe('Tom');
    expect(manager.getId()).toBe('1223');
    expect(manager.getEmail()).toBe('tomhub@gmail.com');
    expect(manager.getRole()).toEqual('Manager');
})