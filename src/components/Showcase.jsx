import { PlayCircle } from 'lucide-react';

const demos = [
  {
    title: 'Tech Explainer',
    video: 'https://cdn.coverr.co/videos/coverr-coding-on-laptop-6963/1080p.mp4',
  },
  {
    title: 'Product Promo',
    video: 'https://cdn.coverr.co/videos/coverr-vlogger-editing-video-4036/1080p.mp4',
  },
  {
    title: 'Travel Reel',
    video: 'https://cdn.coverr.co/videos/coverr-powerful-waterfall-5721/1080p.mp4',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">See what you can make</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">A few styles created in under 2 minutes each.</p>
          </div>
          <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium">
            <PlayCircle className="h-4 w-4" /> Watch full demo
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {demos.map((d) => (
            <div key={d.title} className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="aspect-video bg-black/90 relative">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src={d.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 text-white font-medium">{d.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
