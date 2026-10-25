
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

words.forEach(word => {
    document.getElementById("fruit-list").innerHTML += `<li>${word}</li>`
})

students.forEach(function(student) {
    document.getElementById("student-list").innerHTML +=
        `<li>${student.first} ${student.last}</li>`;
});

let upperWords = words.map(function(words) {
    words.toUpperCase();
})          

console.log("Uppercase letters:" + upperWords);

const grade = "A";
document.getElementById("grade-output").textContent =
    `Grade ${grade} is worth ${convert(grade)} points.`;



const longWords = words.filter(function(word) {
    return word.length > 5;
});

console.log("Long words:", longWords);


const appleIndex = words.indexOf("apple");
console.log("Apple index:", appleIndex);

const totalLetters = words.reduce(function(total, word) {
    return total + word.length;
}, 0);


console.log("Total letters:", totalLetters);