import alt from '../alt';
import ProductsFetcher from '../utils/ProductsFetcher.js';

class ProductActions {

    updateProducts(products) {
        this.dispatch(products);
    }

    fetchProducts() {

        console.log("FEEEEEEEEETCH");
        // we dispatch an event here so we can have "loading" state.
        this.dispatch();

        ProductsFetcher.fetch()
            .then((products) => {
                // we can access other actions within our action through `this.actions`
                this.actions.updateProducts(products);
            })
            .catch((errorMessage) => {
                this.actions.productsFailed(errorMessage);
            });
    }

    productsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }



}

export default alt.createActions(ProductActions);
