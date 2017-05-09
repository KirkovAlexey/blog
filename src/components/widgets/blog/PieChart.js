import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Grid } from 'semantic-ui-react';

const c3 = __CLIENT__ ? require('c3') : undefined;

class PieChart extends React.Component {
  componentDidMount() {
    if (__CLIENT__)
      this.processChart();
  }

  componentWillUnmount() {
    if (__CLIENT__)
      this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (__CLIENT__)
      this.chart.load(nextProps);
  }

  componentDidUpdate() {
    if (__CLIENT__)
      this.processChart();
  }

  processChart() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type: 'pie',
        columns: this.props.columns
      }
    });
  }

  render() {
    return (
      React.createElement(
        Grid,
        {},
        React.createElement(
          Grid.Row,
          {},
          React.createElement(
            Grid.Column,
            { width: 12 },
             React.createElement(
               'div',
               { ref: 'chart' }
             )
          )
        )
      )
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;
