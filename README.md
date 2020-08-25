# Express.js-parsing-incoming-request-and-data-using-the-POST-method-Ex.-A-FORM-Sumbmition-
Express.js parsing incoming request and data using the POST method (Ex. A FORM Sumbmition)

// Parsing incoming request (send using POST method Ex. from FORM Submition)

// But for that we first need to install "body-parser" package from npm

// and then also make a middleware for body-parser 

// we excess the send request using POST using "req.body"

// "req.body" it returns us a object with key-value pairs of the name of the HTML field and the value entered by the user, hence we could use it.

// We could redirect to different route using "res.redirect()"

// below code used to parse the body in "req.body" so that we could recieve the data entered by the user and then use it

app.use(bodyparser.urlencoded({extended:false}))
