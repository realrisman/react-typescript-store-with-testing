import { CheckoutPayload } from "../types";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:4000/products");
    return await res.json();
  } catch (message) {
    return console.log(message);
  }
};

export const postCheckout = async (data: CheckoutPayload) => {
  try {
    const res = await fetch(`http://localhost:4000/checkout`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (message) {
    return console.log(message);
  }
};

export const getOrder = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:4000/order/${id}`);
    return await res.json();
  } catch (message) {
    return console.log(message);
  }
};
