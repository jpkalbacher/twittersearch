var Tweet = React.createClass({
  render: function(){
    if (this.props.tweet.media_url) {
      var tweet_img = <img className="tweet-image" src={'https://pbs.twimg.com' + this.props.tweet.media_url.path}/>
    } else {
      tweet_img = <div></div>
    }
    return (
      <tr className="tweet-container container-fluid">
        <td>{this.props.tweet.text}</td>
        <td className="tweet-date">{new Date(this.props.tweet.created_at).toISOString().split('T')[0]}</td>
        <td>{this.props.tweet.retweets}</td>
        <td>{tweet_img}</td>
      </tr>
    )
  }
});
