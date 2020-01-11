import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import Header from './header';

import HormPage from './pages/home'
import errorPage from './pages/error'
import formPage from './pages/form'

import { ApplicationContextProvider } from './application-context'


function App() {
	return (
		<ApplicationContextProvider font={40}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={HormPage}/>
					<Route path="/form" component={formPage}/>
					<Route component={errorPage}/>
				</Switch>
			</Router>
		</ApplicationContextProvider>
	)
}

export default App;
