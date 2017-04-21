import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import BlogItem from './BlogItem';

import { postsPath } from 'helpers/routes';

const BlogList = ({ elements, handleLikeClick }) => (
  React.createElement(
    'div',
    {},
    map(
      elements,
      (element) => (
        React.createElement(
          BlogItem,
          Object.assign(
            { key: element.id },
            { element: Object.assign(
                        element,
                        { link: postsPath(element.id) }
                       ) },
            { handleLikeClick }
          )
        )
      )
    )
  )
);

BlogList.propTypes = {
  elements: PropTypes.array,
  handleLikeClick: PropTypes.func
};

export default BlogList;
