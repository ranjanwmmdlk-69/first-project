'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar/Nav */}
            <nav className="border-b border-border bg-card/50 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-primary"></div>
                        <span className="font-serif text-xl font-bold italic">Husbandry<span className="text-primary not-italic">Dashboard</span></span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-sm font-bold text-foreground/60 hover:text-primary transition-colors"
                    >
                        Log Out
                    </button>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl p-6 md:p-12">
                <header className="mb-12">
                    <h1 className="font-serif text-4xl font-bold text-foreground">Welcome back, Manager Ranjan</h1>
                    <p className="mt-2 text-foreground/60">Farm Operation Stats for {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </header>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { label: 'Total Livestock', value: '12,482', color: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
                        { label: 'Active Paddocks', value: '42 / 45', color: 'border-orange-200 bg-orange-50 text-orange-700' },
                        { label: 'Feed Inventory', value: '82%', color: 'border-blue-200 bg-blue-50 text-blue-700' }
                    ].map((stat, i) => (
                        <div key={i} className={`rounded-3xl border p-8 ${stat.color}`}>
                            <div className="text-sm font-black uppercase tracking-widest opacity-70 mb-2">{stat.label}</div>
                            <div className="text-4xl font-serif font-bold">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <section className="mt-12 bg-card rounded-[2.5rem] border border-border p-8 md:p-12 shadow-xl shadow-primary/5">
                    <h2 className="font-serif text-2xl font-bold mb-8">Recent Activity</h2>
                    <div className="space-y-6">
                        {[
                            { time: '10m ago', task: 'Paddock 14 cattle vaccination completed', icon: '💉' },
                            { time: '1h ago', task: 'Poultry unit temperature check: Optimal (24°C)', icon: '🌡️' },
                            { time: '3h ago', task: 'New feed shipment arrived (Grain-Mix Premium)', icon: '🚛' }
                        ].map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                                <div className="h-12 w-12 rounded-2xl bg-background flex items-center justify-center text-xl shadow-sm border border-border">
                                    {activity.icon}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{activity.task}</div>
                                    <div className="text-sm text-foreground/40">{activity.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
