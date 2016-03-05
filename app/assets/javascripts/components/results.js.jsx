var Results = React.createClass({
  getInitialState: function(){
    return {
      foundHandles: SearchResultsStore.all()
    };
  },

  componentDidMount: function(){
    SearchResultsStore.addSearchChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchResultsStore.removeSearchChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState({foundHandles: SearchResultsStore.all()});
  },

  render: function() {
    var rows = [];
    this.state.foundHandles.forEach(function(result){
      rows.push(<SearchResultsRow handle={result} key={result.id} />);
    });
    return (
      <div>
        <h1 className="results-table">Results</h1>
        <table className="table table-striped">
            <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
});