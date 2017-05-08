import React, { PropTypes } from 'react';
import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/BlogItem';

const Post = ({ element }) => (
  React.createElement(
    Item.Group,
    {},
    element && React.createElement(BlogItem, { element })
  )
);

Post.propTypes = {
  element: PropTypes.object

};

export default Post;
