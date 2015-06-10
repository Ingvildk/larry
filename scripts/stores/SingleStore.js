import alt from '../alt';
import SingleActions from '../actions/SingleAction';

class SingleStore {
	constructor() {
		this.product = [];
		this.errorMessage = null;

	this.bindListeners ({
		handleUpdateproduct: SingleActions.UPDATE_PRODUCT
	});
 }

	handleUpdateproduct(product) {
		console.log("SingleStore is running");
		this.product = product;
		this.errorMessage = null;
	}

	handleFetchproduct() {
		this.product = [];
	}

}

export default alt.createStore(SingleStore, 'singlestore');
