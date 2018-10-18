const express = require('express');
const bodyParser = require('body-parser');
const helper = require('../helpers/github.js');
const db = require('../database/index.js')


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


//this is where we will need our helper function 
app.post('/repos', function (req, res) { 

  helper.getReposByUsername(req.body.query, (err, datas) => {
    if (err) {
      console.log(err);
    } else {
      let parsedDatas = JSON.parse(datas);
      db.save(parsedDatas);
    }
  })
});

//I need to import another function
  //this function is should be sort for the top 25 repos 
  //that is currently in the database... 
app.get('/repos', function (req, res) {
  res.send(req.body);
  // TODO - your code here!
  //need to pass back post function here... 
  // res.send('Something is on the homepage')
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

