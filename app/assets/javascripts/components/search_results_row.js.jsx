var SearchResultsRow = React.createClass({
	showProfile: function() {
		Util.fetchProfile(this.props.handle.screen_name);
	},

	componentDidMount: function(){
    SearchResultsStore.addSearchChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchResultsStore.removeSearchChangeListener(this._onChange);
  },

  _onChange: function(){
    console.log('changed');
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
