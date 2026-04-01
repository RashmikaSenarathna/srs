import { Lesson, Quiz, Question, StudentProgress } from './types';

export const MOCK_LESSONS: Lesson[] = [
  {
    id: '1',
    title: 'The Four Noble Truths',
    description: 'An introductory guide to the core teachings of Buddhism.',
    progress: 75,
    thumbnail: 'https://picsum.photos/seed/dhamma1/400/250',
    date: '2026-03-25'
  },
  {
    id: '2',
    title: 'The Eightfold Path',
    description: 'Understanding the path to liberation and ethical living.',
    progress: 40,
    thumbnail: 'https://picsum.photos/seed/dhamma2/400/250',
    date: '2026-03-28'
  },
  {
    id: '3',
    title: 'Introduction to Meditation',
    description: 'Practical techniques for mindfulness and concentration.',
    progress: 10,
    thumbnail: 'https://picsum.photos/seed/dhamma3/400/250',
    date: '2026-03-30'
  }
];

export const MOCK_QUIZZES: Quiz[] = [
  {
    id: 'q1',
    title: 'Noble Truths Assessment',
    questionsCount: 10,
    status: 'pending',
    dueDate: '2026-04-05'
  },
  {
    id: 'q2',
    title: 'Ethics & Precepts',
    questionsCount: 5,
    status: 'pending',
    dueDate: '2026-04-08'
  }
];

export const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    text: 'What is the First Noble Truth?',
    options: [
      'The path to the end of suffering',
      'The cause of suffering',
      'The truth of suffering (Dukkha)',
      'The cessation of suffering'
    ],
    correctAnswer: 2,
    explanation: 'Dukkha refers to suffering, unsatisfactoriness, or stress. The First Noble Truth is the recognition that Dukkha exists in life.'
  },
  {
    id: '2',
    text: 'Which of these is NOT part of the Eightfold Path?',
    options: [
      'Right Understanding',
      'Right Wealth',
      'Right Speech',
      'Right Mindfulness'
    ],
    correctAnswer: 1,
    explanation: 'The Eightfold Path consists of Right Understanding, Thought, Speech, Action, Livelihood, Effort, Mindfulness, and Concentration. Right Wealth is not part of it.'
  }
];

export const MOCK_STUDENT_PROGRESS: StudentProgress[] = [
  {
    studentId: 's1',
    studentName: 'Ananda Silva',
    lessonsCompleted: 12,
    averageQuizScore: 88,
    lastActive: '2026-03-31'
  },
  {
    studentId: 's2',
    studentName: 'Methmika Perera',
    lessonsCompleted: 8,
    averageQuizScore: 75,
    lastActive: '2026-03-30'
  },
  {
    studentId: 's3',
    studentName: 'Saman Kumara',
    lessonsCompleted: 15,
    averageQuizScore: 92,
    lastActive: '2026-04-01'
  }
];
