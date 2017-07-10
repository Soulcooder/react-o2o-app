import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import App from '../containers';
import Home from '../containers/Home/index.js';
import User from '../containers/User/index.js';
import City from '../containers/City/index.js';
import Detail from '../containers/Detail/index.js';
import Search from '../containers/Search/index.js';

class RouterMap extends Component{
	render(){
		return(
			<Router>
				<Route path="/" component={(props) => (
					<App {...props}>
						<Switch>
							<Route path="/home" component={Home}></Route>
							<Route path="/user" component={User}></Route>
							<Route path="/city" component={City}></Route>
							<Route path="/detail" component={Detail}></Route>
							<Route path="/search" component={Search}></Route>
						</Switch>
					</App>
				)}>
				</Route>
			</Router>
		)
	}
}

export default RouterMap;