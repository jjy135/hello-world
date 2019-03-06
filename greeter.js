function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "zzq", lastName: "pretty girl" };
document.body.innerHTML = greeter(user);
