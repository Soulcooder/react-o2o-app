import React, {Component} from 'react';
import Head from '../../components/HomeHead/Head.js';
import Category from '../../components/Category/Category.js';

class Home extends Component{
	render(){
		return (
			<div>
				<Head />
				<Category />
			</div>
		)
	}
}

export default Home;