import Spline from '@splinetool/react-spline';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" id="get-started">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HwqzTqgYy8m3wt0s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 py-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300/60 bg-white/70 backdrop-blur px-3 py-1 text-xs text-zinc-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-purple-500" />
            AI video creator for everyone
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Create faceless videos at lightning speed
          </h1>
          <p className="text-lg text-zinc-700/90 dark:text-zinc-300/90 max-w-xl">
            Generate engaging, on-brand videos with AI avatars, voiceover, stock assets and dynamic subtitles. No camera, no crew.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium shadow hover:opacity-90 transition">
              Start for free
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 font-medium">
              <Play className="h-4 w-4" /> Watch demo
            </a>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">No credit card required · Cancel anytime</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-blue-500/20 rounded-3xl blur-3xl pointer-events-none" />
          <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-4 shadow-xl">
            <div className="aspect-video rounded-xl overflow-hidden bg-black/90">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="https://cdn.coverr.co/videos/coverr-person-using-a-smartphone-1393/1080p.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <Stat label="Templates" value="120+" />
              <Stat label="Voices" value="40+" />
              <Stat label="Exports" value="4K" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-3">
      <div className="text-xl font-semibold">{value}</div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  );
}
