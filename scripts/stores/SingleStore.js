import alt from '../alt';
import SingleActions from '../actions/SingleAction';

class SingleStore {
//	constructor() {
//		this.product = [];
//		this.errorMessage = null;
//
//	this.bindListeners ({
//		handleUpdateproduct: SingleActions.UPDATE_PRODUCT,
//		handleFetchproduct: SingleActions.FETCH_PRODUCT,
//		handleproductFaile: SingleActions.PRODUCT_FAILED
//	});
// }

//	handleUpdateproduct(product) {
//		console.log("SingleStoreis running");
//		this.product = product;
//		this.errorMessage = null;
//	}
//
//	handleFetchproduct() {
//		this.product = [];
//	}
//
//	handleproductFailed(errorMessage) {
//		this.errorMessage = errorMessage;
//	}
}

export default alt.createStore(SingleStore, 'singlestore');
