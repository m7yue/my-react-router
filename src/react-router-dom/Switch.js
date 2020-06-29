import React, { Component } from 'react'
import { Consumer } from '/Context'
const { pathToRegexp }= require('path-to-regexp')

class Switch extends Component {
	render () {
		return (
			<Consumer>
			{
				state => {
					const { pathname } = state.location
					const { children } = this.props
					for (let i = 0; i < children.length; i++) {
						const child = children[i]
						const path = child.props.path || ''
						const reg = pathToRegexp(path, [], { end: false})
						if (reg.test(pathname)) {
							return child
						}
					}
					return null
				}
			}    
			</Consumer>
		)
	}
}

export default Switch