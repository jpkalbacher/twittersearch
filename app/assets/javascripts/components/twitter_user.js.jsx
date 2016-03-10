var TwitterUser = React.createClass({
  getInitialState: function(){
    return {search_fragment: ""};
  },

  updateSearchParams: function(e){
    this.setState({searchParams: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault();
    var searchParams = this.state.searchParams;
    Util.searchForHandle(this.state.searchParams)
  },

  render: function(){
    return (
      <div>
      	< Profile />
      	< Tweets />
      </div>
    )
  }
});
