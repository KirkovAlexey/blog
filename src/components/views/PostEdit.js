import React, { PropTypes } from 'react';
import PostForm from './PostForm';

const PostEdit = ({ handleSubmit, pristine, submitting, reset }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      'h1',
      {},
      'Edit Post'
    ),
    React.createElement(
      PostForm,
      { handleSubmit, pristine, submitting, reset }
    )
  )
);

PostEdit.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.func,
  submitting: PropTypes.func,
  reset: PropTypes.func
};

export default PostEdit;
