import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions';
import CheckoutStore from './stores/CheckoutStore';
import CheckoutActions from './actions/CheckoutActions';

var { Button } = ReactBootstrap;

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

    buyHandler() {
        CheckoutActions.buyProducts();
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
                <Button bsStyle='success' onClick={this.buyHandler.bind(this)}>Send inn bestilling</Button>
            </div>
    		);
    }
};