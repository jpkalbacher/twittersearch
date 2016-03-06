var Result = React.createClass({
	showProfile: function() {
		Util.fetchProfile(this.props.handle.screen_name);
    Util.fetchTweets(this.props.handle.screen_name);
    SearchResultsStore.empty();
	},

	componentDidMount: function(){
    SearchResultsStore.addSearchChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchResultsStore.removeSearchChangeListener(this._onChange);
  },

  _onChange: function(){
    
  },

  render: function(){
    return (
      <tr className="search-result container-fluid profile-row">
        <td>{this.props.handle.name}</td>
        <td>
          <button className="btn btn-default"
              		onClick={this.showProfile}
              		value={this.props.handle.screen_name}>
              		{this.props.handle.name}
      		</button>
        </td>

      </tr>
    )
  }
});
