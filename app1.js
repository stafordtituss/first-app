const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('short'));
app.get("/", (req, res) => {
  console.log("Responding to the root route");
  res.send("Hello from ROOOt");
});
app.get("/users", (req, res) => {
  var user1 = {firstName: "Staford", lastName: "Titus S"}
  var user2 = {firstName: "Stephen", lastName: "Curry"}
  res.json([user1, user2]);
  res.send("Nodemon autoupdates when file is saved");
});

app.listen(3003, () => {
  console.log('Server is up and listening on port 3003...');
});
