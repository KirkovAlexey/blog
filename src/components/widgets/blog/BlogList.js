import React, { DOM } from 'react';

import { map } from 'lodash/collection';

import BlogItem from './BlogItem';

const BlogList = ({ elements, handleLikeClick }) => (
  DOM.div(
    null,
    map(
      elements,
      (element) => (
        React.createElement(
          BlogItem,
          Object.assign(
            { key: element.id },
            element,
            { handleLikeClick: () => handleLikeClick(element.id) }
          )
        )
      )
    )
  )
);

export default BlogList;
