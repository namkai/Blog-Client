import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import EditPost from '../../components/scenes/Authoring/edit_post';
import { reduxForm } from 'redux-form';

import { history } from '../../index';
import * as actions from '../actions/post_actions';
import getFilteredPostState from '../selectors/selected_post';

const mapStateToProps = (state, ownProps) => ({
	posts: getFilteredPostState(state),
	user: state.user,
});

const createForm = reduxForm({ form: 'editpost' });

const connectToStore = connect(mapStateToProps, actions);

const onWillMount = lifecycle({
	componentWillMount() {
		if (this.props.posts.length === 0) {
			history.push('/');
		}
		if (this.props.posts.length > 0) {
			console.log(this.props);
			this.props.initialize({ ...this.props.posts[0] });
		}
	},
});

export default compose(createForm, connectToStore, onWillMount)(EditPost);
