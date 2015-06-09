import alt from '../alt';
import ProductsFetcher from '../utils/ProductsFetcher.js';

class SingleActions {

	updateProduct(product) {
		this.dispatch(product);
	}

	fetchProduct(id) {
		this.dispatch(id);
		var that = this;
		ProductsFetcher.singlefetch(id)
			.then(function(product) {
				that.actions.updateProduct(product);
			});
	}

	productFailed(errorMessage) {
		this.dispatch(errorMessage);
	}
}

export default alt.createActions(SingleActions);
