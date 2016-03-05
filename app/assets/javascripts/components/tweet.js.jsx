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
      <tr className="search-result container-fluid profile-row">
        <td>{this.props.tweet.text}</td>
      </tr>
    )
  }
});
