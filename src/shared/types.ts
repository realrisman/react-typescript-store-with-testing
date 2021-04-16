export interface Product {
  name: string;
  price: number;
  image: string;
}

export interface Category {
  name: string;
  items: Product[];
}

export interface CheckoutPayload {
  products: Product[];
}

export interface Order {
  products: Product[];
}
