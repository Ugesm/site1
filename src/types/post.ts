export interface Author {
  name: string;
  image: string;
  role?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
  section: string;
  category: string;
  excerpt: string;
  likes: number;
  gallery?: string[];
  documents?: {
    title: string;
    url: string;
    type?: 'pdf';
  }[];
  videos?: {
    title: string;
    url: string;
    thumbnail: string;
  }[];
  attachments?: {
    type: 'image' | 'video' | 'pdf';
    url: string;
    title: string;
    thumbnailUrl?: string;
  }[];
  author: Author;
};
