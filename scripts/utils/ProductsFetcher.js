import $ from 'jquery';

var ProductsFetcher = {

    fetch: function() {
        var request = $.get("/api/alicia");
        return request;
    },

    singlefetch: function(ID) {
    	console.log("before get request");
    	var response = $.get("/api/alicia/" + ID );
    	console.log("inside ProductsFetcher");
    	return response;
    }
};

export default ProductsFetcher;
