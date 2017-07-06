import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import App from './components/app';
import Signin from './components/scenes/authentication/signin';
import Signout from './components/scenes/authentication/signout';
import Signup from './components/scenes/authentication/signup';
import * as type from './redux/constants/actionTypes';
import BlogPostsContainer from './redux/containers/BlogPostsContainer';
import CreatePostContainer from './redux/containers/CreatePostContainer';
import EditPostContainer from './redux/containers/EditPostContainer';
import requireAuth from './redux/containers/hoc/require_authentication';
import ProfileContainer from './redux/containers/ProfileContainer';
import SingleBlogPostContainer from './redux/containers/SingleBlogPostContainer';
import UserPostsContainer from './redux/containers/UserPostsContainer';
import configureStore from './redux/store';
import './style/index.css';
import './style/v4/dist/toolkit.css';
import './style/v4/docs/assets/css/application.css';

export const history = createBrowserHistory();
const store = configureStore();

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
	// we need to update an application
	store.dispatch({ type: type.AUTH_USER_COMPLETED });
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
				<Route path="/createpost" component={requireAuth(CreatePostContainer)}/>
				<Route path="/posts/:id" component={SingleBlogPostContainer}/>
				<Route path="/edit/:id" component={requireAuth(EditPostContainer)}/>
			</switch>
		</Router>
	</Provider>, document.getElementById('root'));
