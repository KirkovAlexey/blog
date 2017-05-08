import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import BlogItem from './BlogItem';
import PieChart from './PieChart';
import SearchPost from './SearchPost';

const BlogList = ({ elements, handleLikeClick }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      SearchPost,
      {}
    ),
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
              { element },
              { handleLikeClick }
            )
          )
        )
      )
    ),
    React.createElement(
      PieChart,
      { columns: map(
        elements, (element) => ([element.description.text, element.meta.count])
      ) }
    )
  )
);

BlogList.propTypes = {
  elements: PropTypes.array,
  handleLikeClick: PropTypes.func
};

export default BlogList;
