var Tweet = React.createClass({
  render: function(){
    return (
      <tr className="tweet-container container-fluid">
        <td>{this.props.tweet.text}</td>
        <td>{this.props.tweet.created_at}</td>
        <td>{this.props.tweet.retweets}</td>
      </tr>
    )
  }
});
