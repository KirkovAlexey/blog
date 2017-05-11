import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import PostEdit from 'components/views/PostEdit';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.title.length < 5)
      throw new SubmissionError({ title: 'Длина заголовка не может быть меньше 5 символов' });
    else
      alert(JSON.stringify(values));
  });
};

export default connect(
  (state) => ({
    initialValues: {
      title: state.post.entry.description.text,
      createdAt: state.post.entry.meta.createdAt,
      author: state.post.entry.meta.author,
      id: state.post.entry.id
    }
  })
  // ,(dispath) => ({
  //   updatePost: flowRight(dispath, updatePost)
  // })
)(reduxForm({
  form: 'editPost',
  onSubmit: submit
})(PostEdit));
