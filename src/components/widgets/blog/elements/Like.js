import React, { DOM, PropTypes } from 'react';

import { Button, Icon } from 'semantic-ui-react';

const Like = ({ count, handleLikeClick }) => (
  React.createElement(
    LikeItem,
    { count,handleLikeClick }
  )
);

Like.propTypes = {
  count: PropTypes.number,
  handleLikeClick: PropTypes.func
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
