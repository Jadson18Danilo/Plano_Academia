
import client from '../../../config/database.js'
class CadastroModel{
    static async novoCadastro(nome, id_aluno, cpf, telefone){
        const dados = [nome, id_aluno, cpf, telefone]
        const consulta = `insert into aluno(nome, id_aluno, cpf, telefone)
        values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows 
    }
    static async buscarCpfDoCadastro(cpf){
        const dados = [cpf]
        const consulta = `select * from aluno where cpf = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async atualizarCadastro(nome, cpf, telefone){
        const dados = [nome, cpf, telefone]
        const consulta = `update aluno set nome = $1, cpf = $3, telefone = $4 = $5 
        where cpf = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async excluirCadastro(cpf){
        const dados = [cpf]
        const consulta = `delete from aluno where cpf = $1 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

}

export default CadastroModel
