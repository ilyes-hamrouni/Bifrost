const Post = require('../models').Post
module.exports = {
    create(req,res){
        return Post
        .create({
            name: req.body.name,
            source: req.body.source,
            userId: req.body.userId,
        })
        .then(post => res.status(201).send(post))
        .catch(error => res.status(400).send(error));
    },
    findOne(req,res){
        const id = parseInt(req.params.id)
        return Post
        .findOne({
            where: { id: id }
        })
        .then(post => {
            console.log(post);
            
            res.status(201).send(post)})
        .catch(error => res.status(400).send(error));
    }
};