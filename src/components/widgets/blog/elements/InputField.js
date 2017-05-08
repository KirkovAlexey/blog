import React, { PropTypes } from 'react';

import { Input } from 'semantic-ui-react';

import { bind } from 'lodash';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = props.placeholder;
    this.processOnKeyDown = bind(this.processOnKeyDown, this);
  }

  processOnKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const textSeacrh = event.currentTarget.value;
      let path;
      if (textSeacrh)
        path = `/result?q=${textSeacrh}`;
      else
        path = '/';
      return this.props.handleInputField(path);
    }
  }

  render() {
    const placeholder = this.placeholder;
    return React.createElement(
      Input,
      { name: 'q', placeholder, onKeyDown: this.processOnKeyDown }
    );
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  handleInputField: PropTypes.func.isRequired,
};

export default InputField;
