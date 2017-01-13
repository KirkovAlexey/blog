import React, { DOM, PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Like from './elements/Like';
import MetaData from './elements/Meta';

import moment from 'moment';

import { Container, Divider } from 'semantic-ui-react';

const BlogItem = (props) => (
  DOM.div(
    null,
    React.createElement(Container, {},
      React.createElement(Image, props.image)
      , React.createElement(
        'p',
        {},
        React.createElement(TextBox, props.description)
      )
      , React.createElement(
        Like,
        {
          count: props.meta.count,
          handleLikeClick: props.handleLikeClick
        }
      )
      , DOM.hr(null)
      , React.createElement(MetaData, props.meta)
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
    src: 'dist/images/world.png',
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
