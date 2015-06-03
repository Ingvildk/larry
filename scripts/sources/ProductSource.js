var mockData =
    [{
        id: 0,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike1.jpg"
    }, {
        id: 1,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike2.jpg"
    }, {
        id: 2,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike3.jpg"
    }, {
        id: 3,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike4.jpg"
    }, {
        id: 4,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike4.jpg"
    }, {
        id: 5,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike1.jpg"
    }, {
        id: 6,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike2.jpg"
    }, {
        id: 7,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike3.jpg"
    }, {
        id: 8,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike4.jpg"
    }, {
        id: 9,
        name: "lunarglide",
        price: "1200,-",
        category: "Womens running shoes",
        img: "/images/nike4.jpg"
    }];

var ProductSource = {
    fetchProducts() function() {
        // returning a Promise because that is what fetch does.
        return new Promise(function(resolve, reject) {
            // simulate an asynchronous action where data is fetched on
            // a remote server somewhere.
            console.log("are we fetching or what?");
            setTimeout(function() {

                // resolve with some mock data
                resolve(mockData);
            }, 250);
        });
    }
};

export default ProductsFetcher;
