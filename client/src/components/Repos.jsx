import React from 'react';
// I want image,
//name
// description
//url link with ahref.
  //key & repo

const Repos = (props) => (
  <div>
    <img className='image' src={props.repo.owner.avatar_url} />
    <div>
      <a href={props.repo.html_url}>{props.repo.name}</a>
    </div>
    <div className='description'>{props.repo.description}</div>
  </div>
)

export default Repos;