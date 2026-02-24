import Link from 'next/link';

import LivestockCard from '@/components/LivestockCard';

const LIVESTOCK_TYPES = [
  {
    id: 'poultry',
    title: 'Poultry',
    description: 'Expertly managed environments for layers and broilers, ensuring antibiotic-free growth and superior welfare.',
    color: '<bg-orange-75 text-orange-600',
    icon: '🥚',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'cattle',
    title: 'Cattle',
    description: 'Premium beef and dairy breeds raised on regenerative pastures with precision nutritional tracking.',
    color: 'bg-emerald-50 text-emerald-600',
    icon: '🐄',
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'goats',
    title: 'Goats',
    description: 'Specialized dairy and meat breeds optimized for efficiency and high-quality artisanal production.',
    color: 'bg-amber-50 text-amber-600',
    icon: '🐐',
    image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Same as before but with minor tweaks */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary shadow-sm shadow-primary/20"></div>
            <span className="text-xl font-bold tracking-tight text-foreground italic">Husbandry<span className="text-primary not-italic">Farm</span></span>
          </div>
          <div className="hidden gap-8 md:flex">
            <Link href="#livestock" className="text-sm font-medium hover:text-primary transition-colors">Livestock</Link>
            <Link href="#stats" className="text-sm font-medium hover:text-primary transition-colors">Performance</Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">Our Method</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden text-sm font-bold text-foreground/70 hover:text-primary transition-colors md:block">Log In</Link>
            <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
              Join the Farm
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
          {/* Background Image with Layered Gradients */}
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2400&auto=format&fit=crop"
              alt="Farm Landscape"
              className="h-full w-full object-cover opacity-30 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--accent)_0%,_transparent_50%)] opacity-40"></div>
          </div>

          <div className="max-w-5xl space-y-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Next-Gen Paddock Management
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-6xl font-bold leading-[1.05] text-foreground md:text-9xl">
                The Art of <br />
                <span className="italic text-primary">Superior Care</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-foreground/80 md:text-2xl leading-relaxed">
                Experience agricultural excellence through precision genetics and regenerative husbandry, defining the global standard for ethical farming.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/breeds" className="flex h-16 w-full items-center justify-center rounded-2xl bg-primary px-10 text-xl font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-95 sm:w-auto">
                Explore Our Breeds
              </Link>
              <button className="h-16 w-full rounded-2xl border-2 border-primary/20 bg-background/50 px-10 text-xl font-bold text-foreground backdrop-blur-md transition-all hover:bg-primary/5 sm:w-auto">
                Our Facilities
              </button>
            </div>
          </div>

          {/* Decorative Floaties */}
          <div className="absolute top-1/4 left-10 hidden md:block animate-bounce animation-delay-500">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl border border-white/20 shadow-2xl">
              <span className="text-3xl">🌱</span>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-20 hidden md:block animate-bounce">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-xl border border-white/20 shadow-2xl">
              <span className="text-3xl">🛡️</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs font-bold uppercase tracking-widest">Discover More</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="bg-primary py-20 px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Animals Managed', value: '12k+' },
              { label: 'Paddock Areas', value: '45' },
              { label: 'Health Score', value: '98%' },
              { label: 'Yield Increase', value: '24%' }
            ].map((stat, i) => (
              <div key={i} className="text-center text-primary-foreground">
                <div className="font-serif text-4xl font-bold md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-widest opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section id="livestock" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 space-y-6 text-center">
              <h2 className="font-serif text-5xl font-bold text-foreground md:text-7xl underline decoration-primary/10 underline-offset-[16px]">
                Specialized <span className="italic text-primary">Units</span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-foreground/60 leading-relaxed">
                Precision housing and care models designed uniquely for the physiological and social needs of each species.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {LIVESTOCK_TYPES.map((type) => (
                <LivestockCard
                  key={type.id}
                  id={type.id}
                  title={type.title}
                  description={type.description}
                  icon={type.icon}
                  color={type.color}
                  image={type.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-24 px-6 text-center text-primary-foreground md:py-32">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="font-serif text-4xl font-bold md:text-5xl">Ready to upgrade your farm management?</h2>
            <p className="text-xl opacity-90">
              Join hundreds of farms using our integrated husbandry practices to improve yield and animal health.
            </p>
            <button className="rounded-full bg-background px-10 py-4 text-lg font-bold text-primary shadow-2xl transition-transform hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-primary"></div>
            <span className="text-lg font-bold tracking-tight">HusbandryFarm</span>
          </div>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Animal Husbandry Farm. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary">Privacy</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
