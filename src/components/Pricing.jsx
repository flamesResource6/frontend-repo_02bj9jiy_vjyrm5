import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    note: 'Free forever',
    features: ['5 exports / month', '720p video', 'Basic templates', 'Standard voices'],
    cta: 'Get started',
  },
  {
    name: 'Creator',
    price: '$19',
    note: 'per month',
    features: ['Unlimited drafts', '4K export', 'Premium templates', '40+ voices'],
    cta: 'Upgrade',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$49',
    note: 'per month',
    features: ['3 seats', 'Brand kit', 'Batch generation', 'Priority support'],
    cta: 'Start trial',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple pricing that scales with you</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Start free, upgrade when you need more power.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur ${
                t.highlighted
                  ? 'border-purple-500 shadow-[0_0_0_3px_rgba(168,85,247,0.2)]'
                  : 'border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-2 right-6 text-xs px-2 py-1 rounded-full bg-purple-600 text-white">Popular</div>
              )}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-zinc-500">{t.note}</p>
                </div>
                <div className="text-3xl font-extrabold">{t.price}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium ${t.highlighted ? 'bg-purple-600 text-white' : 'border border-zinc-300 dark:border-zinc-700'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
