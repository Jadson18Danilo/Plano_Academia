
import CriarTabela from './src/config/criar_tabela.js'
import CadastroView from './src/modules/aluno/views/index.js'
import prompt from 'prompt-sync';

const input = prompt();

async function criarTabelas(){
    try {
        await CriarTabela.aluno()
        await CriarTabela.plano()
        await CriarTabela.matricula()
        console.log("Criado!")  
    } catch (error) {
        console.log(error.message) 
    }
}

criarTabelas()