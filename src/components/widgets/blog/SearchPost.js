import React, { PropTypes } from 'react';

import InputField from './elements/InputField';

import { Grid } from 'semantic-ui-react';


const SearchPost = ({ handleInputField }) => (
  React.createElement(
    Grid,
    { },
    React.createElement(
      Grid.Row,
      {},
      React.createElement(
        Grid.Column,
        { width: 12 },
        React.createElement(
          InputField,
          { placeholder: 'Search posts...', handleInputField }
        )
      )
    )
  )
);

SearchPost.propTypes = {
  handleInputField: PropTypes.func.isRequired
};

export default SearchPost;
