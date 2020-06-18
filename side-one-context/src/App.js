import React, { Fragment } from "react";
import Context from "./Context"
import Provider from "./Provider"

const Agents = () => {
	return (
		<AgentOne />
	)
}

const AgentOne = () => {
	return (
		<AgentTwo />
	)
}

const AgentTwo = () => {
	return (
		<Context.Consumer>
			{context => (
				<Fragment>
					<h2>{context.data.mname}</h2>
					<h2>{context.data.isAccepted}</h2>
					<button onClick={context.acceptTheMission} >CLick to accept</button>
				</Fragment>
			)}
		</Context.Consumer>
	)
}

const App = () => {
	return (
		<div>
			<h2>Hello World</h2>
			<Provider>
				<Agents />
			</Provider>
		</div>
	)
}

export default App