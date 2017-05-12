import React, { DOM, PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Like from './elements/Like';
import MetaData from './elements/Meta';
import ButtonEditPost from './elements/ButtonEditPost';
import Link from 'components/elements/Link';

import moment from 'moment';

import { Divider, Grid } from 'semantic-ui-react';

const BlogItem = ({ element, handleLikeClick }) => (
  React.createElement(
    Grid,
    {},
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        { width: 3 },
        React.createElement(Image, element.image)
      ),
      React.createElement(
        Grid.Column,
        { width: 8 },
        React.createElement(
          'p',
          {},
          React.createElement(
            Link,
            { to: element.link },
            React.createElement(TextBox, element.description)
          )
        ),
        React.createElement(
          ButtonEditPost,
          { id: element.id }
        ),
        handleLikeClick && React.createElement(
          Like,
          {
            meta: element.meta,
            id: element.id,
            handleLikeClick
          }
        ),
        React.createElement('hr', {}),
        React.createElement(MetaData, element.meta)
      )
    ),
    React.createElement(Divider, { horizontal: true })
  )
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  description: PropTypes.objectOf(PropTypes.string),
  meta: PropTypes.shape(MetaData.propTypes),
  element: PropTypes.object,
  handleLikeClick: PropTypes.func
};

BlogItem.defaultProps = {
  image: {
    src: '/dist/images/default.jpg',
    width: 179,
    height: 100,
    alt: 'Here is empty',
    style: {
      padding: '5px',
      margin: '5px',
      border: '1px solid red'
    }
  },
  description: {
    text: 'Nothing else'
  },
  meta: {
    author: 'unknown autor',
    createdAt: moment().calendar(),
    updatedAt: moment().calendar(),
    count: 0
  }
};

export default BlogItem;
