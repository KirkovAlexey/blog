import React from 'react';
import PostFormField from 'components/widgets/blog/elements/PostFormField';
import { Field } from 'redux-form';

const PostForm = ({ handleSubmit, pristine, submitting, reset }) => (
  React.createElement(
    'form',
    {
      className: 'ui form',
      onSubmit: handleSubmit
    },
    React.createElement(
      Field,
      {
        label: 'Title',
        component: PostFormField,
        type: 'text',
        name: 'title'
      }
    ),
    React.createElement(
      Field,
      {
        label: 'Created At',
        component: PostFormField,
        type: 'text',
        name: 'createdAt'
      }
    ),
    React.createElement(
      Field,
      {
        label: 'Author',
        component: PostFormField,
        type: 'text',
        name: 'author'
      }
    ),
    (!pristine && !submitting) && React.createElement(
      'button',
      { className: 'ui button', onClick: reset },
      'Clear'
    ),
    React.createElement(
      'input',
      {
        type: 'submit',
        className: 'ui button primary'
      }
    )
  )
);

export default PostForm;
