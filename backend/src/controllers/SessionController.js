const connection = require('../database/conection');

module.exports = {
    async create(request, response){
       const { id } = request.body;

       //buscar a ong do bd
const ong = await connection('ongs')
    //esse 'id' é igual ao id de cima { id } 
    .where('id', id)
    //retorna apenas o nome
    .select('name')
    //retorna apenas a primeira ong
    .first();

    //se a ong nao existir
    if(!ong){
        return response.status(400).json({error: 'No Ong found with this ID'});
    }
    //retornar os dados, logo apenas o name dela.
    return response.json(ong);

}
}