import alt from '../alt';
import ProductsFetcher from '../utils/ProductsFetcher.js';

class ProductActions {

    updateProducts(products) {
        this.dispatch(products);
    }

    fetchProducts() {
        // we dispatch an event here so we can have "loading" state.
        this.dispatch();
        var that = this;
        ProductsFetcher.fetch()
            .then(function(products) {
                // we can access other actions within our action through `this.actions`
                that.actions.updateProducts(products);
            });

    }

    productsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }



}

export default alt.createActions(ProductActions);
