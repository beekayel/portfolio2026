/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-slate-900/50 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Dan Hodeanu. All rights reserved.</p>
      </footer>
    </div>
  );
}
