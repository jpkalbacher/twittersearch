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
      var profile = (
        <div className="profile clearfix">
          <div className="profile-picture">
            <img className="profile-img" src={'https://pbs.twimg.com/' + this.state.profile.profile_image_url.path.replace("normal","bigger")}/>
          </div>
          <div className="profile-stats">
            <p><span id="display-name">{this.state.profile.name}</span></p>
            <p><span id="display-handle">@{this.state.profile.screen_name}</span></p>
            <p><span className="label-text">FOLLOWERS: </span>{this.state.profile.followers_count}</p>
            <p><span className="label-text">FOLLOWING: </span>{this.state.profile.following_count}</p>
            <ProfileRating />
          </div>
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
