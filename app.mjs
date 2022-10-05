import http from 'http';

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Server is running");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
