import Link from 'next/link';

interface LivestockCardProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    image?: string;
}

export default function LivestockCard({ id, title, description, icon, color, image }: LivestockCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white transition-all hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
            {/* Image Header with Overlay */}
            <div className="relative h-64 w-full overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className={`h-full w-full ${color} opacity-20`}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-zinc-900 dark:via-transparent"></div>

                {/* Floating Icon Container */}
                <div className={`absolute bottom-6 left-8 flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-3xl shadow-xl ring-4 ring-white dark:ring-zinc-900 transition-transform group-hover:rotate-12`}>
                    {icon}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-10 pt-6">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                    {title}
                </h3>
                <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto pt-10">
                    <Link href={`/breeds#${id.toLowerCase()}`} className="flex items-center gap-3 font-bold text-primary group/btn w-fit">
                        <span className="text-sm uppercase tracking-widest transition-colors group-hover/btn:text-foreground">Explore Breeds</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:shadow-lg group-hover/btn:shadow-primary/30">
                            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-all"></div>
        </div>
    );
}
