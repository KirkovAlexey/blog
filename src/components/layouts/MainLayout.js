import React, { PropTypes } from 'react';

import { Container, Grid } from 'semantic-ui-react';

import GoBackButton from 'components/elements/GoBackButton';
import ButtonNewPost from 'components/elements/ButtonNewPost';

import Logo from 'components/layouts/Logo';
import Footer from 'components/layouts/Footer';


const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(
      Logo,
      { }
    ),
    React.createElement(
      Grid,
      {},
      React.createElement(
        Grid.Row,
        {},
        React.createElement(
          Grid.Column,
          { width: 12 },
          React.createElement(GoBackButton),
          React.createElement(ButtonNewPost)
        )
      )
    ),
    children,
    React.createElement(Footer)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
