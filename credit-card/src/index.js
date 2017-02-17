import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var CreditCard = React.createClass({
  render: function(){
    var {name, exp, number, bank } = this.props.cardInfo;
    return(
      <div className="boxed">
        <div className="bank">{bank}</div>
        <div className="number">{number}</div>
        <div className="exp-info">
          <div className="valid">Valid Thru</div>
          <div className="exp">{exp}</div>
        </div>
        <div className="name">{name}</div>
      </div>

    )
  }
})

ReactDOM.render(
  <CreditCard cardInfo={{name:"Eevee Hanna", exp: "12/17", number: "1234  5678  8765  4321", bank: "Chase Bank"}}/>,
  document.getElementById('root')
);
