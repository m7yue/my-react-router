import React, { Component } from 'react'
import { Consumer } from '/Context'

const { pathToRegexp }= require('path-to-regexp')

class Route extends Component {
	render () {
		return (
			<Consumer>
			{
				state => {
					const { pathname } = state.location
					const { path, component: Component, exact = false } = this.props
					let keys = []
					const reg = pathToRegexp(path, keys, { end: exact })
					keys = keys.map(item => item.name)
					const result = pathname.match(reg)
					const [url, ...values] = result || []
					const props = {
						location: state.location,
						history: state.history,
						match: {
							params: keys.reduce((obj, current, index) => {
								obj[current] = values[index]
								return obj
							}, {})
						}
					}

					if (result) {
							return <Component {...props}/>
					}
					return null
				}
			}    
			</Consumer>
		)
	}
}

export default Route