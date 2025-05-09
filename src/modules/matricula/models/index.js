import client from "../../../config/database.js"

class MatriculaModel {
    static async novaMatricula(data_inicio, data_fim, status, id_aluno, id_plano) {
        const dados = [data_inicio, data_fim, status, id_aluno, id_plano]
        const consulta = `insert into matricula(data_inicio, data_fim, status, id_aluno, id_plano)
            values ($1, $2, $3, $4, $5) returning *;`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    
    static async atualizarMatricula(data_inicio, data_fim, status, id_aluno, id_plano) {
        const dados = [data_inicio, data_fim, status, id_aluno, id_plano]
        const consulta = `update matricula set data_inicio = $1, data_fim = $2,
            status = $3 where id_aluno = $4 and id_plano = $5 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    
    static async excluirMatricula(id_matricula) {
        const dados = [id_matricula]
        const consulta = `delete from matricula where id_matricula = $1 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }

}

export default MatriculaModel