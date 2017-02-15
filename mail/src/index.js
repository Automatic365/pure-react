import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var Envelope = React.createClass({
  render: function(){
    return(
      <div>
        <AddressLabel person={{name: "John Smith",
           streetAddress: "123 BoogieWoogie Ave",
            cityState: "Los Angeles, CA 90210"}} />
      </div>
    )
  }
});

var AddressLabel = React.createClass({
  render: function(){
    var {name, streetAddress, cityState} = this.props.person;
    return(
      <div>
        <div>{name}</div>
        <div>{streetAddress}</div>
        <div>{cityState}</div>
      </div>
    )
  }
})

ReactDOM.render(
  <Envelope />,
  document.getElementById('root')
);
