import React, { DOM, PropTypes } from 'react';
import { bind } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.handleLikeClick = bind(this.handleLikeClick, this);
  }

  handleLikeClick() {
    return this.props.handleLikeClick(this.props.id);
  }

  render() {
    return React.createElement(
      LikeItem,
      { meta: this.props.meta, handleLikeClick: this.handleLikeClick }
    );
  }
}

Like.propTypes = {
  meta: PropTypes.object,
  handleLikeClick: PropTypes.func,
  id: PropTypes.number
};

const LikeItem = ({ meta, handleLikeClick }) => (
  DOM.div(
    null,
    `Likes: ${meta.count} `,
    React.createElement(
      Button, {
        onClick: handleLikeClick,
        color: 'blue',
        content: React.createElement(Icon, { name: 'like outline' })
      }
    )
  )
);

LikeItem.defaultProps = {
  meta: {
    author: 'unknown autor',
    createdAt: '2017-01-01',
    updatedAt: '2017-01-01',
    count: 0
  }
};

export default Like;
