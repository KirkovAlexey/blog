import React from 'react';
import { Button } from 'semantic-ui-react';

import { browserHistory as history } from 'react-router';

const GoBackButton = () => (
    React.createElement(
      Button,
      { onClick: () => history.goBack() },
      'Back'
    )
);

export default GoBackButton;
