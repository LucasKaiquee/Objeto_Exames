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
        this.result = 0
        this.exam = []
    }

    /**
     * Adiciona as resposta do Aluno á um exame existente.
     * @param {object} exam - objeto com o nome e a resposta correspondente a cada pergunta.
    */

    addExam(exam) {
        this.exam.push(exam.response)
        this.exam.push(Object.values(this.answer))
        this.exam.push(Object.values(this.weight))
        this.exam.push(exam.student)
    }

    /**
     * Retorna a nota do aluno
     */

    getResult() {
        let responseStudent = this.exam[0]
        let arrayResponse = this.exam[1]
        let weight = this.exam[2]

        for(let i = 0; i < this.exam[0].length; i++){
            if(responseStudent[i] === arrayResponse[i]) {
                this.result += weight[i]
            }
        }

        return `A nota de ${this.exam[3]} é: ${this.result.toFixed(1)}`
    }

    /**
     * Retorna um Objeto para representar o desempenho do aluno
     */

    getTable() {
        const table = {
            Aluno: this.exam[3],
            RespostaAluno: this.exam[0],
            Resposta: this.answer,
            Peso: this.weight,
            Nota: this.result.toFixed(1)
        }

        return table
    }
}

export default Exam