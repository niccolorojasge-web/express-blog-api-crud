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
    
}
