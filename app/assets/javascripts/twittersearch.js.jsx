$(function (){
  var rootEl = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div className="app clearfix container">
          {this.props.children}
        </div>
      )
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="main" component={Main} />
    </Route>
  );

  ReactDOM.render(<Router>{routes}</Router>, rootEl);
});
