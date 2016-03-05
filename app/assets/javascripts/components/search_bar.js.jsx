var SearchBar = React.createClass({
  getInitialState: function(){
    return {searchParams: ""};
  },

  updateSearchParams: function(e){
    this.setState({searchParams: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault();
    var searchParams = this.state.searchParams;
    Util.searchForHandle(this.state.searchParams)
    this.setState({searchParams: ""});
  },

  render: function(){
    return (
      <form className="search-form clear-fix" onSubmit={this.handleSubmit}>
          <input type="text"
                 className="form-control search-bar clear-fix"
                 value={this.state.searchParams}
                 placeholder="Search for users..."
                 onChange={this.updateSearchParams}/>
          <button className="btn clear-fix" type="submit">Search</button>
      </form>
    )
  }
});
