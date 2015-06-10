import alt from '../alt';
import ProductsFetcher from '../utils/ProductsFetcher.js';


class CheckoutActions {

	addProduct(product) {
		this.dispatch(product);
		ProductsFetcher.addfetch(product);
	}
}

export default alt.createActions(CheckoutActions);