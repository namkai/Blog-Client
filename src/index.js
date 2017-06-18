import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import Signin from './components/auth/signin';
import configureStore from './store';
import './style/index.css';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={App}/>
				<Route path="/signin" component={Signin}/>
			</div>
		</Router>
	</Provider>
	, document.getElementById('root'));
