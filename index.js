import CriarTabela from './src/config/criar_tabela.js';
import prompt from 'prompt-sync';
import AlunoView from './src/modules/aluno/views/index.js';

const input = prompt();

async function criarTabelas(){
    try {
        await CriarTabela.aluno()
        console.log("Criado!")  
    } catch (error) {
        console.log(error.message) 
    }
}

CriarTabela()