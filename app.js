const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts')
app.use(express.json())
const notFound =require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("<h1>server del mio blog</h1>");
});

app.use('/posts', postsRouter) 
app.use(notFound);
app.use(errorsHandler)

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`); 
});