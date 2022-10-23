var action = "add to cart";
var item = {id: 1};
var cart = [];

switch(action) {
    case "add to cart": 
        cart.push(item);
        break;
    case "remove from cart":
        var index = cart.indexOf(item);
        if (index > -1) {
            cart.splice(index, 1);
        }
        break;
    case "remove all from cart":
        cart = [];
        break;
    case "empty cart":
        cart = [];
        break;
}
