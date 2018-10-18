const mongoose = require('mongoose');
const Promise = require('bluebird');

// console.log(Promise);

//during solution lecture;
  //ask about this statement vs How to determine if the right database is chosen. 
  //("mongodb://localhost:27017/node-demo")

mongoose.connect('mongodb://localhost/fetcher');


//actual code;
let repoSchema = mongoose.Schema({
  id: Number,
  node_id: Number,
  name: 'string',
  full_name: 'string',
  owner: {
    login: 'string',
    id: 'string',
    avatar_url: 'string',
    url: 'string'  
  },
  html_url: 'string',
  description: 'string'
}); 

let Repo = mongoose.model('Repo', repoSchema);


let save = (githubRepos) => { 
  //Need to return Promise here.
  return Promise.all(githubRepos.map(repo => {
    let saveRepo = new Repo ({
      _id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      owner: {
        login: repo.owner.login,
        id: repo.id,
        avatar_url: repo.owner.avatar_url,
        url: repo.url  
      },
      html_url: repo.html_url,
      description: repo.description
    });
    //findOneAndUpdate handles all existing datas 
   return Repo.findOneAndUpdate({id: repo.id}, saveRepo, { upsert: true }, (err) => {
     console.log(err);
   });
  })).catch(err => {
    if (err) {
      throw (err);
    }
  });
};


//the save is a call back
module.exports.save = save;

/*

Testing Variation of code

var promises = actions.map(function(arr) {
  return MyModel.findOneAndUpdate(arr.query, arr.upsertData, {'upsert': true}).exec();
});

 saveRepo.save(err => {
      if(err) {
        console.log(err);
      }
    });
  }))
  .catch(err => {
    if (err) {
      console.log(err)
    }
  });
let save = (repo) => { 

  let saveRepo = new Repo ({
    id: repo.id,
    node_id: repo.node_id,
    name: repo.name,
    full_name: repo.full_name,
    owner: {
      login: repo.owner.login,
      id: repo.owner.id,
      avatar_url: repo.owner.avatar_url,
      url: repo.owner.url  
    },
    html_url: repo.html_url,
    description: repo.description
  });

  saveRepo.save(err => {
    if(err) {
      console.log(err);
    }
  });
};

Trying with Promise, maybe let's try with something else... 



*/


/*

  "id": 18221276,
    "name": "git-consortium",
    "full_name": "octocat/git-consortium",
    "owner": {
      "login": "octocat",
      "id": 583231,
      "avatar_url": "https://avatars0.githubusercontent.com/u/583231?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",

*/