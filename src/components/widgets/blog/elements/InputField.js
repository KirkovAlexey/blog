import React from 'react';

import { Input } from 'semantic-ui-react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLikeClick = bind(this.handleLikeClick, this);
  }

  handleLikeClick() {
    // return this.props.handleLikeClick(this.props.id);
  }

  render() {
    return React.createElement(
      Input,
      { name: 'q' }
    );
  }
}

export default InputField;
