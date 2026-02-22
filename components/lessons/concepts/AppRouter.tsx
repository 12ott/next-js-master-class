'use client';
import { Folder, FileCode, Globe } from 'lucide-react';

export default function AppRouter() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">File-System Based Routing</h2>
        <p className="text-lg leading-relaxed mb-6">
          In Next.js, you don&apos;t define routes in a config file. Instead, the <strong>file structure</strong> defines the routes.
        </p>
        <p className="mb-4">
          The <code className="bg-secondary px-1 rounded">app</code> directory is the heart of your application.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {/* File Tree Visualization */}
        <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm">
          <h3 className="font-sans font-bold text-lg mb-4 text-muted-foreground">Project Structure</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Folder className="w-4 h-4" /> app
            </li>
            <li className="flex items-center gap-2 pl-6">
              <FileCode className="w-4 h-4 text-blue-500" /> page.tsx <span className="text-xs text-muted-foreground ml-auto">/</span>
            </li>
            <li className="flex items-center gap-2 pl-6">
              <FileCode className="w-4 h-4 text-orange-500" /> layout.tsx <span className="text-xs text-muted-foreground ml-auto">(Root Layout)</span>
            </li>
            <li className="flex items-center gap-2 pl-6 text-muted-foreground">
              <Folder className="w-4 h-4" /> about
            </li>
            <li className="flex items-center gap-2 pl-12">
              <FileCode className="w-4 h-4 text-blue-500" /> page.tsx <span className="text-xs text-muted-foreground ml-auto">/about</span>
            </li>
            <li className="flex items-center gap-2 pl-6 text-muted-foreground">
              <Folder className="w-4 h-4" /> blog
            </li>
            <li className="flex items-center gap-2 pl-12 text-muted-foreground">
              <Folder className="w-4 h-4" /> [slug]
            </li>
            <li className="flex items-center gap-2 pl-18 ml-6">
              <FileCode className="w-4 h-4 text-blue-500" /> page.tsx <span className="text-xs text-muted-foreground ml-auto">/blog/hello-world</span>
            </li>
          </ul>
        </div>

        {/* Explanation */}
        <div className="space-y-6">
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <FileCode className="w-4 h-4 text-blue-500" /> page.tsx
            </h4>
            <p className="text-sm text-muted-foreground">
              This file makes a directory accessible as a public route. If a folder doesn&apos;t have a <code className="text-xs bg-background px-1 rounded">page.tsx</code>, it&apos;s not a route.
            </p>
          </div>

          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <FileCode className="w-4 h-4 text-orange-500" /> layout.tsx
            </h4>
            <p className="text-sm text-muted-foreground">
              Wraps the pages in the current directory and its subdirectories. Used for navbars, footers, and shared UI.
            </p>
          </div>

          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-green-500" /> Dynamic Routes
            </h4>
            <p className="text-sm text-muted-foreground">
              Folders with brackets like <code className="text-xs bg-background px-1 rounded">[slug]</code> act as wildcards. They capture dynamic values from the URL.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
