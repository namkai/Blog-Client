import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';

import CreatePost from '../../components/scenes/authoring/create_post';

import { createEntity } from '../thunks/crud/create';
import * as actions from '../actions/post_actions';
import getCreatePostState from '../selectors/create_post_state';

const mapStateToProps = (state, ownProps) => getCreatePostState(state);

const createForm = reduxForm({ form: 'newpost' });

const connectToStore = connect(mapStateToProps, {...actions, createEntity });


export default compose(createForm, connectToStore)(CreatePost);
