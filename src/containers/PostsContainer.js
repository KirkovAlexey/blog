import { connect } from 'react-redux';

import BlogList from 'components/widgets/blog/BlogList';

const stateToProps = (state) => ({
  elements: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

connect(stateToProps)(BlogList);
