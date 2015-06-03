import React from 'react';
//import App from './App';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';
var { Navbar, NavItem, DropdownButton, MenuItem, Nav } = ReactBootstrap;

import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class NavBar extends React.Component {
	render() {
		return (
              <Navbar brand='alicia'  inverse toggleNavKey={0}>
    		  <Nav right eventKey={0}> {/* This is the eventKey referenced */}
      		  <NavItemLink to='FrontPage' eventKey={1} href='#'>Hjem</NavItemLink>
     		  <NavItemLink to='Blog'eventKey={2} href='#'>Blog</NavItemLink>
          <NavItemLink to='Shop' eventKey={3} href='#'>Shop</NavItemLink>
          <NavItemLink to='ProductPage' eventKey={4} href='#'>ProductPage</NavItemLink>
  		      <DropdownButton eventKey={5} title='Dropdown'>
 	          <MenuItem eventKey='1'>Action</MenuItem>
    	      <MenuItem eventKey='2'>Another action</MenuItem>
   		      <MenuItem eventKey='3'>Something else here</MenuItem>
    	      <MenuItem divider />
  		      <MenuItem eventKey='4'>Separated link</MenuItem>
   		      </DropdownButton>
  			  </Nav>
 			  </Navbar>
			);
	}   
};