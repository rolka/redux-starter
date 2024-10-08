const person = {
    name: 'Johny',
    address: {
        country: 'United States',
        city: 'San Francisco',
    }
};
// const updatedPerson = Object.assign({}, person, { name: 'Bobby' });
// const updatedSpreadPerson = { ...person, surname: 'Luke' };
const updatedSpreadPerson = {
    ...person,
    address: {
        ...person.address,
        city: 'Klaipeda'
    },
    surname: 'Luke'
};
updatedSpreadPerson.address.country = 'Lithuania'; // this will cause to change person.address.country
console.log(person);
// console.log(updatedPerson);
console.log(updatedSpreadPerson);
// console.log( 2 + true );
