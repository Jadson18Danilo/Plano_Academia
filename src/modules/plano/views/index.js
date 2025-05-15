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
   static async editarPlano() {
        const id_plano = input("Digite o código do plano: ");
        const nome = input("Digite o nome do plano: ");
        const valor = input("Digite o valor do plano: ");
        const duracao_meses = input("Digite a duração do plano em meses: ");
        const aluno = await PlanoController.atualizarPlano(nome, id_plano, valor, duracao_meses);
        console.table(aluno);
    }

    static async listarTodosPlanos() {
        const aluno = await PlanoController.listarTodosPlanos();
        if (aluno.length === 0) {
            console.error("Nenhum plano encontrado!");
        } else {
            console.table(aluno);
        }
    }

    static async excluirPlano() {
         console.log('Excluir Plano')
        const id_plano = input('ID do Plano: ')
        await PlanoController.excluirMatricula(id_plano)
    }
}

export default PlanoView