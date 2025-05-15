
// import CriarTabela from './src/config/criar_tabela.js'
// import CadastroView from './src/modules/aluno/views/index.js'
// import prompt from 'prompt-sync';

// const input = prompt();

// async function criarTabelas(){
//     try {
//         await CriarTabela.aluno()
//         await CriarTabela.plano()
//         await CriarTabela.matricula()
//         console.log("Criado!")  
//     } catch (error) {
//         console.log(error.message) 
//     }
// }

// criarTabelas()

import PromptSync from "prompt-sync";
import UsuarioView from "./src/modules/aluno/views/index.js"
import EstacaoView from "./src/modules/matricula/views/index.js";
import ReservasView from "./src/modules/plano/views/index.js";
import CriarTabelas from "./src/config/criar_tabela";

const input = PromptSync();

async function criarTabela(){
    try {
        await CriarTabelas.cadastrar();
        await CriarTabelas.plano();
        await CriarTabelas.matricula();

    } catch (error) {
        console.log('Erro ao criar tabelas', error.message);
    }
}

async function menu() {
    await criarTabela();

    const opcoes = [
        "1 - Menu Usuários",
        "2 - Menu Planos",
        "3 - Menu Matrículas",
        "0 - Sair"
    ];

    let opcao;
    do {
        
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await menuUsuarios();
                break;
            case "2":
                await menuPlanos();
                break;
            case "3":
                await menuMatriculas();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuUsuarios() {
    await criarTabela();

    const opcoes = [
        "1 - Adicionar Cadastro",
        "2 - Buscar Cadastro",
        "3 - Atualizar Cadastro",
        "4 - Excluir Cadastro",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await CadastroView.criar();
                break;
            case "2":
                await CadastroView.editarAluno();
                break;
            case "3":
                await CadastroView.buscarCpfDoCadastro();
                break;
            case "4":
                await CadastroView.excluirCadastro();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuPlanos() {
    await criarTabela();

    const opcoes = [
        "1 - Adicionar Plano",
        "2 - Buscar Plano",
        "3 - Atualizar Plano",
        "4 - Excluir Plano",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await PlanoView.criar();
                break;
            case "2":
                await PlanoView.editarPlano();
                break;
            case "3":
                await PlanoView.listarTodosPlanos();
                break;
            case "4":
                await PlanoView.excluirPlano();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

async function menuMatriculas() {
    await criarTabela();

    const opcoes = [
        "1 - Criar nova Matrícula",
        "2 - Editar Matrícula",
        "3 - Excluir Matrícula",
        "4 - Listar Matrícula por Plano ou Aluno",
        "5 - Filtrar Matrícula por Status",
        "6 - Total de alunos por Plano",
        "7 - Total da Receita do Plano",
        "0 - Sair"
    ];

let opcao;
do {
    console.log(opcoes.join("\n"));
    opcao = input("Escolha a opção desejada: ");

    switch (opcao) {
        case "0":
            console.log("Saindo...");
            break;
        case "1":
            await MatriculaView.criarMatricula();
            break;
        case "2":
            await MatriculaView.editarMatricula();
            break;
        case "3":
            await MatriculaView.excluirMatricula();
            break;
        case "4":
            await MatriculaView.listarPorPlanoOuAluno();
            break;
        case "5":
            await MatriculaView.filtrarMatriculaPorStatus();
            break;
        case "6":
            await MatriculaView.totalDeAlunoPorPlano();
            break;
        case "7":
            await MatriculaView.totalDePlano();
            break;

         default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while (opcao !== "0");
}

menu();