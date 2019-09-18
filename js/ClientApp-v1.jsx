var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.jsx')

//var div = React.DOM.div
//var MyTitleFact = React.createFactory(MyTitle)
//var ce = React.createElement

var MyFirstComponent = () =>(
/*return (
  MyTitleFact({ title: 'This is better good till now', color: 'blue' }),
  React.createElement(MyTitle, { title: 'Use Props everywhere' }),
  ce(MyTitle, { title: 'props are the best' })
*/
  <div>  
    <MyTitle title="This is JSX" color="red" />
    <MyTitle title="Lol no errors" color="green" />
    <MyTitle title="OMG this is Insanity" color="orange" />
    
  </div>
)

  
ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
