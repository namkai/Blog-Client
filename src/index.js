import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import * as type from './constants/actionTypes';
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import BlogPosts from './components/blog_posts';
import CreatePost from './components/create_post';
import requireAuth from './components/hoc/require_authentication';
import Profile from './components/profile';
import configureStore from './store';
import './style/index.css';

export const history = createBrowserHistory();
const store = configureStore();

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
	// we need to update an application
	store.dispatch({ type: type.AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={App}/>
				<Route exact path="/" component={BlogPosts}/>
				<Route path="/signin" component={Signin}/>
				<Route path="/signout" component={Signout}/>
				<Route path="/signup" component={Signup}/>
				<Route path="/profile" component={requireAuth(Profile)}/>
				<Route path="/createpost" component={requireAuth(CreatePost)}/>
			</div>
		</Router>
	</Provider>
	, document.getElementById('root'));
