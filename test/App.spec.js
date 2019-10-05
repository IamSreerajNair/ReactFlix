/* eslint-env mocha */

//const chai =require('chai')
//const expect = chai.expect
const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const {shows} = require('../public/data')
const { shallow,mount } = require('enzyme')
const {store, rootReducer} = require('../js/Store')
xdescribe('<Search />',()=> {
	it('should render the brand', ()=>{
		const wrapper = shallow(<Search />)
		expect(wrapper.contains(<h1 className='brand'>WILD</h1>)).to.be.true
	})
	it('should render all shows which are present in data json', ()=>{
		const wrapper = shallow(<Search />)
		expect(wrapper.find(ShowCard).length).to.equal(shows.length)
	})
	it('should filter correctly',()=>{
		const wrapper= mount(<Search />)
		const input = wrapper.find('.search-input')
		input.node.value = 'house'
		input.simulate('change')
		expect(wrapper.state('searchTerm')).to.equal('house')
		expect(wrapper.find('.show-card').length).to.equal(1)
	})
})

describe('Store',()=>{
it('should bootstrap',()=>{
	const state = rootReducer(undefined,{type:'@@redux/INIT'})
	expect(state).to.deep.equal({searchTerm:''})
})
it('should set search Term action',()=>{
	const state = rootReducer({searchTerm:'my test string'},{type:'setSearchTerm',value:'correct string'})
	expect(state).to.deep.equal({searchTerm:'correct string'})
})
})