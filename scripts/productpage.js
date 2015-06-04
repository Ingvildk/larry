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
//store verdiene i dataen får en onChange fuction bundet på seg, hver gang change skjer call onChange hos denne komponenten 
        ProductStore.listen(this.onChange.bind(this));
//setter inn de nye componentene         
        ProductActions.fetchProducts();
    }

    componentWillUnmount() {
        ProductStore.unlisten(this.onChange.bind(this));
    }
// state er verdiene hos ProductStore setter disse verdiene som ny state hos denne komponenten
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
