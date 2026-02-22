'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function DynamicRoutes() {
  const [slug, setSlug] = useState('hello-world');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Workshop: Dynamic Routes</h2>
        <p className="text-lg leading-relaxed mb-6">
          Often you need pages that share the same layout but show different content based on the URL ID (like blog posts or product pages).
        </p>
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="font-bold">1. Create the Folder</h3>
            <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm">
              app/<br/>
              &nbsp;&nbsp;blog/<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">[slug]</span>/<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page.tsx
            </div>
            <p className="text-sm text-muted-foreground">
              The square brackets <code className="text-xs bg-secondary px-1 rounded">[slug]</code> tell Next.js this is a dynamic segment.
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="font-bold">2. Access the Params</h3>
            <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm">
              {`export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <h1>Post: {slug}</h1>
}`}
            </div>
            <p className="text-sm text-muted-foreground">
              The <code className="text-xs bg-secondary px-1 rounded">params</code> prop contains the values from the URL.
            </p>
          </div>
        </div>
      </section>

      <section className="border border-border rounded-xl p-6 bg-secondary/10">
        <h3 className="font-bold mb-4">Try it out</h3>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-muted-foreground">localhost:3000/blog/</span>
          <input 
            type="text" 
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="bg-background border border-border rounded px-3 py-1 font-mono"
          />
        </div>

        <div className="bg-background border border-border rounded-lg p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold mb-2">Post: {slug}</h1>
          <p className="text-muted-foreground">This content is dynamically rendered based on the URL.</p>
        </div>
      </section>
    </div>
  );
}
