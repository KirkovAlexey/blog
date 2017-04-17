import React, { DOM, PropTypes } from 'react';

import TextBox from './TextBox';

import moment from 'moment';

const MetaData = (props) => (
  DOM.div(null,
    React.createElement(TextBox, { text: 'Author: ' }),
    `${props.author} | `,
    React.createElement(TextBox, { text: ' Created: '}),
    `${props.createdAt} | `,
    React.createElement(TextBox, { text: ' Updated: '}),
    props.updatedAt
  )
);

MetaData.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  count: React.PropTypes.number
};

MetaData.defaultProps = {
  author: 'Lost autor',
  createdAt: moment().calendar(),
  updatedAt: moment().calendar()
};

export default MetaData;
