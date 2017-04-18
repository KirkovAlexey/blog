import React, { DOM, PropTypes } from 'react';

import { Button, Icon } from 'semantic-ui-react';

const Like = ({ meta, handleLikeClick }) => (
  React.createElement(
    LikeItem,
    { meta, handleLikeClick }
  )
);

Like.propTypes = {
  meta: PropTypes.object,
  handleLikeClick: PropTypes.func
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
