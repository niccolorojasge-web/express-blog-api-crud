const express = require('express')
const router = express.Router();
const postController = require ('./controller/postController')

//rotte di crud

//index
 router.get('/',postController.index );
 //show
 router.get('/:id', function(req, req){
res.send('dettagli deei post' + req.params.id);  
 });
//store
router.post('/', function (req, res){
    res.send('creazione nuovo post');
});
//update
router.put('/:id', function(req, res){
    res.send('modifica integrale del post'+ req.params.id);
});
//modify
router.patch('/:id', function(req, res){
res.send('modifica parziale post'+ req.params.id);
});
//delete
router.delete('/:id', function(req, res){
    res.send('elimina post'+req.params.id);
});

module.exports = router;