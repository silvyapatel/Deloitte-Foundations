const http=require('http');

const server= http.createServer();
const port=3000;
server.listen(port);

server.on('connection',(socket)=>{
    console.log('new connection');
});
console.log(`listening on port ${port}`);