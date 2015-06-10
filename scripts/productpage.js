import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions'
import SingleActions from './actions/SingleAction';
import SingleStore from './stores/SingleStore';
import CheckoutStore from './stores/CheckoutStore';
import CheckoutActions from './actions/CheckoutActions';

var {Route, DefaultRoute, RouteHandler, Link} = Router;
var { Col, Grid, Row, Button, Thumbnail } = ReactBootstrap;

export default class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = SingleStore.getState();
    }

    componentDidMount() {
        var id = this.context.router.getCurrentParams().id;
        SingleStore.listen(this.onChange.bind(this));
        SingleActions.fetchProduct(id);
    }

    onChange(state) {
        this.setState(state);
    }

    addHandler(product) {
        CheckoutActions.addProduct(product);
        var cartButton = document.getElementById('addTocart');
        cartButton.textContent = "successfully added to cart";

    }

    render() {
        var product = this.state.product;
        if(typeof product === 'undefined'){
            return (<p>LOADING</p>);
        } else {
          return (
                <div>
                  <Grid>
                    <Row>
                      <Col xs= {0} md={1}></Col>                  
                      <Col xs={8} md={7}>
                        <Thumbnail src={product.img} alt='171x180'/>
                      </Col>  
                      <Col xs={2} md={2} >  
                            <p id="title"><b>{product.name}</b></p>
                            <p>{product.price}</p>
                            <div id="addTocart">
                            <Button bsStyle="success" onClick={this.addHandler.bind(this, product)} >Add to Chart</Button>
                            </div>
                      </Col>         
                    </Row>
                  </Grid>
                </div>
                );
        }

    }
};

ProductPage.contextTypes = {
    router: React.PropTypes.func.isRequired
};  

