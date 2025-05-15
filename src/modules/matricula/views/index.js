import MatriculaController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()

class MatriculaView {
    static async criarMatricula() {
        console.log('Criar nova matrícula')
        const id_matricula = input('ID da matrícula: ')
        const data_inicio = input('Data de início (YYYY-MM-DD): ')
        const data_fim = input('Data de fim (YYYY-MM-DD): ')
        const status = input('Status: ')
        const id_aluno = input('ID do aluno: ')
        const id_plano = input('ID do plano: ')

        await MatriculaController.novaMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano)
    }

    static async editarMatricula() {
        console.log('Editar matrícula')
        const id_matricula = input('ID da matrícula: ')
        const data_inicio = input('Data de início (YYYY-MM-DD): ')
        const data_fim = input('Data de fim (YYYY-MM-DD): ')
        const status = input('Status: ')
        const id_aluno = input('ID do aluno: ')
        const id_plano = input('ID do plano: ')

        await MatriculaController.atualizarMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano)
    }

    static async excluirMatricula() {
        console.log('Excluir matrícula')
        const id_matricula = input('ID da matrícula: ')
        await MatriculaController.excluirMatricula(id_matricula)
    }

    static async listarPorPlanoOuAluno() {
        console.log('Listar matrícula por plano ou aluno')
        const id_plano = input('ID do plano: ')
        const id_aluno = input('ID do aluno: ')

        const resultado = await MatriculaController.listarPorPlanoOuAluno(id_plano, id_aluno)
        console.table(resultado)
    }

    static async filtrarMatriculaPorStatus() {
        console.log('Filtrar matrícula por status')
        const status = input('Status: ')

        const resultado = await MatriculaController.filtrarMatriculaPorStatus(status)
        console.table(resultado)
    }

    static async totalDeAlunoPorPlano() {
        console.log('Total de alunos por plano')
        const id_aluno = input('ID do aluno: ')

        const resultado = await MatriculaController.totalDeAlunoPorPlano(id_aluno)
        console.table(resultado)
    }
    static async totalDePlano() {
        console.log('Total da Receita do plano')
        const id_plano = input('ID do plano: ')

        const resultado = await MatriculaController.totalDePlano(id_plano)
        console.table(resultado)
    }

}

export default MatriculaView
