var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(
        [
        {
            title : "Credit Suisse is offering course in BITS in this semester",
            publishDate : "",
            author : "Shubham Garg",
            votes : 234,
            comments : 20,
        }, 
        {
            title : "Meditation Session by Mini Sadhguru on Sunday",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 44,
            comments : 6,
        },
        ],
        null, 3
    ));
}).listen(8080);