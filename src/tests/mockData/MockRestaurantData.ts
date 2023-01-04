import { Restaurant } from "../../models/Restaurant";

export const mockBusinesses: Record<string, any>[] = [
  {
    alias: "the-burger-stand-at-taos-ale-house-taos-9",
    categories: [
      { alias: "burgers", title: "Burgers" },
      { alias: "pubs", title: "Pubs" },
      { alias: "tradamerican", title: "American (Traditional)" },
    ],
    coordinates: { latitude: 36.4123230987101, longitude: -105.568650326926 },
    display_phone: "(575) 758-5522",
    distance: 2797.3863773438893,
    id: "jiqwUTqlV0pbVy7pMXlkgQ",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/hzXemwJ8OOF3RrQUmIRrxA/o.jpg",
    is_closed: false,
    location: {
      address1: "401 Paseo Del Pueblo Norte",
      address2: null,
      address3: "",
      city: "Taos",
      country: "US",
      display_address: ["401 Paseo Del Pueblo Norte", "Taos, NM 87571"],
      state: "NM",
      zip_code: "87571",
    },
    name: "The Burger Stand at Taos Ale House",
    phone: "+15757585522",
    price: "$$",
    rating: 4,
    review_count: 365,
    transactions: ["pickup"],
    url: "https://www.yelp.com/biz/the-burger-stand-at-taos-ale-house-taos-9",
  },
];

export const mockFormattedRestaurants: Restaurant[] = [
  {
    id: "jiqwUTqlV0pbVy7pMXlkgQ",
    name: "The Burger Stand at Taos Ale House",
    imageURL:
      "https://s3-media2.fl.yelpcdn.com/bphoto/hzXemwJ8OOF3RrQUmIRrxA/o.jpg",
    isClosed: false,
    phoneNumber: "+15757585522",
    price: "$$",
    rating: 4,
    categories: ["Burgers", "Pubs", "American (Traditional)"],
    address: ["401 Paseo Del Pueblo Norte", "Taos, NM 87571"],
    reviewCount: 365,
    transactions: ["pickup"],
  },
];

export const mockGetRestaurantByIDResponse: Record<string, any> = {
  id: "jiqwUTqlV0pbVy7pMXlkgQ",
  alias: "the-burger-stand-at-taos-ale-house-taos-9",
  name: "The Burger Stand at Taos Ale House",
  image_url:
    "https://s3-media2.fl.yelpcdn.com/bphoto/hzXemwJ8OOF3RrQUmIRrxA/o.jpg",
  is_claimed: true,
  is_closed: false,
  url: "https://www.yelp.com/biz/the-burger-stand-at-taos-ale-house-taos-9?adjust_creative=WjCwcFnrX0P9jflb2qWqaA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=WjCwcFnrX0P9jflb2qWqaA",
  phone: "+15757585522",
  display_phone: "(575) 758-5522",
  review_count: 367,
  categories: [
    {
      alias: "burgers",
      title: "Burgers",
    },
    {
      alias: "pubs",
      title: "Pubs",
    },
    {
      alias: "tradamerican",
      title: "American (Traditional)",
    },
  ],
  rating: 3.5,
  location: {
    address1: "401 Paseo Del Pueblo Norte",
    address2: null,
    address3: "",
    city: "Taos",
    zip_code: "87571",
    country: "US",
    state: "NM",
    display_address: ["401 Paseo Del Pueblo Norte", "Taos, NM 87571"],
    cross_streets: "",
  },
  coordinates: {
    latitude: 36.4123230987101,
    longitude: -105.568650326926,
  },
  photos: [
    "https://s3-media2.fl.yelpcdn.com/bphoto/hzXemwJ8OOF3RrQUmIRrxA/o.jpg",
    "https://s3-media2.fl.yelpcdn.com/bphoto/TK5WKpUpsX-p2Ii4AxwJ-w/o.jpg",
    "https://s3-media1.fl.yelpcdn.com/bphoto/WfDA_mRyDsRcNhXw7-__Rw/o.jpg",
  ],
  price: "$$",
  hours: [],
  transactions: ["pickup"],
};
