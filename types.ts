
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  avatar: string;
}
