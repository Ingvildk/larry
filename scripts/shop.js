import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var { Col, Grid, Row, Button, Thumbnail } = ReactBootstrap;

export default class Shop extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
					data: [{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike1.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike2.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike3.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike4.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike4.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike1.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike2.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike3.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike4.jpg"},
					{name: "lunarglide", price: "1200,-", 
					category: "Womens running shoes", img: "/images/nike4.jpg"}
					]
				};
			}

	render() {	
		var count = 0;
		return (
			<div>
			<Grid >
				<Row> 
			    {this.state.data.map(function(dict, index) {
			    	count++;
			    	return (
			    		<Col xs={6} md={3}>
			    			
			    			<Thumbnail href='#' alt='171x180' src={dict.img} key={count} />
			    			<b>{dict.name}</b>
			    			<span>{dict.category}</span>
			    			<span>{dict.price}</span>
			    			<RouteHandler />
			    		</Col>		
			    		);
			    })}
				</Row>    
			</Grid>
			<br/>
			<Button id="vismer"bsStyle='primary' onClick={this.showMoreHandler	}>Vis mer </Button>
			<br/>
			<br/>
			</div>
			);
		}
};



