var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2

var MyTitle = React.createClass({
  render () {
  	var style= {color: this.props.color}
    return (
      <div>
        <h1 style= { style }>
        {this.props.title}
        </h1>
        <h2>This can be an image animation or whatever</h2>
        <h2>okay lets be unique</h2>
      </div>
    )
  }
})

module.exports = MyTitle
