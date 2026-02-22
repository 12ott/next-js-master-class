'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Monitor, ArrowRight } from 'lucide-react';

export default function ServerVsClient() {
  const [activeTab, setActiveTab] = useState<'server' | 'client'>('server');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Where does your code run?</h2>
        <p className="text-lg leading-relaxed mb-6">
          One of the most important concepts in Next.js (App Router) is the distinction between 
          <strong> Server Components</strong> and <strong> Client Components</strong>.
        </p>
        
        <div className="bg-secondary/20 p-1 rounded-lg inline-flex mb-8">
          <button 
            onClick={() => setActiveTab('server')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'server' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Server Components
          </button>
          <button 
            onClick={() => setActiveTab('client')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'client' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Client Components
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {activeTab === 'server' ? (
              <>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-500" /> Server Components
                </h3>
                <p>The default in Next.js. They render on the server and send pure HTML to the browser.</p>
                <div className="bg-card border border-border p-4 rounded-lg text-sm">
                  <p className="font-mono text-green-600 mb-2">{`// ✅ Good for:`}</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Fetching data from a database</li>
                    <li>Keeping API keys secret</li>
                    <li>Reducing bundle size (dependencies stay on server)</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-orange-500" /> Client Components
                </h3>
                <p>Rendered on the client (browser). You must opt-in by adding <code className="bg-secondary px-1 rounded text-sm">&apos;use client&apos;</code> at the top of the file.</p>
                <div className="bg-card border border-border p-4 rounded-lg text-sm">
                  <p className="font-mono text-green-600 mb-2">{`// ✅ Good for:`}</p>
                  <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                    <li>Interactivity (onClick, onChange)</li>
                    <li>Using Hooks (useState, useEffect)</li>
                    <li>Browser APIs (localStorage, window)</li>
                  </ul>
                </div>
              </>
            )}
          </motion.div>

          {/* Visual Simulation */}
          <div className="bg-zinc-900 rounded-xl p-6 text-white font-mono text-sm relative overflow-hidden h-64 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-8 bg-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="mt-8 flex-1 flex flex-col items-center justify-center">
              {activeTab === 'server' ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <Server className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <p className="text-zinc-400">Server renders HTML...</p>
                  <motion.div 
                    animate={{ y: [0, 20, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-2"
                  >
                    <ArrowRight className="w-6 h-6 mx-auto rotate-90 text-zinc-600" />
                  </motion.div>
                  <p className="text-zinc-300 mt-2">Browser receives ready HTML</p>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <Monitor className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                  <p className="text-zinc-400">Browser downloads JS...</p>
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full mx-auto mt-4"
                  />
                  <p className="text-zinc-300 mt-4">Hydrates & becomes interactive</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900 p-6 rounded-xl">
        <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Rule of Thumb</h3>
        <p className="text-yellow-700 dark:text-yellow-300">
          Use <strong>Server Components</strong> by default. Only add <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">&apos;use client&apos;</code> when you need interactivity or hooks.
        </p>
      </section>
    </div>
  );
}
