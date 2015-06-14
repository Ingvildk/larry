import alt from '../alt';
import ProductsFetcher from '../utils/ProductsFetcher.js';


class CheckoutActions {

	addProduct(product) {
		this.dispatch(product);
		ProductsFetcher.addfetch(product);
	}

	buyProducts() {
		console.log('running CheckoutActions buyProduct');
		this.dispatch();
		ProductsFetcher.buyfetch();
	}	

}

export default alt.createActions(CheckoutActions);