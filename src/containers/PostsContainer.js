import { connect } from 'react-redux';

import BlogList from 'components/widgets/blog/BlogList';

import { map } from 'lodash/collection';

import { postsPath } from 'helpers/routes';

const stateToProps = (state) => ({
  elements: map(state.posts.entries, (element) => (
    Object.assign(element, { link: postsPath(element.id) }))),
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogList);
