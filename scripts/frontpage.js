import React from 'react';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';
var { Carousel, CarouselItem,Input,Grid, Row, Col } = ReactBootstrap;

import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class FrontPage extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = { value: " "
  	};
  }	
  
  render() {
    return (
    	<div id='bg'>
			<img src="./images/bg2.jpg" id="elem" className="bg"/>
		</div>
    );
  }   
};