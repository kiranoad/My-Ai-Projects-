import { motion } from "framer-motion";
import { Search, Filter, Play, Clock, Star, BookOpen, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const categories = ["All", "Programming", "Design", "Business", "Marketing", "Science", "Math"];

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2026",
    instructor: "Dr. Angela Yu",
    category: "Programming",
    price: "$89.99",
    rating: 4.8,
    reviews: 1240,
    duration: "45h 30m",
    lessons: 120,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    progress: 45,
  },
  {
    id: 2,
    title: "Advanced UI/UX Design Masterclass",
    instructor: "Gary Simon",
    category: "Design",
    price: "$74.99",
    rating: 4.9,
    reviews: 850,
    duration: "22h 15m",
    lessons: 54,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=600",
    progress: 10,
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    instructor: "Jose Portilla",
    category: "Science",
    price: "$99.99",
    rating: 4.7,
    reviews: 2100,
    duration: "52h 00m",
    lessons: 180,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    progress: 0,
  },
  {
    id: 4,
    title: "Digital Marketing Strategy 2026",
    instructor: "Neil Patel",
    category: "Marketing",
    price: "$59.99",
    rating: 4.6,
    reviews: 920,
    duration: "18h 45m",
    lessons: 42,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    progress: 80,
  },
  {
    id: 5,
    title: "Financial Analysis & Investing",
    instructor: "Chris Haroun",
    category: "Business",
    price: "$69.99",
    rating: 4.8,
    reviews: 1500,
    duration: "30h 20m",
    lessons: 85,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
    progress: 0,
  },
  {
    id: 6,
    title: "Python for Everybody Specialization",
    instructor: "Charles Severance",
    category: "Programming",
    price: "$49.99",
    rating: 4.9,
    reviews: 3200,
    duration: "40h 10m",
    lessons: 110,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    progress: 100,
  },
];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold dark:text-white">Explore Courses</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Discover thousands of high-quality courses from expert instructors around the world.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-3 bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-2xl w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-2xl font-semibold dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all border",
                selectedCategory === cat
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg text-xs font-bold text-indigo-600">
                  {course.category}
                </div>
                <button className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-xl">
                    <Play size={24} fill="currentColor" />
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {course.lessons} Lessons
                  </div>
                </div>

                <h3 className="text-lg font-bold dark:text-white line-clamp-2 min-h-[3.5rem] group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-2">
                  <img
                    src={`https://picsum.photos/seed/${course.instructor}/100/100`}
                    className="w-6 h-6 rounded-full"
                    alt={course.instructor}
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{course.instructor}</span>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-sm">{course.rating}</span>
                  <span className="text-slate-400 text-xs font-normal">({course.reviews} reviews)</span>
                </div>

                {course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-indigo-600">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className="h-full bg-indigo-600"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-4 flex items-center justify-between border-t dark:border-slate-800">
                  <span className="text-xl font-bold dark:text-white">{course.price}</span>
                  <button className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
