export function selectProducts(state) {
  return state.products;
}

export const selectProductById = (id) => (state) => {
  return state.products.find((product) => id === product.id);
};

export const selectProductsForCart = (ids) => (state) => {
  const products = state.products.filter((product) => ids.includes(product.id));
  const totalsById = ids.reduce(
    (totalsById, id) => {
      if (!totalsById[id]) {
        const price = products.find((product) => product.id === id).price;

        return {
          ...totalsById,
          [id]: price,
          total: Math.round((totalsById.total + price) * 100) / 100,
        };
      } else {
        const price = products.find((product) => product.id === id).price;

        return {
          ...totalsById,
          [id]: Math.round((totalsById[id] + price) * 100) / 100,
          total: Math.round((totalsById.total + price) * 100) / 100,
        };
      }
    },
    { total: 0 }
  );

  return {
    products: products,
    totalsById: totalsById,
  };
};
// If u want to use this code u have to change the mapping in the cart to
// product.products.map etc. instead of products.map

// export const selectProductsForCart = (ids) => (state) => {
//   return state.products.filter((product) => ids.includes(product.id));
// };
