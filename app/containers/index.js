import React, {Component} from 'react';
import localStore from '../util/localstore.js';
import {CITYNAME} from '../config/localStoreKey.js'

class App extends Component{
	constructor(){
		super();
		this.state = {
			initDone: false
		}
	}

	componentDidMount(){
		let cityName = localStore.getItem(CITYNAME);
		if(cityName == null){
			cityName = "北京";
		}
		console.log(cityName);

		this.setState({
			initDone: true
		})
	}

	render(){
		return (
			<div>
				{ this.props.children }
			</div>
		)
	}
}

export default App;