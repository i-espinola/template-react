import React from 'react'

// Tools
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// COMPONENTS VIEWS IMPORTS
import Home from './views/home'

const Routes = props => (
	<Switch>
		<Route
			exact
			path="/home"
			render={() => <Home data={props.data} dataFlow={props.dataFlow} />}
		/>
		<Redirect from="*" to="/home" />
	</Switch>
)

export default Routes

Routes.propTypes = {
	dataFlow: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
}
