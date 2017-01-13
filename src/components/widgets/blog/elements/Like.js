import React, { DOM, PropTypes } from 'react';

import { Button, Icon } from 'semantic-ui-react';

class Like extends React.Component {
  render() {
    const { count, handleLikeClick } = this.props;
    return React.createElement(
      LikeItem, { count, handleLikeClick }
    );
  }
}

Like.propTypes = {
  count: PropTypes.number
};

const LikeItem = (props) => (
  DOM.div(
    null,
    `Likes: ${props.count} `,
    React.createElement(
      Button, {
        onClick: props.handleLikeClick,
        color: 'blue',
        content: React.createElement(Icon, { name: 'like outline' })
      }
    )
  )
);

export default Like;
