import React, { PropTypes } from 'react';

import classNames from 'classnames';

const PostFormField = ({ input, label, type, meta: { touched, error } }) => (
  React.createElement(
    'div',
    { className: 'ui field' },
    React.createElement(
      'label',
      {},
      label
    ),
    React.createElement(
      'input',
      {
        ...input,
        type,
        className: classNames('ui input', { error })
      }
    ),
    touched && (error && (
      React.createElement(
        'div',
        { className: 'ui red label' },
        error
      )
    ))
  )
);

PostFormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default PostFormField;
