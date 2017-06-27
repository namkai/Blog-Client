import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import EditPost from '../../components/scenes/Authoring/edit_post';
import { updateEntity } from '../thunks/crud/update';
import { history } from '../../index';
import * as actions from '../actions/post_actions';
import singlePostSelector from '../selectors/single_post_selector';

const mapStateToProps = (state, ownProps) => ({
	post: singlePostSelector(state),
	user: state.user,
});

const createForm = reduxForm({ form: 'editpost' });

const connectToStore = connect(mapStateToProps, {...actions, updateEntity });

const onWillMount = lifecycle({
	componentWillMount() {
		if (this.props.post.length === 0) {
			history.push('/');
		}
		this.props.initialize(this.props.post);
	},
});

export default compose(createForm, connectToStore, onWillMount)(EditPost);
