import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  fetch () {
    $.ajax({
      type: "GET",
      url: '/repos',
      dataType: 'text/json',
      data: {
        query: term
      },
      success: data => {
        console.log(`data received ${data}`);
      },
      error: err => {
        console.log('there is an err ', err);
      }
    });
  }

  search (term) {

    $.ajax({
      type: "POST",
      url: '/repos',
      data: {
        query: term
      },
      dataType: 'text/json',
      success: data => {
        console.log(`data received ${data}`);
      },
      error: err => {
        console.log('there is an err ', err);
      }
    });
      
    console.log(`${term} was searched`);
    //make an ajax call to the server
    // TODO
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
var myKeyVals = { A1984 : 1, A9873 : 5, A1674 : 2, A8724 : 1, A3574 : 3, A1165 : 5 }

var saveData = $.ajax({
      type: 'POST',
      url: "someaction.do?action=saveData",
      data: myKeyVals,
      dataType: "text",
      success: function(resultData) { alert("Save Complete") }
});
*/