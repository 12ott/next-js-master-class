'use client';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function PagesLayouts() {
  const [showLayout, setShowLayout] = useState(true);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Nested Layouts</h2>
        <p className="text-lg leading-relaxed mb-6">
          Next.js allows you to nest layouts. A layout in a parent folder wraps all child pages and child layouts. This is powerful for creating persistent UI elements like sidebars or headers.
        </p>
      </section>

      {/* Interactive Playground */}
      <section className="border border-border rounded-xl overflow-hidden">
        <div className="bg-secondary/50 p-4 border-b border-border flex justify-between items-center">
          <h3 className="font-bold text-sm">Visualizer</h3>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input 
              type="checkbox" 
              checked={showLayout} 
              onChange={(e) => setShowLayout(e.target.checked)}
              className="rounded border-gray-300"
            />
            Show Root Layout
          </label>
        </div>

        <div className="p-8 bg-background min-h-[400px] flex items-center justify-center">
          <motion.div 
            layout
            className={`w-full max-w-md border-2 border-dashed rounded-lg p-4 relative ${showLayout ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/10' : 'border-transparent'}`}
          >
            {showLayout && (
              <div className="absolute -top-3 left-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-0.5 rounded font-mono">
                Root Layout (layout.tsx)
              </div>
            )}
            
            {showLayout && (
              <div className="h-8 bg-orange-200 dark:bg-orange-800/40 rounded mb-4 flex items-center px-4 text-xs text-orange-800 dark:text-orange-200">
                Navbar
              </div>
            )}

            <motion.div 
              layout
              className="border-2 border-dashed border-blue-400 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 relative"
            >
              <div className="absolute -top-3 left-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded font-mono">
                Page (page.tsx)
              </div>
              
              <div className="space-y-2 mt-2">
                <div className="h-4 w-3/4 bg-blue-200 dark:bg-blue-800/40 rounded"></div>
                <div className="h-4 w-full bg-blue-200 dark:bg-blue-800/40 rounded"></div>
                <div className="h-4 w-5/6 bg-blue-200 dark:bg-blue-800/40 rounded"></div>
              </div>
            </motion.div>

            {showLayout && (
              <div className="h-8 bg-orange-200 dark:bg-orange-800/40 rounded mt-4 flex items-center px-4 text-xs text-orange-800 dark:text-orange-200">
                Footer
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Layouts preserve state:</strong> When navigating between pages in the same layout, the layout does not re-render. Input fields and scroll positions in the layout are kept.</li>
          <li><strong>Pages are unique:</strong> The page component is swapped out on navigation.</li>
          <li><strong>Nesting:</strong> You can have a <code className="text-xs bg-secondary px-1 rounded">dashboard/layout.tsx</code> inside the <code className="text-xs bg-secondary px-1 rounded">app/dashboard</code> folder that only applies to dashboard pages.</li>
        </ul>
      </section>
    </div>
  );
}
