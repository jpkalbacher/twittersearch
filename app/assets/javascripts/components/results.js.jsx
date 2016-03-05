var Results = React.createClass({
  render: function() {
    var rows = [];
    // this.state.activities.forEach(function(activity){
    //   rows.push(<ActivityRow activity={activity} key={activity.id} />);
    // });
    return (
      <div>
        <h1 className="activity-table">Results</h1>
        <table className="table table-striped">
            <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
});
