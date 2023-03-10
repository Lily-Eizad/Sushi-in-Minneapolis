export type Restaurant = {
  id: string;
  imageURL: string;
  name: string;
  rating: number;
  price: string;
  categories: string[];
  phoneNumber: string;
  isClosed: boolean;
  address: string[]; //display address
  reviewCount: number;
  transactions: string[];
};
