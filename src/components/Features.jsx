import { Wand2, Captions, Music2, Timer, Video, Languages } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Avatars',
    desc: 'Choose realistic presenters to narrate your scripts without filming.',
  },
  {
    icon: Captions,
    title: 'Auto Captions',
    desc: 'Burn-in subtitles with brand fonts, colors and animations in one click.',
  },
  {
    icon: Music2,
    title: 'Stock Library',
    desc: 'Built-in access to royalty-free footage, music and sound effects.',
  },
  {
    icon: Timer,
    title: 'Batch Creation',
    desc: 'Generate dozens of variations and sizes from one script instantly.',
  },
  {
    icon: Video,
    title: 'Multi-Format Export',
    desc: 'Export in 1:1, 9:16, 16:9 up to 4K, ready for every platform.',
  },
  {
    icon: Languages,
    title: '40+ Languages',
    desc: 'Localize with natural voices and lip-sync that matches each language.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to go from script to share</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            A streamlined toolset for faceless content, ads, reels and explainers.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-blue-500/10" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
