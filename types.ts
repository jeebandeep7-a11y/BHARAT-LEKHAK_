
export interface Language {
  id: string;
  name: string;
  nativeName: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  subCategories: string[];
}

export interface Story {
  id: string;
  title: string;
  author: string;
  authorId: string;
  language: string;
  category: string;
  subCategory: string;
  summary: string;
  content: string;
  coverImage: string;
  readingTime: number;
  likes: number;
  comments: number;
  tags: string[];
  createdAt: string;
  isDraft?: boolean;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'system';
  message: string;
  time: string;
  read: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  state: string;
  language: string;
  avatar: string;
  bio?: string;
  level: number;
  badges: string[];
  followers: number;
  following: number;
}
