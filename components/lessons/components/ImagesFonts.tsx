'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ImagesFonts() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Optimizing Assets</h2>
        <p className="text-lg leading-relaxed mb-6">
          Images and fonts are often the heaviest parts of a website. Next.js optimizes them automatically to improve performance and prevent <strong>Layout Shift</strong>.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            🖼️ The Image Component
          </h3>
          <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-xs mb-4 overflow-x-auto">
            import Image from &apos;next/image&apos;<br/><br/>
            &lt;Image<br/>
            &nbsp;&nbsp;src=&quot;/hero.png&quot;<br/>
            &nbsp;&nbsp;width={'{500}'}<br/>
            &nbsp;&nbsp;height={'{300}'}<br/>
            &nbsp;&nbsp;alt=&quot;Hero Image&quot;<br/>
            /&gt;
          </div>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• <strong>Size Optimization:</strong> Automatically serves correctly sized images for each device.</li>
            <li>• <strong>Visual Stability:</strong> Prevents layout shift by reserving space.</li>
            <li>• <strong>Lazy Loading:</strong> Only loads images when they enter the viewport.</li>
          </ul>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            🔤 Next/Font
          </h3>
          <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-xs mb-4 overflow-x-auto">
            import {'{ Inter }'} from &apos;next/font/google&apos;<br/><br/>
            const inter = Inter({'{ subsets: [\'latin\'] }'})<br/><br/>
            &lt;body className={'{inter.className}'}&gt;
          </div>
          <ul className="text-sm space-y-2 text-muted-foreground">
            <li>• <strong>Zero Layout Shift:</strong> Fonts are preloaded.</li>
            <li>• <strong>Privacy:</strong> Google Fonts are downloaded at build time and hosted locally. No requests to Google servers by the browser.</li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary/30 p-6 rounded-xl">
        <h3 className="font-bold mb-2">Why width & height?</h3>
        <p className="text-muted-foreground mb-4">
          You must provide width and height (or use <code className="text-xs bg-background px-1 rounded">fill</code>) so Next.js knows how much space to reserve before the image loads. This prevents the page from &quot;jumping&quot; around.
        </p>
      </section>
    </div>
  );
}
