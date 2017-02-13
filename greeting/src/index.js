import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Greeting = React.createClass({
  getUsername: function(name){
    if(name){
      return `Hello ${name}!`
    } else {
      return "Not logged in"
    }
  },
  render: function(){
    return(
      <div>
        {this.getUsername("root")}
      </div>
    )
  }
})

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
