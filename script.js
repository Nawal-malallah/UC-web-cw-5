let grade = prompt("please enter ur grade")

console.log(`%c ${grade}` , 'color: #bada55');

if (grade >= 90) {
 console.log("you got a  " + grade + "  thats an A") ;
}
else if( grade < 80 && grade >= 89){
    console.log("you got a  "  + grade + "  thats a B")
}
else if( grade < 70 && grade >= 79){
    console.log("you got a  "  + grade + "  thats a C")
}
else if( grade < 60 && grade >= 69){
    console.log("you got a  "  + grade + "  thats a D")
}
else if( grade < 50 && grade >= 59){
    console.log("you got a  " + grade + "  thats an F")
}
else if( grade < 50){
    console.log("you got a "  + grade + "  you have to redo the year")
}

// hello im here 