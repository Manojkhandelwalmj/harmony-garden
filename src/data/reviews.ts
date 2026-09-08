export interface Review {
  text: string;
  reviewerName: string;
  rating: number;
  source: string;
  date?: string;
}

export const reviews: Review[] = [];
