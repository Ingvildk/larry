import $ from 'jquery';

var ProductsFetcher = {

    fetch: function() {
        var request = $.get("/api/alicia");
        return request;
    },

    singlefetch: function(id) {
    	var response = $.post("/api/alicia", id);
    	return response;
    }
};

export default ProductsFetcher;
