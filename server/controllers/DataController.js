const Data = require('../models/Data');

module.exports = {

    async index(req, res){
        const { cat } = req.params;
        const data = await Data.find({"category": cat});
        return res.json(data);
    },

    async store(req, res){
        try{
            const data = await Data.create(req.body);
            return res.send(data);

        }catch(err){
            return res.status(400).send({ error: 'Aconteceu algum erro...'});
        }
    }
}