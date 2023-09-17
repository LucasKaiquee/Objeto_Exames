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

exam1.addExam(responseStudent)
console.log(exam1.getResult())
console.log(exam1.getTable())

//Criando um novo exame
console.log("")

const weight2 = {
    q1: 1,
    q2: 1,
    q3: 3,
    q4: 3,
    q5: 2
}

const answer2 = {
    q1: "a",
    q2: "c",
    q3: "a",
    q4: "b",
    q5: "d"
}

const responseStudent2 = {
    student: "Kaique",
    response: ['a', 'c', 'b', 'b', 'd']
}

const exam2 = new Exam(weight2, answer2)
exam2.addExam(responseStudent2)

console.log(exam2.getResult())
console.log(exam2.getTable())

