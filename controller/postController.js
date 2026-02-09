const posts = require('../data/posts');
//funzione index
function index(req, res){
//inizialmente il menu filtrato corrisponde a quello originale
    let filteredPost = posts;
    if(req.query.posted){
        filteredPost= posts.filter(
            post=>post.posted.includes(req.query.posted)
        );
    }
    if(!posts){
        res.status(404)
        return res.json({
            error:"not found",
            message :"post non trovato"
        })
    }
    res.json(filteredPost)
};
//show
function show (req, res){
    const id = parseInt(req.params.id)
    const post = posts.find(post=> post.id === id);
    if(!post){
        res.status(404)
        return res.json({
            error:"not found",
            message :"post non trovato" 
        })
    }
    res.json(post)
};
//store
function store (req, res){
  res.send('creazione nuovo post');
};
//update
function update(req, res){
    res.send('modifica integrale del post'+ req.params.id);
};
//modify
function modify(req,res){
res.send('modifica parziale post'+ req.params.id);
};
//delete
function delet(req,res){
const id = parseInt(req.params.id)
const post = posts.find(post=>post.id===id)
if(!post){
    return res.json({
         error:"not found",
            message :"post non trovato"
    })
}
posts.splice(posts.indexOf(post),1);
console.log(posts);
res.status(204)
};
module.exports={index, show, store , update,modify,delet}
