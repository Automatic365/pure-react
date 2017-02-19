import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ErrorBox(props){
  return(
    <div className="alert alert-danger error-box" role="alert">
      <i className="fa fa-exclamation-triangle"/>
      {props.children}
    </div>
  )
}

ReactDOM.render(
  <ErrorBox>
    The World Is Ending
  </ErrorBox>,
  document.getElementById('root')
);
