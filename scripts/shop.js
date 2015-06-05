import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Router from 'react-router';
import ProductStore from './stores/ProductStore';
import ProductActions from './actions/ProductActions';

var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Col, Grid, Row, Button, Thumbnail, Glyphicon } = ReactBootstrap;

export default class Shop extends React.Component {

	constructor(props) {
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
		var count = 0;
		if( this.state.products.length == 0 ) {
			return (<p>LOADING SHOP.. </p>);
		} else {
		  var items = this.state.products.map(function(dict, index) {
				count++;
				    	return (
				    		<Col xs={6} md={3} key={count}>
				    		    <Link
	                                to="ProductPage"
				    			    params={{id: dict.id
				    			    }}>

				    			<Thumbnail
				    			    href='#'
				    			    alt='171x180'
				    			    src={dict.img}
				    			    key={count} />
				    			</Link>

				    			<b>{dict.name}</b>
				    			<span>{dict.category}</span>
				    			<span>{dict.price}</span>
				    		</Col>
				    		);
							})
		    return (
				<div>
				<Grid >
					<Row>
					{ items }
					</Row>
				</Grid>
				<br/>
				<Button id="vismer"bsStyle='primary' onClick={this.showMoreHandler	}>Vis mer </Button>
				<br/>
				<br/>
				</div>							    	
		    	);
			}	
	}
};



