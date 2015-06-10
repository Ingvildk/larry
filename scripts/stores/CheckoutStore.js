import alt from '../alt';
import CheckoutActions from '../actions/CheckoutActions';

class CheckoutStore {
	constructor() {
		this.buyProducts = [];
		this.errorMessage = null;

	this.bindListeners({
        handleAddproducts: CheckoutActions.ADD_PRODUCT
	});
	}

    handleAddproducts(product) { 	
        this.buyProducts = this.buyProducts.concat([product]);
        this.errorMessage = null;
        console.log(this.buyProducts);
    }

    getCheckoutProducts() {
    	return (this.buyProducts);
    }

}

export default alt.createStore(CheckoutStore, 'checkoutstore');	