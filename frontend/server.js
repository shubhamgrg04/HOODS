var http = require('http');
var HttpDispatcher = require('httpdispatcher');
var dispatcher     = new HttpDispatcher();

function handleRequest(request, response){
    try {
        // log the request on console
        console.log(request.url);
        // Dispatch
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

http.createServer(handleRequest)
    .listen(8080);

dispatcher.onGet("/general/posts", function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(
        [
        {
            title : "Credit Suisse is offering course in BITS in this semester",
            description : "A finance professor told me that Credit Suisse is offering a course on Risk Management in BITS and it will be a major criterion for PS allotment to finance PS stations.",
            publishDate : "",
            author : "Shubham Garg",
            votes : 234,
            comments : 26,
        }, 
        {
            title : "Meditation classes by Isha Foundation in Summer Vacations",
            description : "Isha foundation is organizing 7 days meditation camp in Birla Yoga Kendra and invites BITS Pilani students for registration.",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 444,
            comments : 6,
        },
        {
            title : "Anyone watching Terror",
            description : "I heard that most of its episodes have been leaked. Have you got them?",
            publishDate: "",
            author : "Abhishek Gupta",
            votes : 12,
            comments : 2,
        },
        ],
        null, 3
    ));
});

dispatcher.onGet("/internships/posts", function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(
        [
        {
            title : "Graphic designer opening @ HOODS",
            description: "Hoods is looking for graphic design interns who are passionate about what we are building. The intership is for 2 months in the summer break. We offer 20k/month as stipend.",
            publishDate : "",
            author : "Shubham Garg",
            votes : 69,
            comments : 45,
        }, 
        {
            title : "Delloite Management Consulting Internship 2018-19",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 44,
            comments : 6,
        },
        {
            title : "ITC category management summer internship",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 44,
            comments : 6,
        },
        ],
        null, 3
    ));
});

dispatcher.onPost("/internships/newpost", function(req, res) {
    console.log(req.body);
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(
        [
        {
            title : "Graphic designer opening @ HOODS",
            publishDate : "",
            author : "Shubham Garg",
            votes : 69,
            comments : 45,
        }, 
        {
            title : "Delloite Management Consulting Internship 2018-19",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 44,
            comments : 6,
        },
        {
            title : "ITC category management summer internship",
            publishDate : "",
            author : "Suryansh Tiwari",
            votes : 44,
            comments : 6,
        },
        ],
        null, 3
    ));
});