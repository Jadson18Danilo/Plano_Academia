
import client from '../../../config/database.js'
class PlanoModel{
    static async novoPlano(nome, id_plano, valor, duracao_meses){
        const dados = [nome, id_plano, valor, duracao_meses]
        const consulta = `insert into aluno(nome, id_plano, valor, duracao_meses){)
        values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows 
    }
    static async listarTodosPlanos(){
        const consulta = `select * from aluno`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async atualizarPlano(nome, id_plano, valor, duracao_meses){
        const dados = [nome, id_plano, valor, duracao_meses]
        const consulta = `update aluno set nome = $1, id_plano = $3, valor, duracao_meses){ = $4 = $5 
        where id_plano = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async excluirPlano(id_plano){
        const dados = [id_plano]
        const consulta = `delete from aluno where id_plano = $1 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

}

export default PlanoModel
