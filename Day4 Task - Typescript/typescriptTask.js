function dispFullName(personName) {
    var fullName = personName.firstName + " " + personName.lastName;
    return fullName;
}
function dispAddress(personAddress) {
    var address = personAddress.street +
        ", " +
        personAddress.city +
        " - " +
        personAddress.pincode;
    return address;
}
function dispContact(personContact) {
    if (personContact.contact && personContact.contact.length > 0) {
        var contact1 = personContact.contact[0].contact1 || "";
        var contact2 = personContact.contact[0].contact2 || "";
        return contact1 + " " + contact2;
    }
    else {
        return "Contact details not exists";
    }
}
var person = {
    firstName: "Parangi",
    lastName: "Rathod",
    age: 21,
    street: "LIG-150, Street no. 9, Shastrinagar",
    city: "Bhavnagar",
    pincode: 364003,
    // contact: [{contact1: "parangi@gmail.com", contact2: 972696990}]
};
console.log("Details of the person are ");
var fullName = dispFullName(person);
console.log("Fullname:\n" + fullName);
var address = dispAddress(person);
console.log("Address:\n" + address);
var ifContactExists = dispContact(person);
console.log("Contact:\n" + ifContactExists);
