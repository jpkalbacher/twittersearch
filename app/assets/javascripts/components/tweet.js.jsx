var Tweet = React.createClass({
  render: function(){
    return (
      <tr className="search-result container-fluid">
        <td>{this.props.tweet.text}</td>
        <td>{this.props.tweet.created_at}</td>
        <td>{this.props.tweet.retweets}</td>
      </tr>
    )
  }
});
