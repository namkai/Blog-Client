import { compose } from 'recompose';
import { connect } from 'react-redux';

import { updateQuery } from '../actions/query_actions';
import SearchBar from '../../components/search_bar';
import getSearchBarState from '../selectors/search_bar_state';

const mapStateToProps = state => getSearchBarState(state);

const connectToStore = connect(mapStateToProps, { updateQuery });


export default compose(connectToStore)(SearchBar);
