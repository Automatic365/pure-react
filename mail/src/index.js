import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var Envelope = React.createClass({
  render: function(){
    return(
      <div className="envelope">
        <div className="to-label">
          <AddressLabel person={this.props.toPerson} />
          <div className="stamp"> 
            <Stamp />
          </div>
        </div>
        <div className="from-label">
          <AddressLabel person={this.props.fromPerson} />
        </div>
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

var Stamp = React.createClass({
  render: function(){
    return(
      <div>
        STAMP
      </div>
    )
  }
})

var toPerson = {
  name: "Kristaps Porzingis",
  streetAddress: "Madison Square Garden",
  cityState: 'New York, NY 11374'
}

var fromPerson = {
  name: "Carmelo Anthony",
  streetAddress: "NY VIA DENVER",
  cityState: 'New York, NY 11374'
}

ReactDOM.render(
  <Envelope toPerson={toPerson} fromPerson={fromPerson}/>,
  document.getElementById('root')
);
