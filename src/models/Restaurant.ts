export type Restaurant = {
  id: string;
  name: string;
  imageURL: string;
  price: string;
  rating: string;
};

export type RestaurantDetails = {
  name: string;
  rating: string;
  price: string;
  categories: string[];
  phoneNumber: string;
  isClosed: boolean;
  address: string[]; //display address
  reviewCount: number;
  transactions: string[];
};
