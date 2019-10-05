 const redux = require('redux')
 const reactRedux = require('react-redux')
 const {shows} = require('../public/data')
 const initialState = {
 	searchTerm: '',
 	shows:shows
 }

 const SET_SEARCH_TERM = 'setSearchTerm'
 const rootReducer = (state=initialState, action) =>{
 	switch(action.type){
 		case SET_SEARCH_TERM: 
 		return reduceSearchTerm(state,action)
 		default:
 		return state
 	}
 }

 const reduceSearchTerm = (state,action) =>{

 	const newState = {}
 	Object.assign(newState,state,{searchTerm:action.value,shows:shows})
 	return newState
 }

 const store = redux.createStore(rootReducer,initialState,redux.compose(
 	typeof window == 'object' && typeof window.devToolsExtension!=='undefined'
 	? window.devToolsExtension() : (f)=> f
 	))

 const mapStateToProps = (state) => ({searchTerm: state.searchTerm,shows:state.shows})
 const mapDispatchToProps = (dispatch) =>{
 	return{
 		setSearchTerm(searchTerm){
 			dispatch({type:SET_SEARCH_TERM, value:searchTerm })
 		}
 	}
 }
 const connector =  reactRedux.connect(mapStateToProps,mapDispatchToProps)

 module.exports  = {connector, store,rootReducer}

