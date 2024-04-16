const http = require("http");
// Leer el archivo
const fs = require('fs').promises;
// const path = require('node:path'); 
require('dotenv').config()

const types = ['html', 'css', 'js', 'json', 'jpg'];


const host = 'localhost';
const port = process.env.PUERTO ;

const requestListener = function (req, res) {

    res.setHeader("Content-Type", types);
    if (req.url=== '/') {
        fs.readFile(__dirname + "/pages/pagina.html")
        .then(contents => {


            res.writeHead(200);
            res.end(contents);
        })
    } else if (req.url ==='/contacto') {
        fs.readFile(__dirname + "/pages/contacto.html")
        .then(n=>{
            res.writeHead(200);
            res.end(n)
        })
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    try {
        console.log(`Servidor corriendo en http://${host}:${port}`);
    } catch (error) {
        console.log(error)
    }
});
