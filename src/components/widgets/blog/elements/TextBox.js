import React, { PropTypes } from 'react';

const TextBox = ({style, text}) => (
  React.createElement(
    'span',
    { style},
    text
  )
);

TextBox.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
};

TextBox.defaultProps = {
  text: 'Lost text field ',
  style: {
    fontWeight: 'bold'
  }
};

export default TextBox;
