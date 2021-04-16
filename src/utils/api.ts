export const getProducts = () => {
  return fetch("http://localhost:4000/products")
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
