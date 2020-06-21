import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';

const routing = (
	<div>
		<Router>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/user">User</Link></li>
				<li><Link to="/visit">Visit</Link></li>
			</ul>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/user" component={User} />
				<Route path="/visit" component={Visit} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</div>
);

ReactDOM.render(
	routing,
	document.getElementById('root')
);
