import React, { Component } from 'react'
import { Link } from '../react-router-dom'

class UserList extends Component {
	render () {
		return (
			<div>
				UserList
				<ul>
					<li><Link to="/user/detail/hamling">hamling</Link></li>
					<li><Link to="/user/detail/lucile">lucile</Link></li>
					<li><Link to="/user/detail/michael">Michael</Link></li>
				</ul>
			</div>
		)
	}
}

export default UserList