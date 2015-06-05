import $ from 'jquery';

var ProductsFetcher = {
    fetch: function() {
        var request = $.get("/api/products");
        return request;
    }
};

export default ProductsFetcher;
