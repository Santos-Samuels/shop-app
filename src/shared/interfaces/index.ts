export interface IProduct {
  id: string;
  ownerId: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export interface ICartItem {
  id: string;
  productId: string;
  imageUrl: string;
  productTitle: string;
  productPrice: number;
  sum: number;
  quantity: number;
}