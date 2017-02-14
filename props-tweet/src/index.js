import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Tweet = React.createClass({
  render: function(){
    return(
      <div className="tweet">
        <Avatar hash={this.props.tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={this.props.tweet.author}/><Time time={this.props.tweet.timestamp}/>
          <Message text={this.props.tweet.message}/>
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
        </div>
      </div>
    )
  }
})

var Time = React.createClass({
  render: function(){
    return(
      <span className='time'>
        {this.props.time}
      </span>
    )
  }
})

var RetweetButton = React.createClass({
  render: function(){
    return(
      <i className='fa fa-retweet retweet-button' />
    )
  }
})

var ReplyButton = React.createClass({
  render: function(){
    return(
      <i className='fa fa-reply reply-button'/>
    )
  }
})

var MoreOptionsButton = React.createClass({
  render: function(){
    return(
      <i className='fa fa-ellipsis-h
        more-options-button'/>
    )
  }
})

var LikeButton = React.createClass({
  render: function(){
    return(
      <i className='fa fa-heart like-button'/>
    )
  }
})

var Avatar = React.createClass({
  render: function(){
    var hash = this.props.hash;
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return(
      <img src={url}
        className="avatar"
        alt="avatar"
        />
    )
  }
})

var Message = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
})

var NameWithHandle = React.createClass({
  render: function(){
    return(
      <span className="name-with-handle">
        <span className='name'>
          {this.props.author.name}
        </span>
        <span className="handle">
          {this.props.author.handle}
        </span>
      </span>
    )
  }
})

var testTweet = {
  message: 'Something about cats',
  gravatar: '94d72f2e212427535c273f76aa39b3c1',
  author:{
    handle: '@catperson',
    name: 'IAMA catperson'
  },
  likes: 2,
  retweets: 0,
  timestamp: '2016-07-30 21:24:37'
};


ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
