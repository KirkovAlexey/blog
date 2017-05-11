import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import BlogItem from './BlogItem';
import PieChart from './PieChart';
import SearchPost from './SearchPost';

const BlogList = ({ elements, handleInputField }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      SearchPost,
      { handleInputField }
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
              { element }
            )
          )
        )
      )
    )
    , React.createElement(
      PieChart,
      { columns: map(
        elements, (element) => ([element.description.text, element.meta.count])
      ) }
    )
  )
);

BlogList.propTypes = {
  elements: PropTypes.array,
  handleInputField: PropTypes.func
};

export default BlogList;
