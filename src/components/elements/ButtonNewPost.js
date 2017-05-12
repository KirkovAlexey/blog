import React from 'react';
import Link from 'components/elements/Link';
import { postsNewPath } from 'helpers/routes';

const ButtonNewPost = () => (
  React.createElement(
    Link,
    { to: postsNewPath(), className: 'ui primary button' },
    'New Post'
  )
);

export default ButtonNewPost;
