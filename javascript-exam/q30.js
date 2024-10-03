const students = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 18 }
];

const newstud = students.find(student => student.age === 18);

console.log(newstud);