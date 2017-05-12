import React, { PropTypes } from 'react';

import { assign, set } from 'lodash/object';

import classNames from 'classnames';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearError = this.clearError.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', fieldName],
        e.target.value
      ));
    };
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
      React.createElement(
        'div',
        {},
        React.createElement(
          'h1',
          {},
          'Contacts'
        ),
        React.createElement(
          'form',
          { className: 'ui form', onSubmit: this.onSubmit },
          React.createElement(
            Text,
            {
              name: 'fullName',
              label: 'Full name',
              value: fullName,
              onChange: this.handleChange('fullName')
            }
          ),
          React.createElement(
            Text,
            {
              name: 'email',
              label: 'Email',
              value: email,
              error: this.state.form.errors.email,
              onChange: this.handleChange('email')
            }
          ),
          React.createElement(
            TextArea,
            {
              name: 'message',
              label: 'Message',
              value: message,
              onChange: this.handleChange('message')
            }
          ),
          React.createElement(
            'input',
            {
              value: 'Sumbit',
              type: 'submit',
              className: 'ui button primary'
            }
          )
        )
      )
    );
  }
}

export default Contacts;

const Text = ({ name, value, onChange, label, error }) => (
  React.createElement(
    'div',
    { className: classNames('ui field', { error }) },
    React.createElement(
      'label',
      { htmlFor: name },
      label
    ),
    React.createElement(
      'input',
      {
        name,
        id: name,
        className: 'ui input',
        type: 'text',
        value,
        onChange
      }
    )
  )
);

Text.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.boolean
};

const TextArea = ({ name, value, onChange, label }) => (
  React.createElement(
    'div',
    { className: 'ui field' },
    React.createElement(
      'label',
      { htmlFor: name },
      label
    ),
    React.createElement(
      'textarea',
      {
        name,
        id: name,
        className: 'ui input',
        value,
        onChange
      }
    )
  )
);

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
