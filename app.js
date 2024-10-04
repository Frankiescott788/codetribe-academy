const fs = require('fs');
const http = require('http');

http.createServer( (req, res) => {
    if(req.url === '/'){
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
            }
            res.writeHead(200);
            res.end(data);
        })
    }
    if(req.url === '/addData') {
        
    } 
})
.listen(8080)