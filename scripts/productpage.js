import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';


export default class ProductPage extends React.Component {
  contextTypes: {
    router: React.PropTypes.func
  }

  render() {
    return (
      <div> {this.context.router.getCurrentParams().messageId} </div>
    );
  }
};