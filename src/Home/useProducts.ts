import { getProducts } from "./../utils/api";
import { Category } from "./../shared/types";
import React from "react";

export const useProducts = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setCategories(data.categories || []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return { categories, isLoading, error };
};
