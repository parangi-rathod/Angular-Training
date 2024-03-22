///--------------------------contact interface-----------------------///
interface contacts {
  contact1?: string | number,
  contact2?: number,
}

///--------------------------person interface -> extends contacts-----------------------///
interface personInfo extends contacts {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  pincode: number;
  contact? : contacts[];
}

///------------------------display fullname function--------------------///
function dispFullName(personName: personInfo): string {
  const fullName = personName.firstName + " " + personName.lastName;
  return fullName;
}

///------------------------display address function--------------------///
function dispAddress(personAddress: personInfo): string {
  const address =
  personAddress.street +
  ", " +
  personAddress.city +
  " - " +
  personAddress.pincode;
  return address;
}

///------------------------display contact function--------------------///
function dispContact(personContact: personInfo) : string {
  if (personContact.contact && personContact.contact.length > 0) {
    const contact1 = personContact.contact[0].contact1 || "";
    const contact2 = personContact.contact[0].contact2 || "";
    return contact1 + " " + contact2;
  } else {
    return "Contact details not exists";
  }
}

///------------------------Object intialization------------------------///
let person: personInfo = {
  firstName: "Parangi",
  lastName: "Rathod",
  age: 21,
  street: "LIG-150, Street no. 9, Shastrinagar",
  city: "Bhavnagar",
  pincode: 364003,
  // contact: [{contact1: "parangi@gmail.com", contact2: 972696990}]
};

///------------------------Printing the values------------------------///
console.log("Details of the person are: ");

const fullName = dispFullName(person);
console.log("Fullname:\n" + fullName);

const address = dispAddress(person);
console.log("Address:\n" + address);

const ifContactExists = dispContact(person);
console.log("Contact:\n"+ ifContactExists);