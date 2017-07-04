import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import EditPost from '../../components/scenes/Authoring/edit_post';
import { updateEntity } from '../thunks/crud/update';
import { history } from '../../index';
import * as actions from '../actions/post_actions';
import singlePostSelector from '../selectors/single_post_selector';

const mapStateToProps = (state, ownProps) => ({
	post: singlePostSelector(state, ownProps),
	user: state.user,
});

const createForm = reduxForm({ form: 'editpost' });

const connectToStore = connect(mapStateToProps, {...actions, updateEntity });

const onWillMount = lifecycle({
	componentWillMount() {
		console.log(this.props, `i'm hte props`)
		if (this.props.post  === undefined) {
			history.push('/');
		}
		this.props.initialize(this.props.post);
	},
});

export default compose(createForm, connectToStore, onWillMount)(EditPost);
