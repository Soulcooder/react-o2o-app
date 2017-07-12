import React, {Component} from 'react';
import "./style.css"

class Head extends Component{
	render(){
		return (
			<div className="head">
				<div className="head-address">
					深圳
				</div>
				<div className="head-search">
					<input />
				</div>
				<div className="head-user">
					用户中心
				</div>
			</div>
		)
	}
}
export default Head;