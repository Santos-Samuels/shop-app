export interface IProduct {
  id: string;
  ownerId: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export interface ICartItem {
  id: number;
  productId: string;
  imageUrl: string;
  title: string;
  price: number;
  sum: number;
  quantity: number;
}