import Exam from "./exam.js";

//Definindo o peso de cada questão.
const weight = {
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
    q5: 2
}

//Definido as alternativas corretas.
const answer = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "c",
    q5: "d"
}

//instânciando um novo exame.
const exam1 = new Exam(weight, answer)

const responseStudent = {
    student: "Lucas",
    response: ['a', 'b', 'b', 'b', 'b']
}

const responseStudent2 = {
    student: "Kaique",
    response: ['a', 'b', 'a', 'b', 'b']
}

const responseStudent3 = {
    student: "Lorena",
    response: ['a', 'b', 'a', 'c', 'd']
}

exam1.addExam(responseStudent)
exam1.addExam(responseStudent2)
exam1.addExam(responseStudent3)

console.log("Resultado individual")

console.log(exam1.getResult("Kaique"))
console.log()

console.log("Resultado de todos os estudantes")
console.log(exam1.getTable())

console.log(exam1.getMax())
console.log(exam1.getMin())
console.log()

console.log(exam1)