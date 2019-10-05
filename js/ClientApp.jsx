const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const {Router, IndexRoute, Route, hashHistory} = require('react-router')
const Details = require('./Details')
/*const {shows} = require('../public/data')*/
const {store} = require('./Store')
const { Provider} = require('react-redux')

const App = React.createClass({
  /*assignShow(nextState,replace){
  	const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
  	
  	if(showArray.length<1){
  	return replace('/')
   }
   else{
   	Object.assign(nextState.params, showArray[0])
   	return nextState
   }
  },*/
  render() {
	return(
		<Provider store={store}>	
		  <Router history ={hashHistory}>
	 	    <Route path="/" component={Layout}>
	 		  <IndexRoute component={Landing} />
	 		  <Route path='/search' component={Search} />
	 		  <Route path='/details/:id' component={Details} />
	 		</Route>
	 	  </Router>
	 	</Provider> 
	)
  }
})
 
 
module.exports = App
