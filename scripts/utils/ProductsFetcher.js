import $ from 'jquery';


var ProductsFetcher = {

    fetch: function() {
        var request = $.get("/api/alicia");
        return request;
    },

    singlefetch: function(ID) {
    	var response = $.get("/api/alicia/" + ID );
    	return response;
    },

    addfetch: function(product) {
    	var r = $.post("/api/alicia/cart", JSON.stringify(product));
    	console.log("Success");
    	return "Successfully added to chart";
    }


};

export default ProductsFetcher;
