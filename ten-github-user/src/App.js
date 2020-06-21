import React, { useState } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

// firebase
import firebase from "firebase"
import "firebase/auth"

// Toast
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

// Router 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import UserContext from './context/UserContext';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp"

// Components

const App = () => {

	const [user, setUser] = useState(null);

	return (
		<Router>
			<UserContext.Provider value={{ user, setUser }}>
				<ToastContainer />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="*" component={PageNotFound} />
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
