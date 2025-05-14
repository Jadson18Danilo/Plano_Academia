import PlanoController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()

class PlanoView {
    static async criar(){
        const nome = input("Digite o nome do plano: ");
        const id_plano = input("Digite o código do plano: ");
        const valor = input("Digite o valor do plano: ");
        const duracao_meses = input("Digite a duração do plano em meses: ");
        const aluno = await PlanoController.novoPlano(nome, id_plano, valor, duracao_meses);
        console.table(aluno);
    }
    static async editarPlano(nome, id_plano, valor, duracao_meses) {
        const aluno = await PlanoController.atualizarPlano(nome, id_plano, valor, duracao_meses); 
        console.table(aluno);
    }

    static async listarTodosPlanos() {
        const aluno = await PlanoController.listarTodosPlanos();
        console.table(aluno);
    }

    static async excluirPlano(id_plano) {
        await PlanoController.excluirPlano(id_plano);
    }
}

export default PlanoView