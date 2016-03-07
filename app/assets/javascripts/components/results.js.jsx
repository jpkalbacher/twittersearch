var Results = React.createClass({
  getInitialState: function(){
    return {
      foundHandles: SearchResultsStore.all()
    };
  },

  componentDidMount: function(){

    SearchResultsStore.addSearchChangeListener(this._onChange);
    $(document).ready(function() { 
        $("#searchResults").tablesorter(); 
      } 
    ); 
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
      rows.push(<Result handle={result} key={result.id} />);
    });
    return (
      <div>
        <table className="table table-striped" id="searchTablew">
            <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
});