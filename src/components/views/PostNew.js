import React from 'react';
import PostForm from './PostForm';

const PostNew = ({ handleSubmit, pristine, submitting, reset }) => (
  React.createElement(
    'div',
    {},
    React.createElement(
      'h1',
      {},
      'New Post'
    ),
    React.createElement(
      PostForm,
      { handleSubmit, pristine, submitting, reset }
    )
  )
);

export default PostNew;
