const React = require('react')
const { hashHistory } = require('react-router')
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
const { connector } = require('./Store')


class Landing extends React.Component{
	constructor(props){
		super(props)

		this.handleSearchtermEvent = this.handleSearchtermEvent.bind(this)
		this.gotoSearch = this.gotoSearch.bind(this)
	}
	handleSearchtermEvent(event){
		this.props.setSearchTerm(event.target.value)
		
	}
	gotoSearch(event){
		hashHistory.push('search')
		event.preventDefault()
	}
	render(){
		return (
 	   <div className='home-info'>
 	     <h1 className='title'>Wild Reggae</h1>
 	     <form onSubmit={this.gotoSearch}>
 	       <input value={this.props.searchTerm} onChange={this.handleSearchtermEvent} className='search' type='text' placeholder='Search' />
 	       </form>
 	      <Link to='/search' className="browse-all">or Browse By Categories</Link>	
 	   </div>
	)	
	}
}

const {func , string} = React.PropTypes

Landing.propTypes = {
	searchTerm: string,
	setSearchTerm :func
}
module.exports = connector(Landing)