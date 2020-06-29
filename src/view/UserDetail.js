import React, { Component } from 'react'

class UserAdd extends Component {
	render () {
		return (
			<div>
				UserDetail
				<div>
					User: { this.props.match.params.name }
				</div>
			</div>
		)
	}

	handleClick () {
		console.log('hello')
	}
}

export default UserAdd