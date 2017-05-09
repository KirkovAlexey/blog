import React from 'react';

import Helmet from 'react-helmet';

import BlogList from 'components/widgets/blog/BlogList';

const Index = ({ elements, handleInputField }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      BlogList,
      { elements, handleInputField }
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
  elements: BlogList.propTypes.elements,
  handleInputField: BlogList.propTypes.handleInputField
};

export default Index;
