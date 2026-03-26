import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="!bg-slate-50 dark:!bg-slate-950 !text-slate-900 dark:!text-white pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-indigo-500/50 shadow-lg">
              <span className="text-xl font-bold">E</span>
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">EduVibe</span>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Empowering students with interactive learning experiences, gamified challenges, and futuristic education tools.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Courses", "Interactive Learning", "Dashboard", "Contact"].map((link) => (
              <li key={link}>
                <Link to="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Support</h4>
          <ul className="space-y-4">
            {["Help Center", "Privacy Policy", "Terms of Service", "FAQ", "Community"].map((link) => (
              <li key={link}>
                <Link to="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Mail size={18} className="text-indigo-600 dark:text-indigo-400" />
              <span>hello@eduvibe.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Phone size={18} className="text-indigo-600 dark:text-indigo-400" />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
              <span>123 Future Lane, Innovation City</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-500 text-sm">
        <p>© 2026 EduVibe. All rights reserved. Designed for the future of education.</p>
      </div>
    </footer>
  );
}
