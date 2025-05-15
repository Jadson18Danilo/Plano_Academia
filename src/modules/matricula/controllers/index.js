import MatriculaModel from "../models/index.js";

class MatriculaController {
    static async novaMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano){
        try {
            if (!data_inicio || !data_fim || !status || !id_aluno || !id_plano) {
                return console.error('Todos os campos devem ser preenchidos') 
            }
            const aluno = await MatriculaModel.novaMatricula(data_inicio, data_fim, status, id_aluno, id_plano)
            console.log('Matrícula criada com sucesso!')
        } catch (error) {
            console.log('Erro ao criar matrícula:', error.messege)
        }
    }

    static async atualizarMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano){
        try {
            if (!data_inicio || !data_fim || !status || !id_aluno || !id_plano) {
                return console.error('Todos os campos devem ser preenchidos') 
            }
            const aluno = await MatriculaModel.atualizarMatricula(id_matricula, data_inicio, data_fim, status, id_aluno, id_plano)
            if (aluno.length === 0) {
                return console.error('Matrícula não encontrada!')
            }
            console.log('Matrícula atualizada com sucesso!')
        } catch (error) {
            console.log('Erro ao atualizar matrícula:', error.messege)
        }
    }

    static async excluirMatricula(id_matricula){
        try {
            const aluno = await MatriculaModel.listarTodosMatriculas(id_matricula)
            if (aluno.length === 0) {
                return console.error('Matrícula não encontrada!')
            }
            await MatriculaModel.excluirMatricula(id_matricula)
            console.log('Matrícula excluída com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir matrícula:', error.messege)
        }
    }

    static async listarPorPlanoOuAluno(id_plano, id_aluno){
        try {
            const aluno = await MatriculaModel.listarPorPlanoOuAluno()
            if (aluno.length === 0) {
                return console.error('Nenhuma matrícula encontrada!')
            }
            console.log('Listagem de Matrículas:')
            return aluno
        } catch (error) {
            console.log('Erro ao listar matrículas:', error.messege)
        }
    }
    static async filtrarMatriculaPorStatus(status){
        try {
            const aluno = await MatriculaModel.filtrarMatriculaPorStatus(status)
            if (aluno.length === 0) {
                return console.error('Nenhuma matrícula encontrada!')
            }
            console.log('Listagem de Matrículas por Status:')
            return aluno
        } catch (error) {
            console.log('Erro ao filtrar matrículas:', error.messege)
        }
    }

    static async totalDeAlunoPorPlano(id_aluno){
        try {
            const aluno = await MatriculaModel.totalDeAlunoPorPlano(id_aluno)
            if (aluno.length === 0) {
                return console.error('Nenhuma matrícula encontrada!')
            }
            console.log('Total de Alunos por Plano:')
            return aluno
        } catch (error) {
            console.log('Erro ao calcular total de alunos por plano:', error.messege)
        }
    }

    static async totalDePlano(id_plano){
        try {
            const aluno = await MatriculaModel.totalDePlano(id_plano)
            if (aluno.length === 0) {
                return console.error('Nenhuma matrícula encontrada!')
            }
            console.log('Total da Receita de Plano:')
            return aluno
        } catch (error) {
            console.log('Erro ao calcular total de receita:', error.messege)
        }
    }

}

export default MatriculaController
