import alt from '../alt';
import ProductActions from '../actions/ProductActions';

class ProductStore {
    constructor() {
        this.products = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateproducts: ProductActions.UPDATE_PRODUCTS,
            handleFetchproducts: ProductActions.FETCH_PRODUCTS,
            handleproductsFailed: ProductActions.PRODUCTS_FAILED
        });
    }

    handleUpdateproducts(products) {
        this.products = products;
        this.errorMessage = null;
    }

    handleFetchproducts() {
        // reset the array while we're fetching new products so React can
        // be smart and render a spinner for us since the data is empty.
        this.products = [];
    }

    handleproductsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }
}
export default alt.createStore(ProductStore, 'productstore');
