import React, { DOM, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type: 'pie',
        columns: this.props.columns
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load(nextProps);
  }

  render() {
    return (
      DOM.div({ ref: 'chart'})
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.object
};

export default PieChart;
