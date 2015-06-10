import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions';
import CheckoutStore from './stores/CheckoutStore';

export default class Cart extends React.Component {

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
        console.log(this.state.buyProducts);
        var cart = this.state.buyProducts.map(function(product, index) {
            count++;
                return (
                    <li key={count}>
                        {product.name}
                    </li>
                    );
        });
    	return (
            <div>
                <ul>
                    {cart}
                </ul>
            </div>
    		);
    }
};