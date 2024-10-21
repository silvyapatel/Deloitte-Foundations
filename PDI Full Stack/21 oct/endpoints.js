const http=require('http');
const port=3000;

const server= http.createServer(
    (req,res)=>{
        if(req.url=='/'){
            res.write("Hello world!");
            res.end();
        }
        if(req.url=='/api/users'){
            res.write(JSON.stringify([{"name":"silvya","surname":"Patel"},{"name":"tirth","surname":"shrimali"}]));
            res.end();
        }
    }
);
server.listen(port);

console.log(`listening on port ${port}`);