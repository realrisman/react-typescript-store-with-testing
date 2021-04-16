import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../shared/Loader";
import { Order } from "../shared/types";
import { getOrder } from "../utils/api";

const getOrderId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("orderId");
};

export const OrderSummary = () => {
  const [order, setOrder] = React.useState<Order>();

  React.useEffect(() => {
    const fetchData = async () => {
      const orderId = getOrderId();
      if (!orderId) {
        return;
      }

      const order = await getOrder(orderId);
      if (order.success) {
        setOrder(order);
      }
    };
    fetchData();
  }, []);

  if (!order) {
    return <Loader />;
  }

  return (
    <section className="nes-container with-title">
      <h1 className="title">Order Summary</h1>
      <div className="nes-container is-rounded order-summary-container">
        <ul className="nest-list is-circle">
          {order.products.map((product) => {
            return <li key={product.name}>{product.name}</li>;
          })}
        </ul>
      </div>
      <Link to="/">
        <button className="nes-btn is-primary">Back to the store</button>
      </Link>
    </section>
  );
};
