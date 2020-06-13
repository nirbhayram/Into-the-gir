const student = {
    name: 'Nirbhay',
    isActive: true
}

const studentObjectToString = JSON.stringify(student);
console.log(typeof studentObjectToString);
console.log(studentObjectToString);



const studentObjectFromString = JSON.parse(studentObjectToString);
console.log(typeof studentObjectFromString);
console.log(studentObjectFromString);