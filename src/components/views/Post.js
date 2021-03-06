import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/BlogItem';

const Post = ({ element }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      Item.Group,
      {},
      element && React.createElement(BlogItem, { element })
    ),
    element && React.createElement(
      Helmet,
      {
        title: element.description.text,
        meta: [
          { name: 'description', content: 'Вывод блога' },
          { name: 'keywords', content: 'react, blog, main page' }
        ]
      }
    )
  )
);

Post.propTypes = {
  element: PropTypes.object
};

export default Post;
