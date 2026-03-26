import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize, List, MessageSquare, ThumbsUp, Share2, MoreVertical, CheckCircle2, Settings } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const playlist = [
  { id: 1, title: "Introduction to React 19", duration: "12:45", completed: true, active: true },
  { id: 2, title: "Understanding the Virtual DOM", duration: "18:20", completed: true, active: false },
  { id: 3, title: "State Management with Context API", duration: "25:10", completed: false, active: false },
  { id: 4, title: "Advanced Hooks & Custom Hooks", duration: "32:00", completed: false, active: false },
  { id: 5, title: "Performance Optimization Tips", duration: "20:15", completed: false, active: false },
  { id: 6, title: "Building a Real-world Project", duration: "45:30", completed: false, active: false },
];

const comments = [
  { user: "Sarah W.", text: "This explanation of the Virtual DOM is the best I've seen! Thanks Angela.", time: "2 hours ago", likes: 24 },
  { user: "Michael C.", text: "Can you explain more about the useTransition hook in the next video?", time: "5 hours ago", likes: 12 },
  { user: "Emily R.", text: "Great content as always. The interactive examples really help.", time: "1 day ago", likes: 45 },
];

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Video Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player UI */}
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover opacity-60"
              alt="Video Thumbnail"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-2xl"
              >
                {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-2" fill="currentColor" />}
              </motion.button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity space-y-4">
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative">
                <div className="absolute top-0 left-0 h-full bg-indigo-500 w-1/3" />
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
              
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <SkipBack size={20} className="cursor-pointer hover:text-indigo-400 transition-colors" />
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <SkipForward size={20} className="cursor-pointer hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 size={20} />
                    <div className="w-20 h-1 bg-white/20 rounded-full">
                      <div className="h-full bg-white w-3/4" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">12:45 / 45:30</span>
                </div>
                <div className="flex items-center gap-4">
                  <Settings size={20} className="cursor-pointer hover:text-indigo-400 transition-colors" />
                  <Maximize size={20} className="cursor-pointer hover:text-indigo-400 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold dark:text-white">Introduction to React 19 & New Features</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">1.2M views • Streamed 2 days ago</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-bold dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  <ThumbsUp size={18} />
                  <span>12K</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-full font-bold dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 border-y dark:border-slate-800">
              <img src="https://picsum.photos/seed/instructor/100/100" className="w-12 h-12 rounded-full" alt="Instructor" referrerPolicy="no-referrer" />
              <div className="flex-1">
                <h4 className="font-bold dark:text-white">Dr. Angela Yu</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">2.5M Subscribers</p>
              </div>
              <button className="px-8 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                Subscribe
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold dark:text-white flex items-center gap-2">
                <MessageSquare size={20} className="text-indigo-600" />
                Comments (1,240)
              </h4>
              <div className="flex gap-4">
                <img src="https://picsum.photos/seed/me/100/100" className="w-10 h-10 rounded-full" alt="Me" referrerPolicy="no-referrer" />
                <div className="flex-1 space-y-3">
                  <input
                    type="text"
                    placeholder="Add a public comment..."
                    className="w-full bg-transparent border-b dark:border-slate-800 focus:border-indigo-600 focus:outline-none py-2 dark:text-white"
                  />
                  <div className="flex justify-end gap-3">
                    <button className="text-sm font-bold text-slate-500 dark:text-slate-400">Cancel</button>
                    <button className="px-6 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-bold opacity-50 cursor-not-allowed">Comment</button>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-6">
                {comments.map((comment, i) => (
                  <div key={i} className="flex gap-4">
                    <img src={`https://picsum.photos/seed/${comment.user}/100/100`} className="w-10 h-10 rounded-full" alt={comment.user} referrerPolicy="no-referrer" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm dark:text-white">{comment.user}</span>
                        <span className="text-xs text-slate-400">{comment.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{comment.text}</p>
                      <div className="flex items-center gap-4 pt-2">
                        <button className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors">
                          <ThumbsUp size={14} />
                          <span className="text-xs">{comment.likes}</span>
                        </button>
                        <button className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold dark:text-white flex items-center gap-2">
                <List size={20} className="text-indigo-600" />
                Course Content
              </h3>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">1 / 6 Videos</span>
            </div>
            <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
              {playlist.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 text-left transition-all border-b dark:border-slate-800 last:border-0",
                    item.active ? "bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-l-indigo-600" : "hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  <div className="relative w-24 aspect-video rounded-lg overflow-hidden shrink-0">
                    <img
                      src={`https://picsum.photos/seed/vid${item.id}/200/120`}
                      className="w-full h-full object-cover"
                      alt={item.title}
                      referrerPolicy="no-referrer"
                    />
                    {item.active && (
                      <div className="absolute inset-0 bg-indigo-600/40 flex items-center justify-center text-white">
                        <Play size={20} fill="currentColor" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={cn("text-sm font-bold line-clamp-2", item.active ? "text-indigo-600 dark:text-indigo-400" : "dark:text-white")}>
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      {item.completed && <CheckCircle2 size={12} className="text-green-500" />}
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-bold dark:text-white">Resources</h3>
            <div className="space-y-3">
              {["Course Slides.pdf", "Source Code.zip", "Cheat Sheet.png"].map((res) => (
                <button key={res} className="w-full flex items-center justify-between p-3 rounded-xl border dark:border-slate-800 hover:border-indigo-600 transition-all group">
                  <span className="text-sm font-medium dark:text-slate-300 group-hover:text-indigo-600">{res}</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <SkipForward size={16} className="rotate-90" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
