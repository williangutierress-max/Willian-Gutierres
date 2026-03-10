
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  avatar?: string;
}

export interface Bonus {
  title: string;
  icon: string;
}

export interface Category {
  title: string;
  icon: string;
  image?: string;
}
