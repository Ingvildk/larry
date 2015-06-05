import alt from '../alt';
import CheckoutActions from '../actions/CheckoutActions';

class CheckoutStore {
	constructor() {
		this.buyProducts = [];
		this.errorMessage = null;

	this.bindListeners({
        handleAddproducts: CheckoutActions.addProduct
	});
	}

    handleAddproducts(product) { 	
        this.buyProducts = this.buyProducts.concat([product]);
        this.errorMessage = null;
    }

    getCheckoutProducts() {
    	console.log(this.buyProducts);
    	return (this.buyProducts);
    }

}

export default alt.createStore(CheckoutStore, 'checkoutstore');	