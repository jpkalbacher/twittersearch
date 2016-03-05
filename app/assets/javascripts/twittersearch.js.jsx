$(function (){
  var rootEl = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  // var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div className="app clearfix container">
          <h1>TWITTER APP</h1>
        </div>
      )
    }
  });

  var routes = (
    <Route path="/" component={App}>
    </Route>
  );

  React.render(<Router>{routes}</Router>, rootEl);
});
