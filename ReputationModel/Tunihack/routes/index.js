const userController = require('../Controllers').user;
const postController = require('../Controllers').post;
module.exports = (app) =>{
    app.get('/api', (req,res) => res.status(200).send({
        message:'Welcome to the api!',
    }));
    //-------------------------------------
    app.get('/getUser/:id',userController.findOne);
    app.get('/getPost/:id',postController.findOne);


    // ------------------------------------
    app.post('/api/addUser', userController.create);
    app.post('/api/addPost',postController.create);
};

