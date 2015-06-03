import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions';

var {Route, DefaultRoute, RouteHandler, Link} = Router;

export default class ProductPage extends React.Component {

    constructor() {
        super();
        this.state = ProductStore.getState();
    }

    componentDidMount() {

        ProductStore.listen(this.onChange.bind(this));
        ProductActions.fetchProducts();
    }

    componentWillUnmount() {
        ProductStore.unlisten(this.onChange.bind(this));
    }

    onChange(state) {
        this.setState(state);
    }


    render() {
        var id = this.context.router.getCurrentParams().id;
        var product = this.state.products[id];
        console.log(product);

        if(typeof product === 'undefined'){
            return (<p>LOADING</p>);
        } else {
            return (<img src={product.img} />);
        }

    }
};

ProductPage.contextTypes = {
    router: React.PropTypes.func.isRequired
};
