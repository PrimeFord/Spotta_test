export const searchTags = [
  "Schools",
  "Hospital",
  "Resort Park",
  "Shopping Mall",
  "Airport",
  "Train Station",
  "Night Life",
  "Public Wifi",
  "Parking Lot",
  "Security",
  "Public Transport",
  "Bus Station",
  "Quiet",
];

export type IReview = {
  user: string;
  isAdmin: boolean;
  like: number;
  dislike: number;
  comments: number;
};
export const reviews: IReview[] = [
  {
    user: "James T.",
    isAdmin: false,
    like: 1224,
    dislike: 4,
    comments: 24,
  },
  {
    user: "Taiwo o.",
    isAdmin: true,
    like: 1000,
    dislike: 24,
    comments: 20,
  },
  {
    user: "Jack M.",
    isAdmin: false,
    like: 900,
    dislike: 4,
    comments: 12,
  },
  {
    user: "John D.",
    isAdmin: false,
    like: 214,
    dislike: 4,
    comments: 8,
  },
  {
    user: "Prime S.",
    isAdmin: false,
    like: 124,
    dislike: 4,
    comments: 24,
  },
];

export const reviewTags: string[] = [
  "Schools",
  "Hospital",
  "Resort Park",
  "Shopping Mall",
  "Airport",
  "Train Station",
  "Night Life",
  "Public Wifi",
  "Parking Lot",
  "Security",
  "Free Wifi",
  "Bus Station",
  "Quiet",
  "Gym",
  "Childcare",
  "Schools",
  "Hospital",
  "Resort Park",
  "Shopping Mall",
  "Airport",
  "Train Station",
  "Night Life",
  "Public Wifi",
  "Parking Lot",
  "Security",
];
