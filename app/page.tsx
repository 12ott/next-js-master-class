import Link from 'next/link';
import { Button } from '@/components/ui/button'; // We'll create this later or use standard button
import { ArrowRight, Layers, Zap, Code, BookOpen } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
              <span className="font-mono">N</span>
            </div>
            Next.js Masterclass
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#curriculum" className="hover:text-primary transition-colors">Curriculum</Link>
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="https://nextjs.org" target="_blank" className="hover:text-primary transition-colors">Docs</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/learn/concepts/what-is-nextjs">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border/50 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Updated for Next.js 15
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Master Next.js without the confusion.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              An interactive, beginner-friendly guide to building modern web applications with the App Router. No prior web development skills required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/learn/concepts/what-is-nextjs">
                <button className="h-12 px-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-lg flex items-center gap-2 transition-all hover:scale-105">
                  Start Course <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="#curriculum">
                <button className="h-12 px-8 rounded-lg border border-border bg-background hover:bg-secondary text-foreground font-medium text-lg transition-colors">
                  View Curriculum
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, title: "Core Concepts", desc: "Learn the 'Why' and 'How' behind Server Components and the App Router." },
                { icon: Layers, title: "Visual Components", desc: "Interactive playgrounds to understand layouts, links, and images." },
                { icon: Code, title: "Hands-on Workshop", desc: "Build real features step-by-step in a guided environment." },
                { icon: Zap, title: "Best Practices", desc: "Production-ready tips for SEO, performance, and structure." }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Preview */}
        <section id="curriculum" className="py-20 border-t border-border bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What you&apos;ll learn</h2>
              <p className="text-muted-foreground">A structured path from zero to hero.</p>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Module 1: The Foundation", items: ["What is Next.js?", "Server vs Client Components", "The File System Router"] },
                { title: "Module 2: Building Blocks", items: ["Pages & Layouts", "Optimized Images & Fonts", "Navigation & Links"] },
                { title: "Module 3: Workshop", items: ["Building your first page", "Dynamic Routing", "Data Fetching"] },
              ].map((mod, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-primary">{mod.title}</h3>
                  </div>
                  <div className="md:w-2/3 grid sm:grid-cols-3 gap-4">
                    {mod.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Next.js Masterclass. Built for educational purposes.</p>
      </footer>
    </div>
  );
}
