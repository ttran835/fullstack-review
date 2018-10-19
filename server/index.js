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
      res.status(404).send('Not Found');
    } else {
      let parsedDatas = JSON.parse(datas);
      //you'd want to save the information to the array individually
      //does the looping work? 
      db.save(parsedDatas);
      res.status(200).send('Success!');
    }
  })
});

app.get('/repos', function (req, res) {

  db.findData( (err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send('You suck!');
    } else {
      console.log(typeof(data));
      console.log('data from index js,', data);
      res.status(200).json(data);
    }
  });
  // TODO - your code here!
  //need to pass back post function here... 
  // res.send('Something is on the homepage')
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

