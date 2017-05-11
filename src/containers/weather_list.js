import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humiditiy</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; //identical to { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);