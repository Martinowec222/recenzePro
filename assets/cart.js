/* recenzePro.cz — sdílený košík (localStorage) */
(function () {
  var CART_KEY = 'recenzepro_cart';

  function getCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(item) {
    var cart = getCart();
    cart.push(item);
    saveCart(cart);
    return cart;
  }

  function removeFromCart(index) {
    var cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function updateCartCount() {
    var count = getCart().length;
    var nodes = document.querySelectorAll('.cart-count');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = count;
    }
  }

  window.RecenzeProCart = {
    getCart: getCart,
    saveCart: saveCart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    updateCartCount: updateCartCount
  };

  document.addEventListener('DOMContentLoaded', updateCartCount);
})();
