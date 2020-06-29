import React, { Component } from 'react'
import { Provider } from './Context'

class HashRouter extends Component {
	constructor () {
		super()
		this.state = {
			location: {
				pathname: window.location.hash.slice(1) || '/'
			}
		}
	}

	componentDidMount () {
		window.location.hash = window.location.hash || '/'
		window.addEventListener('hashchange', (e) => {
			this.setState({
				location: {
					...this.state.location,
					pathname: window.location.hash.slice(1) || '/'
				}   
			})
		})
	}

	render () {
		const value = {
			location: this.state.location,
			history: {
				push (to) {
					window.location.hash = to
				}
			}
		}
		return (
			<Provider value={value}>
				{ this.props.children }
			</Provider>
		)
	}
}

export default HashRouter

