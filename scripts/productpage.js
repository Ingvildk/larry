import React from 'react';
import Router from 'react-router';
import ReactBootstrap from 'react-bootstrap';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions'
import CheckoutActions from './actions/CheckoutActions';
import CheckoutStore from './stores/CheckoutStore';

var {Route, DefaultRoute, RouteHandler, Link} = Router;
var { Col, Grid, Row, Button, Thumbnail } = ReactBootstrap;

export default class ProductPage extends React.Component {

    constructor() {
        super();
        this.state = ProductStore.getState();
    }

    componentDidMount() {
//store verdiene i dataen får en onChange fuction bundet på seg, hver gang change skjer call onChange hos denne komponenten 
        ProductStore.listen(this.onChange.bind(this));
        CheckoutStore.listen(this.onChange.bind(this));
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

    addHandler(product) {
        CheckoutActions.addProduct(product);
    }


    render() {
        var id = this.context.router.getCurrentParams().id;
        var product = this.state.products[id];
        if(typeof product === 'undefined'){
            return (<p>LOADING</p>);
        } else {
          var chart = CheckoutStore.getState().buyProducts.length;
          console.log(chart);
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
                            
                            <Button bsStyle="success" onClick={this.addHandler.bind(this, product)}>Add to Chart</Button>
                            {chart.buyProducts}
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
