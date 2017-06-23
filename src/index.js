import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import './style/v4/dist/toolkit.css';
import './style/v4/docs/assets/css/application.css';
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import CreatePost from './components/create_post';
import EditPost from './components/edit_post';
import requireAuth from './redux/hoc/require_authentication';
import BlogPostsContainer from './redux/containers/BlogPostsContainer';
import ProfileContainer from './redux/containers/ProfileContainer';
import UserPostsContainer from './redux/containers/UserPostsContainer';
import EditPostContainer from './redux/containers/EditPostContainer';
import * as type from './constants/actionTypes';
import configureStore from './redux/store';
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
			<switch>
				<Route path="/" component={App}/>
				<Route exact path="/" component={BlogPostsContainer}/>
				<Route path="/signin" component={Signin}/>
				<Route path="/signout" component={Signout}/>
				<Route path="/signup" component={Signup}/>
				<Route path="/profile" component={requireAuth(ProfileContainer)}/>
				<Route path="/profile/posts" component={requireAuth(UserPostsContainer)}/>
				<Route path="/createpost" component={requireAuth(CreatePost)}/>
				<Route path="/edit" component={requireAuth(EditPostContainer)}/>
			</switch>
		</Router>
	</Provider>
	, document.getElementById('root'));
