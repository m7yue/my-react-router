import React, { Component } from 'react'
import { Route, Link } from '../react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

class User extends Component {
	render () {
		return (
			<div className="user" style={{ overflow: 'hidden'}}>
				<h3>User</h3>
				<div style={{ float: 'left'}}>
					<div><Link to="/user/add">UserAdd</Link></div>
					<div><Link to="/user/list">UserList</Link></div>
				</div>
				<div style={{ paddingLeft: '200px'}}>
					<Route path="/user/add" component={ UserAdd }></Route>
					<Route path="/user/list" component={ UserList }></Route>
					<Route path="/user/detail/:name" component={ UserDetail }></Route>
				</div>
			</div>
		)
	}
}

export default User