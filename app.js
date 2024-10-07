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
        fs.readFile('data.json', (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            let jsonData;
            try {
                jsonData = JSON.parse(data.toString());
            } catch (err) {
                console.log('Error parsing JSON:', err);
                return;
            }
    
            jsonData.push({
                "id": 4,
                "name": "Butter",
                "quantity": 1
            });
    
            fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
                if(err) {
                    console.log(err);
                }
                console.log('file written');
            });
        });
    }
    if(req.url === '/delete:id') {
        fs.readFile('data.json', (err, data) => {
            if(err) {
                console.log(err)
            }
            let file_string = null;
            try {
                file_string = JSON.parse(file_string);
            } catch (error) {
                console.log(error)
            }

            

        })        
    }
    
})
.listen(8080)

