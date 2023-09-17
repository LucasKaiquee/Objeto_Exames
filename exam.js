/**
 * Classe que representa um Exame.
 * @class
 */

class Exam{

    /**
   * Cria uma instância de um Exame.
   * @param {object} weigh - Objeto com questão e peso correspondente.
   * @param {object} answer - Objeto com questão e Alternativa correspondente.
   */

    constructor(weight, answer) {
        this.answer = answer
        this.weight = weight 
        this.exam = []
        this.result = []
    }

    /**
     * Adiciona as resposta do Aluno á um exame existente.
     * @param {object} exam - objeto com o nome e a resposta correspondente a cada pergunta.
    */

    addExam(exam) {
        this.exam.push(exam)
    }

    /**
     * Retorna a nota do aluno.
     * 
     * O valor padrão é sempre o primeiro estudante adcionado.
     * @param {string} student - Nome do estudante.
     */

    getResult(student = this.exam[0].student) {
        student.toLowerCase()
        let weigh = Object.values(this.weight)
        let answer = Object.values(this.answer)
        let count = 0

        //Verifica o estudante passado como parâmetro para o método
        this.exam.forEach((e) => {
            if(student == e.student) {
                let studentAnswer = e.response
                // compara cada alternativa com as respostas do aluno
                for(let i = 0; i < answer.length; i++){
                    studentAnswer[i] === answer[i] ? count += weigh[i] : false
                }
            }
        })

        return `A nota de ${student} é: ${count.toFixed(1)}`
    }

    /**
     * @returns {string} Retorna o desempenho dos estudantes.
     */

    getTable() {
        let weigh = Object.values(this.weight)
        let answer = Object.values(this.answer)
        let count;
        let tableResults = ""
        let result = []

        this.exam.forEach((e) => {
            let studentAnswer = Object.values(e.response)
            count = 0
            for(let i = 0; i < answer.length; i++){
                studentAnswer[i] === answer[i] ? count += weigh[i] : false
            }
            result.push(count)
        })

        this.exam.forEach((e, index) => {
            tableResults += `${e.student}: Nota ${result[index].toFixed(1)}\n`
        })

        this.result = result

        return tableResults
    }

    /**
     * @returns {string} Retorna a maior nota.
     */

    getMax() {
        return `A maior nota foi ${this.result.sort((a, b) => b - a)[0].toFixed(1)}`
    }

    /**
     * @returns {string} Retorna a menor nota.
     */

    getMin() {
        return `A menor nota foi ${this.result.sort((a, b) => a - b)[0].toFixed(1)}`
    }
}

export default Exam