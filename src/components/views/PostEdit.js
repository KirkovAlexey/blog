import React from 'react';
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

export default PostEdit;
