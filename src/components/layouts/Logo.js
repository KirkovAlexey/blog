import React from 'react';

import Link from 'components/elements/Link';

import { Segment, Header } from 'semantic-ui-react';

const Logo = () => (
  React.createElement(
    Segment,
    {},
    React.createElement(
      Header,
      {},
      React.createElement(
        Link,
        { to: '/' },
        'Thinknetica Blog'
      )
    )
  )
);

export default Logo;
