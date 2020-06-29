import React, { Component } from 'react'

class UserAdd extends Component {
	render () {
		return (
			<div>
				UserAdd
				<br/>
				<button onClick={ this.handleClick.bind(this) }>新增</button>
			</div>
		)
	}

	handleClick () {
			this.props.history.push('/user/list')
	}
}

export default UserAdd