'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LinkNavigation() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Client-Side Navigation</h2>
        <p className="text-lg leading-relaxed mb-6">
          The <code className="bg-secondary px-1 rounded text-primary font-mono">&lt;Link&gt;</code> component is the primary way to navigate between routes in Next.js.
        </p>
        <p className="mb-4">
          Unlike a standard HTML <code className="bg-secondary px-1 rounded font-mono">&lt;a&gt;</code> tag, the Next.js Link component prevents a full page reload. This makes navigation feel instant (Single Page Application behavior).
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-4">Standard HTML Anchor</h3>
          <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm mb-4">
            &lt;a href=&quot;/about&quot;&gt;About&lt;/a&gt;
          </div>
          <ul className="text-sm text-red-500 space-y-1">
            <li>❌ Triggers full browser refresh</li>
            <li>❌ Loses client state</li>
            <li>❌ Slower transition</li>
          </ul>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl ring-2 ring-primary/10">
          <h3 className="font-bold mb-4">Next.js Link</h3>
          <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm mb-4">
            import Link from &apos;next/link&apos;<br/><br/>
            &lt;Link href=&quot;/about&quot;&gt;About&lt;/Link&gt;
          </div>
          <ul className="text-sm text-green-600 space-y-1">
            <li>✅ Client-side transition</li>
            <li>✅ Preserves state</li>
            <li>✅ Prefetches code in background</li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary/30 p-6 rounded-xl">
        <h3 className="font-bold mb-2">Prefetching Magic</h3>
        <p className="text-muted-foreground">
          When a <code className="font-mono text-xs">&lt;Link&gt;</code> component enters the user&apos;s viewport (becomes visible on screen), Next.js automatically prefetches the code and data for that linked page in the background. By the time the user clicks, the page is already ready!
        </p>
      </section>
    </div>
  );
}
