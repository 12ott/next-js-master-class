'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { FileCode, Play } from 'lucide-react';

export default function FirstPage() {
  const [code, setCode] = useState(`export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p>Welcome to my first Next.js page!</p>
    </div>
  );
}`);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Workshop: Your First Page</h2>
        <p className="text-lg leading-relaxed mb-6">
          Let&apos;s practice creating a page. In the App Router, every page is a React component exported from a <code className="bg-secondary px-1 rounded">page.tsx</code> file.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 h-[500px]">
        {/* Editor */}
        <div className="flex flex-col border border-border rounded-xl overflow-hidden bg-zinc-950">
          <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <FileCode className="w-4 h-4" />
              <span>app/page.tsx</span>
            </div>
            <div className="text-xs text-zinc-500">Editable</div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-transparent text-zinc-100 font-mono text-sm p-4 resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="flex flex-col border border-border rounded-xl overflow-hidden bg-background">
          <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50"></div>
            </div>
            <div className="bg-background border border-border rounded px-3 py-0.5 text-xs text-muted-foreground flex-1 text-center mx-4">
              localhost:3000
            </div>
          </div>
          <div className="flex-1 p-4 relative overflow-hidden">
            <LivePreview code={code} />
          </div>
        </div>
      </section>

      <section className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900 p-6 rounded-xl">
        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Challenge</h3>
        <p className="text-blue-700 dark:text-blue-300 mb-4">
          Try changing the text inside the <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">&lt;h1&gt;</code> tag to your name. Notice how the preview updates instantly?
        </p>
      </section>
    </div>
  );
}

function LivePreview({ code }: { code: string }) {
  // This is a simulated preview. In a real app we might use sandpack-react.
  // For this demo, we'll do a very simple regex parse to extract text content
  // to make it feel somewhat alive without eval().
  
  const h1Match = code.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const pMatch = code.match(/<p[^>]*>(.*?)<\/p>/s);
  
  const h1Text = h1Match ? h1Match[1] : "Hello World";
  const pText = pMatch ? pMatch[1] : "Welcome to my first Next.js page!";

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{h1Text}</h1>
      <p>{pText}</p>
    </div>
  );
}
