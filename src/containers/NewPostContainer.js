import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import PostNew from 'components/views/PostNew';
import sleep from 'helpers/sleep';

const submit = (values) => {
  return sleep(1000).then(() => {
    if (values.title.length < 5)
      throw new SubmissionError({ title: 'Длина заголовка не может быть меньше 5 символов' });
    else
      alert(JSON.stringify(values));
  });
};

export default connect(

)(reduxForm({
  form: 'newPost',
  onSubmit: submit
})(PostNew));
