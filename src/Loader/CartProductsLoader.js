import { getShoppingCart } from "../components/utilities/fakedb";

const cartProductsLoader=async()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    //  copy for shop.js //
    const storeCart = getShoppingCart();
    let savedCart = [];

    for (const id in storeCart) {
      const matchingId = products.find(product => product.id === id);
      if (matchingId) {
        const quantity = storeCart[id];
        matchingId.quantity = quantity;
        savedCart.push(matchingId);
      }
    }
    return savedCart;
}
export default cartProductsLoader;