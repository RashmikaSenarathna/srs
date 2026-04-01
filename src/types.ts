export type UserRole = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  progress: number;
  thumbnail: string;
  date: string;
}

export interface Quiz {
  id: string;
  title: string;
  questionsCount: number;
  status: 'pending' | 'completed';
  dueDate?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface StudentProgress {
  studentId: string;
  studentName: string;
  lessonsCompleted: number;
  averageQuizScore: number;
  lastActive: string;
}
