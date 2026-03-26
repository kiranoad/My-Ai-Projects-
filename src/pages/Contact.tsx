import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Github, Twitter, Linkedin, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/src/lib/utils";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold border border-indigo-100 dark:border-indigo-800"
          >
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white">We're Here to Help You Succeed</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Have questions about our courses, platform, or mentorship program? 
            Our team is available 24/7 to support your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-8">
              <h3 className="text-xl font-bold dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@eduvibe.com", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000", color: "text-indigo-600", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
                  { icon: MapPin, label: "Visit Us", value: "123 Future Lane, Innovation City", color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", item.bg, item.color)}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{item.label}</p>
                      <p className="font-bold dark:text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t dark:border-slate-800 space-y-4">
                <h4 className="text-sm font-bold dark:text-white uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-4">
                  {[Twitter, Github, Linkedin, Globe].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-8 rounded-3xl text-white space-y-6 shadow-xl shadow-indigo-500/20">
              <div className="flex items-center gap-3">
                <Clock size={24} />
                <h3 className="text-lg font-bold">Support Hours</h3>
              </div>
              <div className="space-y-2 text-indigo-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-bold">9AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border dark:border-slate-800 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold dark:text-white uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold dark:text-white uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-white uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-white uppercase tracking-wider">Message</label>
                  <textarea
                    rows={6}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl",
                    isSuccess
                      ? "bg-green-500 text-white shadow-green-500/30"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/30"
                  )}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={24} />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold dark:text-white">Meet Our Visionaries</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              The passionate individuals working behind the scenes to redefine the future of education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Chen", role: "Founder & CEO", img: "https://picsum.photos/seed/sarah/300/400" },
              { name: "Marcus Thorne", role: "Head of Education", img: "https://picsum.photos/seed/marcus/300/400" },
              { name: "Elena Rodriguez", role: "Lead UI Designer", img: "https://picsum.photos/seed/elena/300/400" },
              { name: "David Kim", role: "Chief Technology Officer", img: "https://picsum.photos/seed/david/300/400" },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img src={member.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={member.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-sm text-slate-300">{member.role}</p>
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <Twitter size={18} className="hover:text-indigo-400 cursor-pointer" />
                    <Linkedin size={18} className="hover:text-indigo-400 cursor-pointer" />
                    <Github size={18} className="hover:text-indigo-400 cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
