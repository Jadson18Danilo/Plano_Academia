
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
  static async editarAluno(nome, cpf, telefone, id_aluno) {
    const aluno = await CadastroController.atualizarCadastro(
      nome,
      cpf,
      telefone,
      id_aluno
    ); 
    console.table(aluno);
  }
  static async buscarCpfDoCadastro(cpf) {
    const aluno = await CadastroController.buscarCpfDoCadastro(cpf);
    console.table(aluno);
  }
  static async excluirCadastro(cpf) {
    await CadastroController.excluirCadastro(cpf);
  }
}
export default CadastroView;
