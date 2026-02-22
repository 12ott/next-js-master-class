'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function WhatIsNextJs() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">The React Framework for the Web</h2>
        <p className="text-lg leading-relaxed mb-4">
          Imagine you&apos;re building a LEGO castle. React gives you the bricks (components). 
          Next.js gives you the instructions, the baseplate, and the tools to build it faster and stronger.
        </p>
        <p className="text-lg leading-relaxed">
          React is a library for building user interfaces. Next.js is a <strong>framework</strong> that uses React to build full web applications. It handles the hard stuff for you: routing, data fetching, and performance optimization.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <span className="text-blue-500">⚛️</span> React (The Library)
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Renders UI components</li>
            <li>• Manages local state</li>
            <li>• Runs mostly in the browser</li>
            <li>• You choose the router & tools</li>
          </ul>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl shadow-sm ring-2 ring-primary/5">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <span className="text-black dark:text-white">▲</span> Next.js (The Framework)
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Includes React</li>
            <li>• Built-in Routing (App Router)</li>
            <li>• Server-Side Rendering (SSR)</li>
            <li>• Automatic Image Optimization</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why use it?</h2>
        <div className="space-y-4">
          {[
            { title: "Performance", desc: "Pages load faster because they are pre-rendered on the server." },
            { title: "SEO", desc: "Search engines can read your content easily (unlike plain React apps)." },
            { title: "Developer Experience", desc: "Zero config. TypeScript support out of the box. Fast refresh." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Quiz />
    </div>
  );
}

function Quiz() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const options = [
    "A database for React applications",
    "A framework for building full-stack Web applications with React",
    "A styling library for CSS",
    "A replacement for JavaScript"
  ];
  const correct = 1;

  return (
    <div className="mt-12 p-6 bg-secondary/30 rounded-xl border border-border">
      <h3 className="text-lg font-bold mb-4">Quick Check</h3>
      <p className="mb-4 font-medium">What is Next.js?</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { setSelected(i); setShowResult(true); }}
            disabled={showResult}
            className={cn(
              "w-full text-left p-3 rounded-lg border transition-all",
              showResult && i === correct ? "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-100" :
              showResult && i === selected && i !== correct ? "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-100" :
              "bg-background border-border hover:bg-secondary"
            )}
          >
            <div className="flex items-center justify-between">
              <span>{opt}</span>
              {showResult && i === correct && <Check className="w-4 h-4 text-green-600" />}
              {showResult && i === selected && i !== correct && <X className="w-4 h-4 text-red-600" />}
            </div>
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-4 text-sm">
          {selected === correct ? (
            <p className="text-green-600 font-bold">Correct! Next.js provides the framework structure around React.</p>
          ) : (
            <p className="text-red-600 font-bold">Not quite. Next.js is a framework that uses React.</p>
          )}
        </div>
      )}
    </div>
  );
}

// Helper for conditional classes
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
