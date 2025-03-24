const http = require('http');

// http is a protocon for fetching resources such as HTML 

// creating server
// reuest and response both are the callback fn param 
// that are used to node.js queries params body headers and even cookies
const server = http.createServer((req, res) => {

    //handle incoming request

    if (req.url === '/') {
        //set response headers
        res.writeHead(200, { 'content-type': 'text/html' });

        // set response headers
        res.write('<html><body><p>This is the home page</p></body></html>');

        res.end();
    }

    if (req.url === '/contact') {
        //set response headers
        res.writeHead(200, { 'content-type': 'text/html' });

        // set response headers
        res.write(`
            <html>
                <body>
                    <div>
                        <h1>This is our contact page</h1>
                    </div>
                    <form>
                        <input type="text" name='email' />
                        <input type="text" name='password' />

                        <label for="addtional-info">You can write to us here :</label>
                        <textarea id="addtional-info" name="addtional-info" rows={4} cols={50}  placeholder='Here you can write to us'>
                        </textarea>
                </form>
            </body>
            </html>`
        );

        res.end();
    }
});

server.listen(3000);

// http//:localhost:3000
console.log('Node js web server at port 3000 is running');