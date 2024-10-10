const fs = require("fs");
const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("data.json", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
        }
        res.writeHead(200);
        res.end(data);
      });
    }
    if (req.method === "POST" && req.url === "/addData") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString(); 
      });

      req.on("end", () => {
        try {
          const newData = JSON.parse(body);
          console.log(newData); 

         
          fs.readFile("data.json", (err, data) => {
            if (err) {
              console.log(err);
              res.writeHead(500);
              res.end("Internal Server Error");
              return;
            }

            let jsonData;
            try {
              jsonData = JSON.parse(data.toString());
            } catch (error) {
              console.log("Error parsing JSON:", error);
              res.writeHead(500);
              res.end("Error parsing JSON");
              return;
            }

            jsonData.push(newData);

            fs.writeFile(
              "data.json",
              JSON.stringify(jsonData),
              (err) => {
                if (err) {
                  console.log(err);
                  res.writeHead(500);
                  res.end("Internal Server Error");
                  return;
                }
                console.log("File updated");
                res.writeHead(200);
                res.end("Data added successfully");
              }
            );
          });
        } catch (err) {
          console.log(err);
          res.writeHead(400);
          res.end(err);
        }
      });

      req.on("error", (err) => {
        console.log("Request error:", err);
        res.writeHead(500);
        res.end("Internal Server Error");
      });
    }
    if (req.url.startsWith("/delete/")) {
      const id = req.url.split("/")[2];

      fs.readFile("data.json", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(500);
          res.end("Internal Server Error");
          return;
        }
        let jsonData;
        try {
          jsonData = JSON.parse(data.toString());
        } catch (error) {
          console.log("Error parsing JSON:", error);
          res.writeHead(500);
          res.end("Error parsing JSON");
          return;
        }

        jsonData = jsonData.filter((item) => item.id != id);

        fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (err) => {
          if (err) {
            console.log(err);
            res.writeHead(500);
            res.end("Internal Server Error");
            return;
          }
          console.log("File updated");
          res.writeHead(200);
          res.end("Item deleted successfully");
        });
      });
    }

    if (req.url.startsWith("/update/")) {
        const id = req.url.split("/")[2];
    
        
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
    
        req.on('end', () => {
            const newData = JSON.parse(body); 
    
            fs.readFile("data.json", (err, data) => {
                if (err) {
                    console.log(err);
                    res.writeHead(500);
                    res.end("Internal Server Error");
                }
    
                let jsonData;
                try {
                    jsonData = JSON.parse(data.toString());
                } catch (error) {
                    console.log("Error parsing JSON:", error);
                    res.writeHead(500);
                    res.end("Error parsing JSON");
                }
    
                let itemToUpdate = jsonData.find((item) => item.id == id);
                if (!itemToUpdate) {
                    res.writeHead(404);
                    res.end("Item not found");
                }
    
                Object.assign(itemToUpdate, newData);
    
                fs.writeFile("data.json", JSON.stringify(jsonData), (err) => {
                    if (err) {
                        console.log(err);
                        res.writeHead(500);
                        res.end("Internal Server Error");
                        return;
                    }
                    console.log("File updated");
                    res.writeHead(200);
                    res.end("Item updated successfully");
                });
            });
        });
        
        // Handle request errors
        req.on('error', (err) => {
            console.log('Request error:', err);
            res.writeHead(500);
            res.end('Internal Server Error');
        });
    }
    
  })
  .listen(8080, () => {
    console.log("listening on port 8080");
  });
