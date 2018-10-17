const mongoose = require('mongoose');
//during solution lecture;
  //ask about this statement vs How to determine if the right database is chosen. s
  //("mongodb://localhost:27017/node-demo")
mongoose.connect('mongodb://localhost/fetcher');

//the function save should save the information
//passed in from the controller to the server to the database to save some sort of info into the DB
//Once we create the new MongooseDB => convert to JSON.stringify
  //Should we be parsing the body? But how would you even test if such thing is working? 
  

let repoSchema = mongoose.Schema({
  id: Number,
  name: 'string',
  full_name: 'string',
  avatar_url: 'string',
  description: 'string',
  html_url: 'string'
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (gitHubInfo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;


/*
 var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });


*/