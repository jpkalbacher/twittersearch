var Tweets = React.createClass({
  getInitialState: function(){
    return {
      tweets: TweetStore.all()
    };
  },

  componentDidMount: function(){
    TweetStore.addTweetChangeListener(this._onChange);
  },

  sortRetweetsAscending: function(){
    TweetStore.sortRetweetsAscending();
  },

  sortTweetsByDate: function(){
    TweetStore.sortTweetsByDate();
  },

  togglePhotoFilter: function(){
    TweetActions.togglePhotos();
  },

  componentWillUnmount: function(){
    TweetStore.removeTweetChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({tweets: TweetStore.all()});
  },

  render: function() {
    var rows = [];
    this.state.tweets.forEach(function(tweet){
      rows.push(<Tweet tweet={tweet} key={tweet.id} />);
    });
    return (
      <div>
        <input className="checkbox" 
               id="filter-checkbox" 
               type="checkbox"
               onClick={this.togglePhotoFilter}>
               only include photos
        </input>

        <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th onClick={this.sortTweetsByDate}>Date</th>
                <th onClick={this.sortRetweetsAscending}>Retweets</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
      </div>
    );
  }
});
