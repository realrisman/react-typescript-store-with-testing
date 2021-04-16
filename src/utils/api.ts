import { CheckoutPayload } from "./../shared/types";

export const getProducts = () => {
  return fetch("http://localhost:4000/products")
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};

export const submitCheckout = (data: CheckoutPayload) => {
  return fetch("http://localhost:4000/checkout", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
