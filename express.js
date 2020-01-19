
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(morgan('short'));
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get("/", (req, res) => {
  console.log("Responding to the root route");
  res.render('index');
});
app.get("/contact", (req, res) => {
  res.render('contact', {qs: req.query});
});
app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});
app.get("/users", (req, res) => {
  var user1 = {firstName: "Staford", lastName: "Titus S"}
  var user2 = {firstName: "Stephen", lastName: "Curry"}
  res.json([user1, user2]);
  res.send("Nodemon autoupdates when file is saved");
});
app.get('/profile/:name', (req, res) => {
  var data = {age: 21, job: 'hacker', hobbies: ['hacking', 'reading', 'gaming']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3003, () => {
  console.log('Server is up and listening on port 3003...');
});
