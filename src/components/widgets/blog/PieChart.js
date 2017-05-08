import React, { PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Grid } from 'semantic-ui-react';

import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.processChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.chart.load(nextProps);
  }

  componentDidUpdate() {
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
