import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, TrendingUp, ChevronRight, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = (role: 'student' | 'teacher') => {
    // In a real app, we would authenticate here
    if (role === 'student') {
      navigate('/student');
    } else {
      navigate('/teacher');
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-saffron/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-saffron rounded-xl flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="font-manrope font-extrabold text-xl tracking-tight">Enlightened Path</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium hover:text-saffron transition-colors">About</button>
          <button className="text-sm font-medium hover:text-saffron transition-colors">Courses</button>
          <button className="text-sm font-medium hover:text-saffron transition-colors">Community</button>
          <button 
            onClick={() => document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-blue-monk text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-monk/20 transition-all active:scale-95"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-20 pb-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Dhamma Education for the Modern World
          </span>
          <h1 className="text-6xl lg:text-7xl font-manrope font-extrabold leading-[1.1] mb-8 tracking-tight">
            Find Your Path to <span className="text-saffron italic">Enlightenment</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            An immersive Learning Management System designed to bridge ancient wisdom with modern technology. Study, practice, and grow at your own pace.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => handleAuth('student')}
              className="px-8 py-4 bg-saffron text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-saffron/20 transition-all active:scale-95 flex items-center gap-2"
            >
              Start Learning <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95">
              Explore Courses
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 relative z-10">
            <img 
              src="https://picsum.photos/seed/meditation/800/800" 
              alt="Meditation" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-monk/10 rounded-full blur-3xl -z-0"></div>
          
          {/* Floating stats card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-gray-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">12,400+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Active Students</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-surface-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-manrope font-extrabold mb-4">Designed for Deep Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform combines traditional Dhamma education methods with modern pedagogical tools.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <BookOpen className="w-8 h-8" />, 
                title: "Interactive Lessons", 
                desc: "Rich multimedia content including video discourses, text readings, and guided meditations.",
                color: "bg-orange-100 text-orange-600"
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Personalized Quizzes", 
                desc: "Assess your understanding with adaptive quizzes that provide instant feedback and explanations.",
                color: "bg-blue-100 text-blue-600"
              },
              { 
                icon: <TrendingUp className="w-8 h-8" />, 
                title: "Progress Tracking", 
                desc: "Visualize your spiritual and academic growth with detailed analytics and achievement milestones.",
                color: "bg-green-100 text-green-600"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", feature.color)}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section id="auth-section" className="py-32 px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="md:w-1/2 bg-blue-monk p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-manrope font-extrabold mb-6">Join Our Community</h2>
              <p className="text-blue-100 leading-relaxed">
                Start your journey towards wisdom and compassion today. Create an account or sign in to access your dashboard.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span className="text-sm font-medium">Access to 50+ Dhamma Courses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span className="text-sm font-medium">Connect with Teachers & Peers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                <span className="text-sm font-medium">Earn Certificates of Completion</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            <div className="flex gap-4 mb-10">
              <button 
                onClick={() => setIsLogin(true)}
                className={cn(
                  "flex-1 py-3 rounded-2xl font-bold text-sm transition-all",
                  isLogin ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
                )}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={cn(
                  "flex-1 py-3 rounded-2xl font-bold text-sm transition-all",
                  !isLogin ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50"
                )}
              >
                Register
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-monk/20 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-monk/20 focus:bg-white transition-all"
                />
              </div>
              
              <div className="pt-4 space-y-4">
                <button 
                  onClick={() => handleAuth('student')}
                  className="w-full py-4 bg-saffron text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-saffron/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isLogin ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                  {isLogin ? "Login as Student" : "Register as Student"}
                </button>
                <button 
                  onClick={() => handleAuth('teacher')}
                  className="w-full py-4 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isLogin ? "Login as Teacher" : "Register as Teacher"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-saffron rounded-lg flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="font-manrope font-extrabold text-lg tracking-tight">Enlightened Path</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-saffron transition-colors">Contact Us</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2026 Enlightened Path LMS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
