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
    ProfileStore.clearProfile();
    ProfileStore.clearRating();
    TweetStore.clearTweets();
    Util.fetchProfile(this.state.searchParams);
    Util.fetchTweets(this.state.searchParams);
    Util.fetchRating(this.state.searchParams);
    this.setState({searchParams: ""});
  },

  render: function(){
    return (
      <div>
        <form className="search-form clear-fix" onSubmit={this.handleSubmit}>
            <img className="logo" src="http://seoulspace.co.kr/wp-content/uploads/2011/11/twitter-logo.png"/>
            <input type="text"
                   className="search-bar clear-fix"
                   value={this.state.searchParams}
                   placeholder="Search for users..."
                   onChange={this.updateSearchParams}/>
            <button className="search-btn btn clear-fix" type="submit"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </form>
      </div>
    )
  }
});
