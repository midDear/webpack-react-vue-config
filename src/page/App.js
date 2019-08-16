import React from 'react'
import {IntlProvider} from 'react-intl'
import messages from '../locals/index'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../theme/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './home/index'
import Page1 from './page1/index'
import Page2 from './page2/index'
import Todo from './todo/index'
import Counter from './counter/index'
import ErrorPage from './error/index'

function App({lang}) {
	return (
		<IntlProvider locale='en' messages={messages[lang]}>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route path='/' exact component={Home}/>
						<Route path='/page1' component={Page1}/>
						<Route path='/page2' component={Page2}/>
						<Route path='/todo' component={Todo}/>
						<Route path='/counter' component={Counter}/>
						<Route path='*' component={ErrorPage}/>
					</Switch>
				</Router>
			</ThemeProvider>
		</IntlProvider>
	)
}

export default connect(state => state.app)(App)
