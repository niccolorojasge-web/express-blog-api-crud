const posts = require('../data/posts');
const { post } = require('../routes/posts');
//funzione index
function index(req, res) {
    //inizialmente il menu filtrato corrisponde a quello originale
    let filteredPost = posts;
    if (req.query.posted) {
        filteredPost = posts.filter(
            post => post.posted.includes(req.query.posted)
        );
    }
    res.json(filteredPost)
};
//show
function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404)
        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }
    res.json(post)
};
//store
function store(req, res) {
    const newId=posts[posts.length -1].id+1;
    const newPost ={
        id : newId,
        name:req.body.name,
        Image:req.body.Image

    }
    posts.push(newPost)
    console.log(posts)
    res.status(201)
    res.json(newPost)
};
//update
function update(req, res) {
    const id=parseInt(req.params.id)
    const post = posts.find(post=>post.id===id);
    if(!post){
        res.status(404)
        return res.json({
            message:"not found"
        })
    }
    post.name= req.body.name,
    post.image=req.body.image,
    console.log(posts)
    res.json(post)
};
//modify
function modify(req, res) {
    res.send('modifica parziale post' + req.params.id);
};
//delete
function delet(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    if (!post) {
        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.status(204)
};
module.exports = { index, show, store, update, modify, delet }
