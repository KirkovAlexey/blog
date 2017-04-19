import React, { PropTypes } from 'react';
import request from 'superagent';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/BlogItem';

import { postsPath } from 'helpers/routes';
import { SERVER_API_URL } from 'constants/ServerApiUrl';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { element: false };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const { id } = this.props.params;
    request.get(
      `${SERVER_API_URL}${postsPath(id)}`,
      {},
      (err, res) => this.setState({ element: res.body })
    );
  }

  render() {
    const { element } = this.state;
    return  React.createElement(
      Item.Group,
      {},
      React.createElement(BlogItem, { element })
    );
  }
}

Post.propTypes = {
  params: PropTypes.object

};

export default Post;
