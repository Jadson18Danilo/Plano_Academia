
import CadastroController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class CadastroView {
  static async criar() {
    const nome = input("Digite Seu nome: ");
    const cpf = input("Digite seu CPF: ");
    const telefone = input("Digite seu telefone: ");
    const id_aluno = input("Digite seu código: ");
    const aluno = await CadastroController.novoCadastro(
      nome,
      cpf,
      telefone,
      id_aluno
    );
    console.table(aluno);
  }
  static async editarAluno() {
    const id_aluno = input("Digite o código do aluno: ");
    const nome = input("Digite Seu nome: ");
    const cpf = input("Digite seu CPF: ");
    const telefone = input("Digite seu telefone: ");
    const aluno = await CadastroController.atualizarCadastro(
      id_aluno,
      nome,
      cpf,
      telefone
    );
    console.table(aluno);
  }
  
  static async buscarCpfDoCadastro() {
    const cpf = input("Digite o CPF do aluno: ");
    const aluno = await CadastroController.buscarCpfDoCadastro(cpf);
    if (aluno.length === 0) {
      console.error("Nenhum aluno encontrado com esse CPF!");
    } else {
      console.table(aluno);
    }
  }
  static async excluirCadastro() {
    const id_aluno = input("Digite o código do aluno: ");
    const aluno = await CadastroController.excluirCadastro(id_aluno);
    if (aluno.length === 0) {
      console.error("Nenhum aluno encontrado com esse código!");
    } else {
      console.table(aluno);
    }
  }
}
export default CadastroView;
