import React, { DOM, PropTypes } from 'react';

import BlogList from 'components/widgets/blog/BlogList';
import BlogItem from 'components/widgets/blog/BlogItem';
import PieChart from 'components/widgets/blog/PieChart';

import { elements as staticElements } from 'constants/static/elements';

import _ from 'lodash';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { elements: staticElements };
    this.handleLikeClick = _.bind(this.handleLikeClick, this);
  }

  handleLikeClick(elementId) {
    const el = _.find(this.state.elements, (o) => o.id == elementId);
    if (isNaN(el.meta.count)) {
      el.meta.count = BlogItem.defaultProps.meta.count + 1;
    } else {
      el.meta.count += 1;
    }
    this.setState({ elements: this.state.elements });
  }

  render() {
    const { elements } = this.state;
    const columns = _.map(elements, (e) => [e.description.text, e.meta.count]);
    return (
      DOM.div(
        null,
        React.createElement(
          BlogList, { elements, handleLikeClick: this.handleLikeClick }
        )
        , React.createElement(
          PieChart, { columns }
        )
      )
    );
  }
}

BlogItem.propTypes = {
  image: PropTypes.shape(Image.propTypes),
  description: PropTypes.objectOf(PropTypes.string)
};

export default BlogPage;
