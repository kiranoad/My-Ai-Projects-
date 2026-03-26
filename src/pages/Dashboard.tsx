import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Clock, Award, Bell, Settings, User, CheckCircle2, Circle, ChevronRight, TrendingUp, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { cn } from "@/src/lib/utils";

const data = [
  { name: "Mon", hours: 2.5 },
  { name: "Tue", hours: 4.0 },
  { name: "Wed", hours: 3.2 },
  { name: "Thu", hours: 5.5 },
  { name: "Fri", hours: 4.8 },
  { name: "Sat", hours: 1.5 },
  { name: "Sun", hours: 2.0 },
];

const enrolledCourses = [
  { title: "Web Development Bootcamp", progress: 65, instructor: "Dr. Angela Yu", lastAccessed: "2 hours ago" },
  { title: "Advanced UI/UX Design", progress: 20, instructor: "Gary Simon", lastAccessed: "Yesterday" },
  { title: "Python for Everybody", progress: 100, instructor: "Charles Severance", lastAccessed: "3 days ago" },
];

const tasks = [
  { id: 1, text: "Complete React Hooks Quiz", completed: true, category: "Programming" },
  { id: 2, text: "Submit UI Design Project", completed: false, category: "Design" },
  { id: 3, text: "Watch 'Data Science' Module 4", completed: false, category: "Science" },
  { id: 4, text: "Practice Python Algorithms", completed: false, category: "Programming" },
];

export function Dashboard() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/student1/200/200"
                  className="w-24 h-24 rounded-full border-4 border-indigo-50 dark:border-slate-800 shadow-lg"
                  alt="Profile"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full" />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-white">Alex Johnson</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Computer Science Student</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: LayoutDashboard, label: "Overview", active: true },
                { icon: BookOpen, label: "My Courses", active: false },
                { icon: Award, label: "Achievements", active: false },
                { icon: Bell, label: "Notifications", active: false },
                { icon: Settings, label: "Settings", active: false },
              ].map((item) => (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-all",
                    item.active
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white space-y-6 shadow-xl shadow-indigo-500/20">
            <h3 className="text-lg font-bold">Pro Upgrade</h3>
            <p className="text-sm text-indigo-100 leading-relaxed">
              Unlock unlimited courses, expert mentorship, and official certifications.
            </p>
            <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg">
              Upgrade Now
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Courses in Progress", value: "4", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
              { label: "Hours Learned", value: "124h", icon: Clock, color: "text-indigo-600", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
              { label: "Certificates", value: "12", icon: Award, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border dark:border-slate-800 shadow-sm flex items-center gap-4"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", stat.bg, stat.color)}>
                  <stat.icon size={28} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-2xl font-bold dark:text-white">{stat.value}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Learning Activity Chart */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                  <TrendingUp size={20} className="text-indigo-600" />
                  Learning Activity
                </h3>
                <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm font-bold dark:text-white px-3 py-1">
                  <option>This Week</option>
                  <option>Last Week</option>
                </select>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff'}}
                      itemStyle={{color: '#fff'}}
                    />
                    <Area type="monotone" dataKey="hours" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Task Checklist */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-500" />
                  Daily Tasks
                </h3>
                <button className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                  <Calendar size={18} />
                </button>
              </div>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800 group cursor-pointer hover:border-indigo-600 transition-all">
                    <div className="flex items-center gap-4">
                      {task.completed ? (
                        <CheckCircle2 size={24} className="text-green-500" />
                      ) : (
                        <Circle size={24} className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-600" />
                      )}
                      <div>
                        <p className={cn("font-bold dark:text-white", task.completed && "line-through text-slate-400 dark:text-slate-500")}>
                          {task.text}
                        </p>
                        <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{task.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold dark:text-white">Continue Learning</h3>
              <button className="text-sm text-indigo-600 font-bold hover:underline">View All Courses</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {enrolledCourses.map((course, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border dark:border-slate-800 hover:border-indigo-600 transition-all space-y-4"
                >
                  <div className="space-y-2">
                    <h4 className="font-bold dark:text-white line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">by {course.instructor}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-indigo-600">
                      <span>{course.progress}% Complete</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Last: {course.lastAccessed}</span>
                    <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
