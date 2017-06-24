import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';

import CreatePost from '../../components/create_post';

import * as actions from '../actions/post_actions';
import getCreatePostState from '../selectors/create_post_state';

const mapStateToProps = (state, ownProps) => getCreatePostState(state);

const createForm = reduxForm({ form: 'newpost' });

const connectToStore = connect(mapStateToProps, actions);


export default compose(createForm, connectToStore)(CreatePost);
