import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Settings, 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  Clock, 
  Calendar,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { MOCK_LESSONS, MOCK_QUIZZES } from '../constants';

export const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface flex selection:bg-saffron/30">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-saffron rounded-xl flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="font-manrope font-extrabold text-xl tracking-tight">Enlightened Path</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", active: true },
            { icon: <BookOpen className="w-5 h-5" />, label: "Lessons", active: false },
            { icon: <Award className="w-5 h-5" />, label: "Quiz", active: false },
            { icon: <TrendingUp className="w-5 h-5" />, label: "Progress", active: false },
            { icon: <Settings className="w-5 h-5" />, label: "Settings", active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all active:scale-95",
                item.active 
                  ? "bg-saffron/10 text-saffron" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all active:scale-95 mt-auto"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="relative w-96">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search lessons, quizzes..."
              className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
              <div className="text-right">
                <div className="text-sm font-bold">Ananda Silva</div>
                <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">Student</div>
              </div>
              <div className="w-12 h-12 bg-blue-monk rounded-2xl flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-lg shadow-blue-monk/20">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ananda" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Welcome & Quote */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-monk to-blue-700 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-blue-monk/20">
            <div className="relative z-10">
              <h1 className="text-4xl font-manrope font-extrabold mb-4 tracking-tight">Good Morning, Ananda</h1>
              <p className="text-blue-100 text-lg max-w-md leading-relaxed">
                "May you find peace today. Your journey towards wisdom continues with your next lesson."
              </p>
              <button className="mt-8 px-8 py-3.5 bg-white text-blue-monk rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-white/20 transition-all active:scale-95">
                Continue Learning
              </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-saffron/20 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Your Progress</h3>
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="stroke-gray-100"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="stroke-saffron"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">65%</span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Overall</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 font-medium">
              You've completed <span className="text-gray-900 font-bold">12 lessons</span> this month.
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-manrope font-extrabold tracking-tight">Current Lessons</h2>
            <button className="text-sm font-bold text-saffron hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {MOCK_LESSONS.map((lesson) => (
              <motion.div 
                key={lesson.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={lesson.thumbnail} 
                    alt={lesson.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-900">
                    {lesson.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 leading-tight">{lesson.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">
                    {lesson.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-saffron">{lesson.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${lesson.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-saffron rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pending Quizzes */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Pending Quizzes</h3>
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-4">
              {MOCK_QUIZZES.map((quiz) => (
                <div 
                  key={quiz.id}
                  className="flex items-center justify-between p-6 bg-surface rounded-2xl hover:bg-gray-50 transition-all cursor-pointer group"
                  onClick={() => navigate('/quiz')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-saffron transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{quiz.title}</div>
                      <div className="text-xs text-gray-400 font-medium">{quiz.questionsCount} Questions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Due Date</div>
                      <div className="text-xs font-bold">{quiz.dueDate}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-saffron transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Upcoming Events</h3>
              <div className="w-10 h-10 bg-blue-50 text-blue-monk rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Full Moon Meditation", date: "April 15, 2026", time: "6:00 PM", type: "Virtual" },
                { title: "Dhamma Discussion", date: "April 18, 2026", time: "10:00 AM", type: "In-Person" }
              ].map((event, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-blue-monk text-white rounded-2xl shadow-lg shadow-blue-monk/20">
                    <span className="text-xs font-bold uppercase tracking-widest">{event.date.split(' ')[0].substring(0, 3)}</span>
                    <span className="text-xl font-extrabold">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">{event.title}</div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {event.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
