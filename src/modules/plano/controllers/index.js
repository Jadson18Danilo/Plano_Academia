
import PlanoModel from "../models/index.js"; 

class PlanoController{
    static async novoPlano(nome, id_plano, valor, duracao_meses){
        try {
            if(!nome || !valor || !duracao_meses){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const aluno = await PlanoModel.novoPlano(nome, id_plano, valor, duracao_meses)
            console.log('Plano criado com sucesso!')
            return aluno
        } catch (error) {
            console.log('Erro ao criar plano:', error.message)
        }
    }
    static async atualizarPlano(nome,id_plano, valor, duracao_meses){
        try {
            if(!nome || !valor || !duracao_meses){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const aluno = await PlanoModel.atualizarPlano(nome, id_plano, valor, duracao_meses)
            if(aluno.length === 0){
                return console.error('Plano não encontrado!')
            }
            console.log('Plano atualizado com sucesso!')
            return aluno
        } catch (error) {
            console.log('Erro ao atualizar o plano:', error.message)
        }
    }
    static async excluirPlano(id_plano){
        try {
            const aluno = await PlanoModel.listarTodosPlanos(id_plano)
            if(aluno.length === 0){
                return console.error('Plano não encontrado!')
            }
            await PlanoModel.excluirPlano(id_plano)
            console.log('Plano excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o plano:', error.message)
        }
    }
    
    static async listarTodosPlanos(){
        try {
            const alunos = await PlanoModel.listarTodosPlanos()
            if(alunos.length === 0){
                return console.log('Nenhum palno a ser exibido!')
            }
            console.log('Listagem dos Planos:')
            return alunos
        } catch (error) {
            console.log('Erro ao listar todos os Planos:', error.message)
        }
    }
}

export default PlanoController
