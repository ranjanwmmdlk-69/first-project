'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulated login logic as requested by user
        if (username === 'ranjan' && password === '1234') {
            // Mock successful login delay
            setTimeout(() => {
                setIsLoading(false);
                router.push('/dashboard');
            }, 1000);
        } else {
            setTimeout(() => {
                setIsLoading(false);
                setError('Invalid username or password');
            }, 500);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
            {/* Background Decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute -bottom-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-accent/20 blur-[120px]"></div>
            </div>

            <div className="w-full max-w-md space-y-8 rounded-[2.5rem] border border-border bg-card p-10 shadow-2xl shadow-primary/5 backdrop-blur-sm">
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 mb-8">
                        <div className="h-8 w-8 rounded-lg bg-primary"></div>
                        <span className="text-xl font-bold tracking-tight text-foreground italic">Husbandry<span className="text-primary not-italic">Farm</span></span>
                    </Link>
                    <h1 className="font-serif text-3xl font-bold text-foreground">Welcome Back</h1>
                    <p className="mt-2 text-sm text-foreground/60 tracking-wide uppercase font-bold">Manager Portal</p>
                </div>

                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-bold text-foreground/80 mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="block w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                placeholder="ranjan"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-foreground/80 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                placeholder="••••"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600 border border-red-100 animate-shake">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="relative flex w-full items-center justify-center rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-95 disabled:opacity-70"
                    >
                        {isLoading ? (
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <p className="text-center text-sm text-foreground/60">
                    Need access? <Link href="#" className="font-bold text-primary hover:underline">Contact Farm Admin</Link>
                </p>
            </div>
        </div>
    );
}
