import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'
import Home from './view/Home'
import User from './view/User'
import About from './view/About'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	render () {
		return (
			<div>
				<Router>
					<div className="navbar navbar-inverse">
						<div className="container-fluid">
							<div className="navbar-header">
								<div className="navbar-brand">router 原理</div>
							</div>
							<div className="collapse navbar-collapse">
								<ul className="nav navbar-nav">
									<li><Link to="/home">首页</Link></li>
									<li><Link to="/user">用户</Link></li>
									<li><Link to="/about">关于</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container">
						<Switch>
							<Route path='/home' component={ Home }></Route>
							<Route path='/user' component={ User }></Route>
							<Route path='/about' exact={true} component={ About }></Route>
							<Redirect to="/home"/>
						</Switch>
					</div> 
				</Router>
			</div>
		)
	}
}

export default App