import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Faceless Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Footer />
    </div>
  );
}
