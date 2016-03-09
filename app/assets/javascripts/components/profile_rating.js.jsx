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
    return (
      <div>
        <h1>rating: {this.state.rating}</h1>
      </div>
    )
  }
});
