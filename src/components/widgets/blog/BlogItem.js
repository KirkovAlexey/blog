import React, { DOM, PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Like from './elements/Like';
import MetaData from './elements/Meta';
import Link from 'components/elements/Link';

import moment from 'moment';

import { Container, Divider } from 'semantic-ui-react';

const BlogItem = ({ element, handleLikeClick }) => (
  DOM.div(
    null,
    React.createElement(Container, {},
      React.createElement(Image, element.image)
      , React.createElement(
        'p',
        {},
        React.createElement(
          Link,
          { to: element.link },
          React.createElement(TextBox, element.description)
        )
      )
      , handleLikeClick && React.createElement(
        Like,
        {
          meta: element.meta,
          id: element.id,
          handleLikeClick
        }
      )
      , React.createElement('hr', {})
      , React.createElement(MetaData, element.meta)
      , React.createElement(Divider, { horizontal: true })
    )
  )
);

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  description: PropTypes.objectOf(PropTypes.string),
  meta: PropTypes.shape(MetaData.propTypes)
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
