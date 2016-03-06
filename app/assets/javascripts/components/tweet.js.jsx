var Tweet = React.createClass({
	componentDidMount: function(){
    SearchResultsStore.addSearchChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchResultsStore.removeSearchChangeListener(this._onChange);
  },

  _onChange: function(){
    console.log('Tweet Changed')
  },

  render: function(){
    return (
      <tr className="search-result container-fluid">
        <td>{this.props.tweet.text}</td>
        <td>{this.props.tweet.created_at}</td>
        <td>{this.props.tweet.retweet_count}</td>
      </tr>
    )
  }
});
