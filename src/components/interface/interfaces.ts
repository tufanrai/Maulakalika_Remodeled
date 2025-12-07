// mail form interface
export interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// search interface
export interface ISearch {
  title?: string;
}

// Image interface
export interface IImage {
  src: string;
  category: string;
  alt: string;
}

// News card interface
export interface INewsCard {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

// Reports interface
export interface IReports {
  title: string;
  type: string;
  date: string;
  pages: number;
}

// Project card interface
export interface IProjects {
  title: string;
  capacity: number;
  status: "Ongoing" | "Planning" | "Completed";
  location: string;
  StartYear: string;
  description: string;
  image: string;
  features: string[];
}
