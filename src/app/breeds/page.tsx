import Link from 'next/link';

const BREED_DATA = {
    poultry: {
        color: 'orange',
        accent: 'bg-orange-50 text-orange-700 border-orange-100',
        items: [
            { name: 'Gam Kukula', origin: 'Indigenous (Sri Lanka)', type: 'Village Chicken', characteristics: 'Highly adaptable, resistant to local diseases, excellent scavengers.' },
            { name: 'Naked Neck', origin: 'Indigenous (Sri Lanka)', type: 'Mas Kukula', characteristics: 'Distinctive featherless neck, high heat tolerance, dual-purpose (meat/eggs).' },
            { name: 'Rhode Island Red', origin: 'USA/Crossbreeds in SL', type: 'Layer/Dual', characteristics: 'High egg production, hardy, deep red plumage.' },
            { name: 'White Leghorn', origin: 'Italy/Europe', type: 'Specialized Layer', characteristics: 'Prolific white egg producers, efficient feed seekers.' },
            { name: 'Cobb 500', origin: 'Commercial', type: 'Broiler', characteristics: 'Rapid growth rate, excellent meat yield, standardized commercial performance.' },
        ]
    },
    cattle: {
        color: 'emerald',
        accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        items: [
            { name: 'Sinhala Cattle', origin: 'Indigenous (Sri Lanka)', type: 'Lanka Batu Harak', characteristics: 'Small framed, high fertility, extremely resistant to local parasites.' },
            { name: 'Thamankaduwa White', origin: 'Indigenous (Sri Lanka)', type: 'Draft/Meat', characteristics: 'Large framed, white coat, traditionally used for draft and meat production.' },
            { name: 'Sahiwal', origin: 'India/Pakistan', type: 'Dairy', characteristics: 'High milk yield, heat tolerant, widely used in SL intermediate zones.' },
            { name: 'Holstein-Friesian', origin: 'Netherlands', type: 'Specialized Dairy', characteristics: 'Highest milk production, suited for upcountry wet zones (Nuwara Eliya).' },
            { name: 'Jersey', origin: 'UK (Jersey Island)', type: 'Dairy', characteristics: 'High milk fat content, smaller frame, efficient feed converters.' },
        ]
    },
    goats: {
        color: 'amber',
        accent: 'bg-amber-50 text-amber-700 border-amber-100',
        items: [
            { name: 'Kottukachchiya', origin: 'Indigenous (Sri Lanka)', type: 'Meat', characteristics: 'Synthetic breed developed locally, high meat ratio, hardy in dry zones.' },
            { name: 'Jamunapari', origin: 'India', type: 'Dual Purpose', characteristics: 'Large size, distinctive Roman nose, excellent for crossing with local breeds.' },
            { name: 'Sri Lankan Boer', origin: 'South Africa/Crossbred', type: 'Premium Meat', characteristics: 'Rapid muscle growth, high export quality meat, distinctive white/brown pattern.' },
            { name: 'Saanen', origin: 'Switzerland', type: 'Specialized Dairy', characteristics: 'Exceptional milk producers, gentle temperament, suited for intensive management.' },
            { name: 'Beetal', origin: 'India/Pakistan', type: 'Meat/Dairy', characteristics: 'Long ears, high prolificacy, good milk and meat yields.' },
        ]
    }
};

export default function BreedsPage() {
    return (
        <div className="min-h-screen bg-[#f5f7f2] overflow-hidden selection:bg-primary selection:text-white">
            {/* Background Color Blobs - Enhanced for visibility */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-15%] h-[800px] w-[800px] rounded-full bg-orange-200/30 blur-[160px]"></div>
                <div className="absolute top-[30%] right-[-10%] h-[800px] w-[800px] rounded-full bg-emerald-200/30 blur-[160px]"></div>
                <div className="absolute bottom-[-10%] left-[10%] h-[800px] w-[800px] rounded-full bg-amber-200/30 blur-[160px]"></div>
                {/* Subtle natural texture overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }}></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary shadow-sm shadow-primary/20"></div>
                        <span className="text-xl font-bold tracking-tight text-[#2c3e2d] italic">Husbandry<span className="text-primary not-italic">Farm</span></span>
                    </Link>
                    <Link href="/" className="text-sm font-black text-primary hover:text-primary/70 transition-colors uppercase tracking-widest">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 relative">
                <header className="mb-24 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6 ring-1 ring-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        Sri Lankan Agricultural Heritage
                    </div>
                    <h1 className="font-serif text-6xl font-bold text-[#2c3e2d] md:text-8xl mb-8 leading-[1.1]">
                        Livestock <span className="italic text-primary underline decoration-primary/10 underline-offset-8">Breeds</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#2c3e2d]/60 leading-relaxed max-w-2xl mx-auto">
                        A comprehensive overview of indigenous and introduced breeds optimized for Sri Lanka's unique agro-climatic zones.
                    </p>
                </header>

                {/* Category Navigation (Mini) */}
                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    {Object.entries(BREED_DATA).map(([cat, data]) => (
                        <Link
                            key={cat}
                            href={`#${cat}`}
                            className={`flex items-center gap-3 px-10 py-4 rounded-2xl border-2 transition-all font-black uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 ${cat === 'poultry' ? 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-500 hover:text-white hover:shadow-orange-200' :
                                cat === 'cattle' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-200' :
                                    'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-500 hover:text-white hover:shadow-amber-200'
                                }`}
                        >
                            <span className="text-2xl">
                                {cat === 'poultry' ? '🥚' : cat === 'cattle' ? '🐄' : '🐐'}
                            </span>
                            <span>{cat}</span>
                        </Link>
                    ))}
                </div>

                {/* Categories */}
                <div className="space-y-40">
                    {Object.entries(BREED_DATA).map(([category, data]) => (
                        <section key={category} id={category} className="scroll-mt-32">
                            <div className="flex items-center gap-6 mb-16">
                                <div className={`h-12 w-2 rounded-full ${category === 'poultry' ? 'bg-orange-400' : category === 'cattle' ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
                                <h2 className="font-serif text-5xl font-bold capitalize text-[#2c3e2d]">
                                    {category} <span className="text-primary/30 italic ml-2">Units</span>
                                </h2>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/10 to-transparent"></div>
                            </div>

                            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                                {data.items.map((breed, i) => (
                                    <div key={i} className="group relative rounded-[2.5rem] border border-white bg-white/60 p-10 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-3 hover:shadow-2xl hover:bg-white">
                                        <div className="mb-8 flex justify-between items-start">
                                            <span className={`inline-block rounded-xl px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border ${data.accent}`}>
                                                {breed.type}
                                            </span>
                                            <span className="text-[10px] font-bold text-black/10 tracking-widest uppercase">
                                                Ref: {breed.name.substring(0, 3)}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-3xl font-bold text-[#2c3e2d] mb-4 group-hover:text-primary transition-colors">{breed.name}</h3>

                                        <div className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-[0.1em] text-primary/60">
                                            <span className="opacity-50">Origin</span>
                                            <span className="h-1 w-1 rounded-full bg-primary/30"></span>
                                            <span className="underline decoration-primary/20 underline-offset-4">{breed.origin}</span>
                                        </div>

                                        <p className="text-[#2c3e2d]/70 text-base leading-relaxed mb-10 pb-10 border-b border-primary/5">
                                            {breed.characteristics}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">View Specs</span>
                                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary/20">
                                                <span className="text-xl">→</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Call to Action */}
                <section className="mt-48 rounded-[4rem] bg-[#2c3e2d] px-12 py-24 md:px-24 text-center text-[#fdfbf7] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-primary/10 skew-x-12 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                        <h2 className="font-serif text-5xl font-bold md:text-7xl italic leading-tight">Expert Guidance for <br /><span className="text-primary not-italic underline decoration-accent/30 underline-offset-[12px]">Your Success</span></h2>
                        <p className="text-xl opacity-80 leading-relaxed font-medium">
                            Selecting the right breed is the foundation of a thriving farm. Our agricultural specialists are ready to guide you through the selection process based on your specific terrain and goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                            <button className="rounded-2xl bg-primary px-12 py-5 text-lg font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-all shadow-primary/20">
                                Book a Consultation
                            </button>
                            <button className="rounded-2xl border-2 border-primary/30 bg-white/5 px-12 py-5 text-lg font-bold backdrop-blur-md hover:bg-white/10 transition-all">
                                Breed Guide PDF
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-primary/10 bg-white/50 backdrop-blur-md pt-20 pb-12 px-6 text-center">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <div className="h-6 w-6 rounded bg-primary"></div>
                        <p className="text-sm text-[#2c3e2d]/60 font-black tracking-[0.3em] uppercase">Husbandry Excellence Sri Lanka</p>
                    </div>
                    <div className="h-[1px] w-12 bg-primary/20 mx-auto mb-8"></div>
                    <p className="text-[10px] text-[#2c3e2d]/40 font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} Animal Husbandry Farm. All rights reserved. Dedicated to Sustainable Agriculture.
                    </p>
                </div>
            </footer>
        </div>
    );
}
