// Parsing incoming request (send using POST method Ex. from FORM Submition)

// But for that we first need to install "body-parser" package from npm
// and then also make a middleware for body-parser 
// we excess the send request using POST using "req.body"
// "req.body" it returns us a object with key-value pairs of the name of the HTML field and the value entered by the user, hence we could use it.
// We could redirect to different route using "res.redirect()"


const express = require('express');

const bodyparser = require('body-parser');

const app = express();

// below code used to parse the body in "req.body" so that we could recieve the data entered by the user and then use it 
app.use(bodyparser.urlencoded({extended:false}))

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});

app.use('/addproduct',(req,res,next)=>{
    res.send("<form method='POST' action='/product'><input type='text' name='proname'><input type='submit' value='ADD'></form>");
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello this is my response!!</h1>');
});


app.listen(3000);



// Parsing incoming request (send using POST method Ex. from FORM Submition)

// But for that we first need to install "body-parser" package from npm
// and then also make a middleware for body-parser 
// we excess the send request using POST using "req.body"
// "req.body" it returns us a object with key-value pairs of the name of the HTML field and the value entered by the user, hence we could use it.
// We could redirect to different route using "res.redirect()"
