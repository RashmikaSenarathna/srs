import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  UploadCloud, 
  PlusCircle, 
  Users, 
  FileText, 
  Settings, 
  Search, 
  Bell, 
  ChevronRight, 
  MoreVertical,
  Download,
  Filter,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { MOCK_STUDENT_PROGRESS } from '../constants';

export const TeacherDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-surface flex selection:bg-blue-monk/30">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-blue-monk rounded-xl flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <span className="font-manrope font-extrabold text-xl tracking-tight">Enlightened Path</span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard" },
            { icon: <UploadCloud className="w-5 h-5" />, label: "Upload Lesson" },
            { icon: <PlusCircle className="w-5 h-5" />, label: "Create Quiz" },
            { icon: <Users className="w-5 h-5" />, label: "Student Progress" },
            { icon: <FileText className="w-5 h-5" />, label: "Reports" },
            { icon: <Settings className="w-5 h-5" />, label: "Settings" },
          ].map((item, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(item.label)}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all active:scale-95",
                activeTab === item.label 
                  ? "bg-blue-monk/10 text-blue-monk" 
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
          <div>
            <h1 className="text-3xl font-manrope font-extrabold tracking-tight mb-1">Teacher Dashboard</h1>
            <p className="text-gray-400 text-sm font-medium">Welcome back, Dr. Saman Kumara</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-monk/20 transition-all"
              />
            </div>
            <button className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-12 h-12 bg-saffron rounded-2xl flex items-center justify-center text-white font-bold text-xl overflow-hidden shadow-lg shadow-saffron/20">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {[
            { label: "Total Students", value: "1,240", change: "+12%", color: "text-blue-monk", bg: "bg-blue-50" },
            { label: "Active Lessons", value: "48", change: "+4", color: "text-saffron", bg: "bg-orange-50" },
            { label: "Quizzes Taken", value: "8,650", change: "+156", color: "text-green-600", bg: "bg-green-50" },
            { label: "Avg. Score", value: "82%", change: "+2.4%", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{stat.label}</div>
              <div className="flex items-end justify-between">
                <div className={cn("text-3xl font-extrabold", stat.color)}>{stat.value}</div>
                <div className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">{stat.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Content based on Tab */}
        <div className="space-y-8">
          {/* Student Progress Report Table */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-bold">Student Progress Report</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-gray-100 transition-all">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-monk text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-blue-monk/20 transition-all">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="pb-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Student Name</th>
                    <th className="pb-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Lessons</th>
                    <th className="pb-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Avg. Score</th>
                    <th className="pb-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Last Active</th>
                    <th className="pb-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="pb-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {MOCK_STUDENT_PROGRESS.map((student) => (
                    <tr key={student.studentId} className="group hover:bg-gray-50/50 transition-all">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-xl overflow-hidden">
                            <img 
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.studentName}`} 
                              alt="Avatar" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="font-bold text-sm">{student.studentName}</div>
                        </div>
                      </td>
                      <td className="py-6 text-center font-bold text-sm text-gray-600">{student.lessonsCompleted}</td>
                      <td className="py-6 text-center">
                        <span className={cn(
                          "px-3 py-1 rounded-lg text-xs font-bold",
                          student.averageQuizScore >= 90 ? "bg-green-50 text-green-600" :
                          student.averageQuizScore >= 80 ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
                        )}>
                          {student.averageQuizScore}%
                        </span>
                      </td>
                      <td className="py-6 text-sm text-gray-500 font-medium">{student.lastActive}</td>
                      <td className="py-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-bold text-gray-900">Online</span>
                        </div>
                      </td>
                      <td className="py-6 text-right">
                        <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8">Upload New Lesson</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Lesson Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. The Middle Way"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-monk/20 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Category</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-monk/20 transition-all appearance-none">
                      <option>Philosophy</option>
                      <option>Meditation</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Difficulty</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-monk/20 transition-all appearance-none">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
                <div className="p-10 border-2 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:border-blue-monk/30 transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-blue-50 text-blue-monk rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div className="font-bold text-sm mb-1">Click to upload video or PDF</div>
                  <div className="text-xs text-gray-400">Max file size: 50MB</div>
                </div>
                <button className="w-full py-4 bg-blue-monk text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-monk/20 transition-all active:scale-95">
                  Publish Lesson
                </button>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
              <div className="space-y-8">
                {[
                  { user: "Ananda Silva", action: "completed quiz", item: "Noble Truths", time: "2 mins ago", color: "bg-green-100 text-green-600" },
                  { user: "Methmika Perera", action: "started lesson", item: "Eightfold Path", time: "15 mins ago", color: "bg-blue-100 text-blue-600" },
                  { user: "Saman Kumara", action: "asked a question", item: "Meditation Basics", time: "1 hour ago", color: "bg-purple-100 text-purple-600" },
                  { user: "System", action: "generated report", item: "Monthly Analytics", time: "3 hours ago", color: "bg-orange-100 text-orange-600" }
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", activity.color)}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm">
                        <span className="font-bold">{activity.user}</span> {activity.action} <span className="font-bold text-gray-900">"{activity.item}"</span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium mt-1">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 bg-gray-50 text-gray-600 rounded-2xl font-bold text-sm hover:bg-gray-100 transition-all">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
