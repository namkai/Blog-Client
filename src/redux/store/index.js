import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = () => createStore(rootReducer, applyMiddleware(reduxThunk));

export default configureStore;
