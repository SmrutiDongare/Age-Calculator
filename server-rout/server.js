const http = require('http');

// Define the data to be returned
const responseData = {
  message: 'Hello, world!',
  timestamp: new Date().toISOString()
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Check if the request method is GET and the request URL is '/api/data'
  if (req.method === 'GET' && req.url === '/api/data') {
    // Set the response header to indicate JSON content type
    res.setHeader('Content-Type', 'application/json');
    
    // Send the JSON response with status code 200 (OK)
    res.writeHead(200);
    res.end(JSON.stringify(responseData));
  } else {
    // For any other routes or request methods, return a 404 (Not Found) response
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Specify the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//How to start on browser
//run command on terminal  -> node server.js -> it will start the localhost 3000 live 
//open that localhost and pass URL -> localhost:3000/api/data
