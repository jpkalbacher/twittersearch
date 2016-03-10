var Main = React.createClass({
  render: function(){
    return (
      <div className="main-page">
      	<div className="header"><h1>Twitter Search and Profile Rank</h1></div>
        < Search />
        < TwitterUser />
      </div>
    )
  }
})
