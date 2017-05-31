import React, { DOM } from 'react';
import PropTypes from 'prop-types';

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
            element.description.text
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
  element: PropTypes.object,
  handleLikeClick: PropTypes.func
};

BlogItem.defaultProps = {
  element: {
    description: {
      text: PropTypes.string
    }
  }
};

export default BlogItem;
