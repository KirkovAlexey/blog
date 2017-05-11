import React, { PropTypes } from 'react';
import Link from 'components/elements/Link';
import { postsEditPath } from 'helpers/routes';

const ButtonEditPost = ({ id }) => (
  React.createElement(
    Link,
    { to: postsEditPath(id), className: 'mini ui button primary' },
    'Edit Post'
  )
);

ButtonEditPost.propTypes = {
  id: PropTypes.number
};

export default ButtonEditPost;
