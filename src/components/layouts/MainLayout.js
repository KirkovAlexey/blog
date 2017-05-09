import React, { PropTypes } from 'react';

import { Container } from 'semantic-ui-react';

import GoBackButton from 'components/elements/GoBackButton';

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
    React.createElement(GoBackButton),
    children,
    React.createElement(Footer)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
