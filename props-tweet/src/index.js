import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'

var Tweet = React.createClass({
  render: function(){
    var {tweet} = this.props
    return(
      <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
          <Message text={tweet.message}/>
          <div className='buttons'>
            <ReplyButton />
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    )
  }
})

var Time = React.createClass({
  computeTimeString: function(){
    return moment(this.props.time).fromNow();
  },

  render: function(){
    return(
      <span className='time'>
        {this.computeTimeString()}
      </span>
    )
  }
})

var RetweetButton = React.createClass({
  getCount: function(){
    if (this.props.count > 0){
      return <span className='retweet-count'>
        {this.props.count}
      </span>
    } else {
      return null
    }
  },
  render: function(){
    return(
      <span className='retweet-count'>
        <i className='fa fa-retweet retweet-button' />
        {this.getCount()}
      </span>
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
    var {count} = this.props
    return(
      <span className='like-button'>
        <i className='fa fa-heart like-button'/>
        {count > 0 ?
          <span className='like-count'>
            {count}
          </span>
          : null
        }
      </span>
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
    var { name, handle} = this.props.author
    return(
      <span className="name-with-handle">
        <span className='name'>
          {name}
        </span>
        <span className="handle">
          @{handle}
        </span>
      </span>
    )
  }
})

var testTweet = {
  message: 'Something about cats',
  gravatar: '94d72f2e212427535c273f76aa39b3c1',
  author:{
    handle: 'catperson',
    name: 'IAMA catperson'
  },
  likes: 2,
  retweets: 5,
  timestamp: '2017-01-30 21:24:37'
};


ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.querySelector('#root')
);
