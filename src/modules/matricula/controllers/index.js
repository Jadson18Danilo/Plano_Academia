import MatriculaModel from "../models/index.js";
import AlunoModel from "../../aluno/models/index.js";
import PlanoModel from "../../plano/models/index.js";

class MatriculaController{
    static async novaMatricula(id_aluno, id_plano, data_matricula){
        try {
            const aluno = await AlunoModel.listarTodosAlunos(id_aluno)
            if(aluno.length === 0){
                return console.error('Aluno não encontrado!')
            }
            const plano = await PlanoModel.listarTodosPlanos(id_plano)
            if(plano.length === 0){
                return console.error('Plano não encontrado!')
            }
            const matricula = await MatriculaModel.novaMatricula(id_aluno, id_plano, data_matricula)
            console.log('Matrícula criada com sucesso!')
            return matricula
        } catch (error) {
            console.log('Erro ao criar matrícula:', error.message)
        }
    }
}

export default MatriculaController
