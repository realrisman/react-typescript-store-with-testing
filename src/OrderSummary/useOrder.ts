import { useEffect, useState } from "react";
import { getOrder } from "../shared/utils/api";
import { Product } from "../shared/types";

export interface Order {
  products: Product[];
}

const getOrderId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("orderId");
};

export const useOrder = () => {
  const [order, setOrder] = useState<Order>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const orderId = getOrderId();

      if (!orderId) {
        return;
      }

      const order = await getOrder(orderId);

      if (order.success) {
        setOrder(order);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { order, isLoading };
};
