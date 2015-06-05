import alt from '../alt';

class CheckoutActions {

	addProduct(product) {
		this.dispatch(product);
	}

}

export default alt.createActions(CheckoutActions);