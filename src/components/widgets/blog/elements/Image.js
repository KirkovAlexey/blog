import React, { DOM, PropTypes } from 'react';

const Image = (props) => (
  DOM.img(props)
);

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  style: React.PropTypes.objectOf(React.PropTypes.string)
};

Image.defaultProps = {
  src: '/dist/images/default.jpg',
  width: 160,
  height: 120,
  alt: 'Here is empty',
  style: {
    padding: '5px',
    margin: '5px',
    border: '1px solid red'
  }
};

export default Image;
