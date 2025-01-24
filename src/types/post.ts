export type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
  section: string;
  category: string;
  excerpt: string;
  gallery?: string[];  
  author: {
    name: string;
    role?: string;
    image: string;
  };
};
