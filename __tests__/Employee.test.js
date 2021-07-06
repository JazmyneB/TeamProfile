

const Employee = require("../lib/Employee");

//Employee Object test
test('creates a Employee object', () => {
    const employ = new Employee('Lee', '1234', 'leehub@gmail.com');

    expect(employ.name).toBe('Lee');
    expect(employ.id).toBe('1234');
    expect(employ.email).toBe('leehub@gmail.com');
});

//Methods --> Test
test('gets Employee Methods: Name, ID, EMail, Role', () =>{
    const employ = new Employee('Lee', '1223', 'leehub@gmail.com');

    expect(employ.getName()).toBe('Lee');
    expect(employ.getId()).toBe('1223');
    expect(employ.getEmail()).toBe('leehub@gmail.com');
    expect(employ.getRole()).toEqual('Employee');
})