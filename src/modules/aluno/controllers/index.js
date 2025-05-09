
import CadastroModel from "../models/index.js"; 

class CadastroController{
    static async novoCadastro(nome, cpf, telefone, id_aluno){
        try {
            if(!nome || !cpf || !telefone){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const aluno = await CadastroModel.novoCadastro(nome, cpf, telefone, id_aluno)
            console.log('Cadastro criado com sucesso!')
            return aluno
        } catch (error) {
            console.log('Erro ao criar cadastro:', error.message)
        }
    }
    static async atualizarCadastro(nome, telefone, id_aluno){
        try {
            if(!nome || !cpf || !telefone){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const aluno = await CadastroModel.atualizarAluno(nome, cpf, telefone, id_aluno)
            if(aluno.length === 0){
                return console.error('Cadastro não encontrado!')
            }
            console.log('Cadastro atualizado com sucesso!')
            return aluno
        } catch (error) {
            console.log('Erro ao atualizar o cadastro:', error.message)
        }
    }
    static async excluirCadastro(cpf){
        try {
            const aluno = await CadastroModel.buscarCpfDoCadastro(cpf)
            if(aluno.length === 0){
                return console.error('Aluno não encontrado!')
            }
            await CadastroModel.excluirCadastro(cpf)
            console.log('Cadastro excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o aluno:', error.message)
        }
    }
    
    static async buscarCpfDoCadastro(cpf){
        try {
            const aluno = await CadastroModel.buscarCpfDoCadastro(cpf)
            if(aluno.length === 0){
                return console.error('Cadastro não encontrado!')
            }
            console.log('Cadastro:')
            return aluno
        } catch (error) {
            console.log('Erro ao listar todos os cadastros:', error.message)
        }
    }
}

export default CadastroController
