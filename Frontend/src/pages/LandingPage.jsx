import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import demo from '../assets/demo.png';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040509] via-[#0b1020] to-[#081730] text-white antialiased">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#4c1d95] via-[#0ea5a6] to-transparent opacity-10 blur-3xl transform rotate-12" />
        <div className="absolute right-20 bottom-[-80px] w-96 h-96 rounded-full bg-gradient-to-br from-[#0ea5a6] via-[#0369a1] to-transparent opacity-8 blur-2xl" />
      </div>

      <header className="relative z-20">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#7c3aed] shadow-md flex items-center justify-center text-black font-bold">WN</div>
            <div className="text-xl font-semibold tracking-tight">WellNest</div>
          </div>

          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-[#06b6d4] transition">Home</a>
            <a href="#about" className="hover:text-[#06b6d4] transition">About</a>
            <a href="#features" className="hover:text-[#06b6d4] transition">Features</a>
            <a href="#contact" className="hover:text-[#06b6d4] transition">Contact</a>
            <button onClick ={() => {
              navigate('/login')
            }} className="ml-4 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-4 py-2 rounded-full text-black font-medium shadow-lg hover:brightness-105 transition">Login</button>
          </div>

          
          <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
            <FiMenu size={26} />
          </button>
        </nav>

        
        <motion.aside
          initial={{ x: '-100%' }}
          animate={{ x: open ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 z-40 w-72 bg-black/70 backdrop-blur-lg p-6 md:hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#7c3aed] flex items-center justify-center text-black font-bold">WN</div>
              <div className="font-semibold">WellNest</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><FiX size={22} /></button>
          </div>
          <nav className="flex flex-col gap-4 text-lg">
            <a href="#home" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/5 transition">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/5 transition">About</a>
            <a href="#features" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/5 transition">Features</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 px-2 rounded hover:bg-white/5 transition">Contact</a>
            <button onClick={() => {
              navigate('/login');
            }} className="mt-4 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] px-4 py-2 rounded-full text-black font-medium shadow">Login</button>
          </nav>
        </motion.aside>
      </header>

      
      <main id="home" className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 lg:pb-24 flex flex-col-reverse lg:flex-row items-center gap-12">
          
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full lg:w-1/2">
            <h2 className="text-sm uppercase text-[#9ca3af] tracking-wider mb-4">Wellness · Tracking · Growth</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60 drop-shadow-[0_10px_30px_rgba(7,89,133,0.12)]">
              WellNest
            </h1>
            <p className="mt-6 text-lg text-[#cbd5e1] max-w-xl">
              A sleek companion to track your habits, mood and health with privacy-first analytics and beautiful insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a onClick={() => {
                navigate('/signup')
              }} className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transition">Get Started</a>
              <a href="#about" className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 rounded-full text-sm hover:bg-white/5 transition">Learn more</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-sm">
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1]"><FiCheckCircle /> Privacy-first</div>
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1]"><FiCheckCircle /> Simple UI</div>
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1]"><FiCheckCircle /> Insights</div>
            </div>
          </motion.div>

          
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[580px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#052531] to-[#2a065f] shadow-2xl transform -rotate-6" />
              <img src={demo} alt="app mockup" className="relative rounded-3xl w-full h-full object-cover border-4 border-white/10 shadow-xl" />
            </div>
          </motion.div>
        </section>

        
        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-white/3 to-white/2 rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/6">
            <div className="md:flex md:items-center md:gap-10">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="about" className="rounded-xl shadow-lg w-full object-cover max-h-80" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">About WellNest</h3>
                <p className="text-lg text-[#cbd5e1] mb-6">
                  WellNest is built for people who want calm, clarity and control. Track daily moods, routines, exercise and sleep — and get friendly, private insights that help you make small changes that stick.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#06b6d4] mt-1">●</span><span className="text-[#cbd5e1]">Lightweight and privacy-first</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#06b6d4] mt-1">●</span><span className="text-[#cbd5e1]">Beautiful insights and trends</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#06b6d4] mt-1">●</span><span className="text-[#cbd5e1]">Built for habit formation</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        
        <section id="features" className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h4 className="text-sm text-[#9ca3af] uppercase mb-2">Features</h4>
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need to feel better</h2>
            <p className="mt-3 text-[#9ca3af] max-w-2xl mx-auto">Simple tools to track mood, habits, sleep and exercise with beautiful visualizations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Mood Tracker', desc: 'Quick daily moods and notes', icon: '🙂' },
              { title: 'Habit Builder', desc: 'Create repeatable healthy routines', icon: '🔁' },
              { title: 'Sleep Insights', desc: 'Understand sleep patterns', icon: '🌙' },
              { title: 'Privacy First', desc: 'Your data stays with you', icon: '🔒' },
            ].map((f) => (
              <motion.div key={f.title} whileHover={{ y: -6 }} className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/6 shadow-lg">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h5 className="font-semibold text-lg mb-2">{f.title}</h5>
                <p className="text-sm text-[#cbd5e1]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#06121a] to-[#0b1430] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/6">
            <div>
              <h3 className="text-2xl font-bold">Ready to build better habits?</h3>
              <p className="text-[#9ca3af] mt-2">Join WellNest and start a simple, private journey to better wellness.</p>
            </div>
            <div className="flex gap-4">
              <a 
              onClick ={() => {
                navigate('/signup');
              }}
               className="cursor-pointer inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-black rounded-full font-semibold shadow-lg">Get Started</a>
              <a href="#about" className="inline-flex items-center px-6 py-3 border border-white/10 rounded-full text-sm">Learn more</a>
            </div>
          </motion.div>
        </section>

        
        <div id="contact" className="w-full mx-auto px-6 py-12 flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-10">
              <a href="#" className="text-[#9ca3af] hover:text-white transition scale-150 hover:scale-170">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#9ca3af] hover:text-white transition scale-150 hover:scale-170">
                <FaGithub />
              </a>
              <a href="#" className="text-[#9ca3af] hover:text-white transition scale-150 hover:scale-170">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
