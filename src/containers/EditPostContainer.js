import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import PostEdit from 'components/views/PostEdit';
import sleep from 'helpers/sleep';

import { get } from 'lodash/object';

const submit = (values) => {
  return sleep(0).then(() => {
    if (values.title.length < 5)
      throw new SubmissionError({ title: 'Длина заголовка не может быть меньше 5 символов' });
    else
      alert(JSON.stringify(values));
  });
};

export default connect(
  (state) => ({
    initialValues: {
      title: get(state, 'post.entry.description.text', ''),
      createdAt: get(state, 'post.entry.meta.createdAt', ''),
      author: get(state, 'post.entry.meta.author', '')
    }
  })
)(reduxForm({
  form: 'editPost',
  onSubmit: submit,
  enableReinitialize: true
})(PostEdit));
