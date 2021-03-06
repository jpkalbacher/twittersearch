var Tweets = React.createClass({
  getInitialState: function(){
    return {
      tweets: TweetStore.all()
    };
  },

  componentDidMount: function(){
    TweetStore.addTweetChangeListener(this._onChange);
  },

  sortTweetsByRetweets: function(){
    TweetStore.sortTweetsByRetweets();
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

    if (this.state.tweets[0]) {
      var feed = (<div className="tweets">
        <table className="table tweet-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th onClick={this.sortTweetsByDate}>Date</th>
                <th onClick={this.sortTweetsByRetweets}>Retweets</th>
                <th><div className="photo-filter">
                      <label>with photos only </label><span> </span>
                      <input id="filter-checkbox" 
                             type="checkbox"
                             value=""
                             onClick={this.togglePhotoFilter}/>
                    </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
      </div>);
    } else {
      feed = ''
    }
    return (
      <div className="tweets">
        {feed}
      </div>
    );
  }
});
