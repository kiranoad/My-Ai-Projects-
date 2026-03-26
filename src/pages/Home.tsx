import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Star, Award, Zap, BookOpen, Clock, ChevronRight, Trophy } from "lucide-react";
import { cn } from "@/src/lib/utils";

const stats = [
  { label: "Active Students", value: "50K+", icon: Users, color: "bg-blue-500" },
  { label: "Expert Mentors", value: "200+", icon: Star, color: "bg-yellow-500" },
  { label: "Courses", value: "1.2K+", icon: BookOpen, color: "bg-indigo-500" },
  { label: "Success Rate", value: "98%", icon: Award, color: "bg-green-500" },
];

const features = [
  {
    title: "Interactive Learning",
    desc: "Engage with dynamic content and real-time feedback systems.",
    icon: Zap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    title: "Gamified Experience",
    desc: "Earn badges, climb leaderboards, and unlock rewards as you learn.",
    icon: Trophy,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Expert Mentorship",
    desc: "Get guidance from industry leaders and academic experts.",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
];

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold border border-indigo-100 dark:border-indigo-800">
              <Zap size={16} />
              <span>The Future of Learning is Here</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight dark:text-white">
              Master New Skills with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Interactive
              </span>{" "}
              Education
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Experience a revolutionary way to learn. Our platform combines gamification, 
              interactive modules, and expert guidance to help you reach your full potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-indigo-500/30 group"
              >
                Start Learning Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 border dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
                <Play size={20} className="text-indigo-600 fill-indigo-600" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white">1,200+</span> students joined this week
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students Learning"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Course Completed</p>
                <p className="font-bold dark:text-white">Advanced UI Design</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Daily Streak</p>
                <p className="font-bold dark:text-white">15 Days 🔥</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border dark:border-slate-800 text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className={cn("w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-white shadow-lg", stat.color)}>
                <stat.icon size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-bold dark:text-white">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 !bg-white dark:!bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Why Choose EduVibe?</h2>
            <p className="text-slate-600 dark:text-slate-300">
              We provide a comprehensive ecosystem designed to make learning effective, 
              engaging, and fun for students of all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all space-y-6 group"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", feature.bgColor, feature.color)}>
                  <feature.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
                <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
