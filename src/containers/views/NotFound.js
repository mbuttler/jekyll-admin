import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <img src={require("../../assets/images/logo-black-red.png")} />
        <h1>
          Huh. It seems that page is Hyde-ing...
        </h1>
        <h2>The resource you requested was not found.</h2>
      </div>
    );
  }
}
