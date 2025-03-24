const http = require('http');

// http is a protocon for fetching resources such as HTML 

// creating server
// reuest and response both are the callback fn param 
// that are used to node.js queries params body headers and even cookies
const server  = http.createServer((req, res) => {

    //handle incoming request

    if(req.url == '/') {
        //set response headers
        res.writeHead(200, { 'content-type': 'text/html'})
        
        // set response headers
        res.write('<html><body><p>This is the home page</p></body></html>')

        res.end();
    }
})

server.listen(3000)

// http//:localhost:3000
console.log('Node js web server at port 3000 is running')