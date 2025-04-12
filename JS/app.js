const person = {
    name : "Rayhan",
    age : 20,
    friends : ['AWal',  'Asif', 'Arfat']
}

const newPerson = JSON.stringify(person);
// console.log(newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);