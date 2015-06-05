import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions';

export default class ProductPage extends React.Component {
	    
	    constructor() {
        super();
        this.state = [];
    }


    render() {
    	return (
        var id = this.context.router.getCurrentParams().id;
        var product = this.state.products[id];
    		);
    }

};