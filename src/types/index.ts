export interface User {
  id: string;
  name: string | null;
  email: string;
  isVerified: boolean;
  password: string | null;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  users?: User[];
}

export interface Reservation {
  id: string;
  userId: string;
  user: User;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  message: string;
  adminResponse?: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  fromUserId: string;
  toUserId: string;
  content: string;
  createdAt: Date;
  read: boolean;
} 