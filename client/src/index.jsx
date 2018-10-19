import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import css from '../src/css/stylesheet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  //bound this context to getData; 

  this.getData.bind(this);
  this.search.bind(this);


  }

  getData() {
    let context = this
    $.ajax({
      url: '/repos',
      method: "GET",
      type: 'application/javascript',
      success: data => {
        console.log('what is this data?', data);
        context.setState( { repos: data } );
      },
      error: err => {
        console.log('there is an err ', err);
      }
    });
  }

  componentDidMount () {
    console.log(this.getData())
    this.getData();
  };

  search (term) {
    let context = this;
    $.ajax({
      url: '/repos',
      method: "POST",
      //data doesnt have any information inside it
      //have to set the req.body data to something else prior to grabbing the info.
      data: {
        query: term
      },
      type: 'application/json',
      success: data => {
        //success will automatically refreshes the page. 
        console.log(`data received ${data}`);
        // context.getData();
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


