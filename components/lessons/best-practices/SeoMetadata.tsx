'use client';
import { Search } from 'lucide-react';

export default function SeoMetadata() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">SEO & Metadata</h2>
        <p className="text-lg leading-relaxed mb-6">
          Next.js makes it easy to add meta tags (title, description, Open Graph) to your application for better Search Engine Optimization and social sharing.
        </p>
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-bold mb-4">The Metadata API</h3>
        <p className="mb-4 text-muted-foreground">
          Instead of adding <code className="text-xs bg-secondary px-1 rounded">&lt;head&gt;</code> tags manually, you export a <code className="text-xs bg-secondary px-1 rounded">metadata</code> object from any layout.tsx or page.tsx.
        </p>
        
        <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm mb-6 overflow-x-auto">
          {`import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Awesome App',
  description: 'Built with Next.js',
  openGraph: {
    images: ['/og-image.png'],
  },
}`}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Search className="w-4 h-4" /> Search Result Preview
          </h3>
          <div className="space-y-1">
            <div className="text-sm text-foreground/60">www.myawesomeapp.com</div>
            <div className="text-xl text-blue-600 hover:underline cursor-pointer">My Awesome App</div>
            <div className="text-sm text-foreground/80">
              Built with Next.js - The React Framework for the Web. Learn how to build better websites...
            </div>
          </div>
        </div>

        <div className="border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Dynamic Metadata</h3>
          <p className="text-sm text-muted-foreground mb-4">
            You can also generate metadata dynamically based on route params (e.g., for blog posts).
          </p>
          <div className="bg-zinc-900 p-3 rounded text-white font-mono text-xs">
            {`export async function generateMetadata({ params }) {
  return {
    title: params.slug
  }
}`}
          </div>
        </div>
      </section>
    </div>
  );
}
