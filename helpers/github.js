const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js') 
//need to go 2 files out to find the correct info. 
// const save = require('../database/index.js');


let getReposByUsername = (github, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${github}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data.body);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;