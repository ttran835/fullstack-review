import React from 'react';
import Repos from './Repos.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repos List Component </h4>
    There are {props.repos.length} repos.
    <div>
      This is the Repo Collections
    {props.repos.map((repo, index) => (
      <Repos key={index} repo={repo}/>

    ))}
    </div>
  </div>
)

export default RepoList;