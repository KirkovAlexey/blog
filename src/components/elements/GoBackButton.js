import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

import { browserHistory as history } from 'react-router';

const GoBackButton = () => (
    React.createElement(
      Grid,
      {},
      React.createElement(
        Grid.Row,
        {},
        React.createElement(
          Grid.Column,
          { width: 12 },
          React.createElement(
            Button,
            { onClick: () => history.goBack() },
            'Back'
          )
        )
      )
    )
);

export default GoBackButton;
