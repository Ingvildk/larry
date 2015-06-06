import alt from '../alt';
import SingleActions from '../actions/SingleAction';

class SingleStore {
	constructor() {
		this.product = [];
		this.errorMessage = null;

	this.bindListeners ({
		handleUpdateproduct: ProductActions.UPDATE_PRODUCT,
		handleFetchproduct: ProductActions.FETCH_PRODUCT,
		handleproductFaile: ProductActions.PRODUCT_FAILED
	});	
}

	handleUpdateproduct(product) {
		console.log("SingleStoreis running");
		this.product = product;
		this.errorMessage = null;
	}

	handleFetchproduct() {
		this.product = [];
	}

	handleproductFailed(errorMessage) {
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(SingleStore, 'singlestore');