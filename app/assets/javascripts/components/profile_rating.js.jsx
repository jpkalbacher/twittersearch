var ProfileRating = React.createClass({
  getInitialState: function(){
    return {
      rating: ProfileStore.rating()
    }
  },

  componentDidMount: function(){
    ProfileStore.addRatingChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ProfileStore.removeRatingChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({rating: ProfileStore.rating()})
  },

  render: function(){
    if (this.state.rating) {
      var rating = (
        <div>
          <p><span className="label-text">PROFILE RATING: </span> {this.state.rating}</p>
        </div>
      )
    } else {
      rating = ''
    };

    return (
      <div>{rating}</div>
    )
  }
});
