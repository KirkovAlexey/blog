import React, { PropTypes } from 'react';

import { Input } from 'semantic-ui-react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = props.placeholder;
    this.handleInputField = props.handleInputField;
  }

  render() {
    const placeholder = this.placeholder;
    const handleInputField = this.handleInputField;
    return React.createElement(
      Input,
      { name: 'q', placeholder, onKeyDown: handleInputField }
    );
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  handleInputField: PropTypes.func.isRequired,
};

export default InputField;
