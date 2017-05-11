import React from 'react';

import Link from 'components/elements/Link';

import { Segment, Header, Menu } from 'semantic-ui-react';

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
      ),
      React.createElement(
        Menu,
        { size: 'mini' },
        React.createElement(
          Menu.Item,
          {},
          React.createElement(
            Link,
            { to: '/contacts' },
            'Contacts'
          )
        )
      )
    )
  )
);

export default Logo;
