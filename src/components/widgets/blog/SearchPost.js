import React, { DOM, PropTypes } from 'react';

import InputField from './elements/InputField';

import { Grid } from 'semantic-ui-react';


const SearchPost = () => (
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
          {}
        )
      )
    )
  )
);

export default SearchPost;
