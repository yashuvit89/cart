/*

Utility helper functions to filter products
Filters format obj:
{brand: ['NutriWell', 'MARIGOLD'], price:['0-0.99', '1-1.99']};

*/

// Filtering logic based on type
function filterProducts(allProducts, filterType, key) {
    // Iterate over all products and filter based on filter type

    // return all products if filter is not checked
    if(filterType.length < 1) {
      return allProducts;
    }

    let prods = allProducts.filter((prod) => {
            for(let i = 0; i < filterType.length; i++){
              if(key === "price"){
                let price = filterType[i].split('-');
                let min = price[0];
                let max = price[1];
                let prodPrice = parseFloat(prod['price']);

                if(prodPrice <= max && prodPrice >= min) {
                  return true;
                }
              }else if(filterType[i] === prod[key]){
                return true;
              }
            }
        return false;
    });
    return prods;
}

/*
   Public method: Return filtered products
   Idea is filter based on type Ex(Brand, Price)

   Logic below is a filtered process
   1. Filter based on brand, and there will be few products filtered
   2. Pass the filtered products to apply next filters.

   At the end we get filtered products applying conjunction to filter types
*/
export function getFilteredProducts(products, filters) {
    // Iterate over given filters
    for(let key in filters){
        let filterType = filters[key];

        // Returns filtered products for a filter - which is used for next filter
        products = filterProducts(products, filterType, key);
    }
    return products;
}
