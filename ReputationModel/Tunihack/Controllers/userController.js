const User = require('../models').User;
module.exports = {
    create(req,res){
        console.log(req.body);
        
        return User
        .create({
            name: req.body.name,
            reputation: req.body.reputation,
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },
    findOne(req,res){
        const id = parseInt(req.params.id)
        return User
        .findOne({
            where: { id: id }
        })
        .then(user => {
            console.log(user);
            
            res.status(201).send(user)})
        .catch(error => res.status(400).send(error));
    }
};