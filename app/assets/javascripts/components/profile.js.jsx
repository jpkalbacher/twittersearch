var Profile = React.createClass({
  getInitialState: function(){
    return {
      profile: ProfileStore.profile()
    }
  },

  componentDidMount: function(){
    ProfileStore.addProfileChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    ProfileStore.removeProfileChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({profile: ProfileStore.profile()})
  },

  render: function(){
    if (this.state.profile.screen_name) {
      var profile = (<div className="profile-container">
        <h1>Profile</h1>

        <h4>@{this.state.profile.screen_name}</h4>
        <h4>{this.state.profile.name}</h4>
        <h4>followers: {this.state.profile.followers_count}</h4>
        <h4>following: {this.state.profile.following_count}</h4>
        <ProfileRating />
      </div>);
    } else {
      profile = (<div></div>)
    };
    return (
      <div>
        {profile}
      </div>
    )
  }
});
