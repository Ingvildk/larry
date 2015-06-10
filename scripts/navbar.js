import React from 'react';
import Router from 'react-router';
import CheckoutStore from './stores/CheckoutStore';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';
var { Navbar, NavItem, DropdownButton, MenuItem, Nav, Glyphicon } = ReactBootstrap;

import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink, ListGroupItemLink} = ReactRouterBootstrap;

export default class NavBar extends React.Component {

    constructor() {
        super();
        this.state = CheckoutStore.getState();
    }

    componentDidMount() {
        CheckoutStore.listen(this.onChange.bind(this));
    }

    onChange(state) {
        this.setState(state);
    }

	render() {
        var count = 0;
        var chart = this.state.buyProducts;
        var dropdowns = chart.map(function(elem, index) {
            count++;
            return(
                <MenuItem eventKey={elem.id} key={count}> {elem.id} </MenuItem>
                );
            })
		return (
              <Navbar brand='alicia'  inverse toggleNavKey={0}>
                <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                    <NavItemLink to='FrontPage' eventKey={1} href='#'>Hjem</NavItemLink>
                    <NavItemLink to='Blog'eventKey={2} href='#'>Blog</NavItemLink>
                    <NavItemLink to='Shop' eventKey={3} href='#'>Shop</NavItemLink>
                    <NavItemLink to='Cart' eventKey={4}> <Glyphicon glyph='shopping-cart' id="chart"/> </NavItemLink>
                    <DropdownButton eventKey={5} title={chart.length}>
                      { dropdowns }
                    </DropdownButton>
                </Nav>
 			  </Navbar>
			);
	}
};
