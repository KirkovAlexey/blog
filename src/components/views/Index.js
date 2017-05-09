import React from 'react';

import Helmet from 'react-helmet';

import BlogList from 'components/widgets/blog/BlogList';

const Index = ({ elements }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      BlogList,
      { elements }
    ),
    React.createElement(
      Helmet,
      {
        title: 'Список постов'
      }
    )
  )
);

Index.propTypes = {
  elements: BlogList.propTypes.elements
};

export default Index;
