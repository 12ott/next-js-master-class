'use client';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function FetchingData() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setData({
      title: "Simulated API Data",
      description: "This data was fetched from a 'server'!",
      timestamp: new Date().toLocaleTimeString()
    });
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Workshop: Fetching Data</h2>
        <p className="text-lg leading-relaxed mb-6">
          In Next.js App Router, you can fetch data directly inside your Server Components using <code className="bg-secondary px-1 rounded">async/await</code>.
        </p>
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-bold mb-4">The &quot;React Server Component&quot; Way</h3>
        <div className="bg-zinc-900 p-4 rounded-lg text-white font-mono text-sm mb-6 overflow-x-auto">
          {`// app/page.tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return <main>{data.title}</main>;
}`}
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Automatic Deduplication</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Next.js automatically caches fetch requests. If you call the same fetch in multiple components, it&apos;s only executed once.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Async Components</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Server Components can be async. You don&apos;t need useEffect or useState for initial data fetching!
            </p>
          </div>
        </div>
      </section>

      <section className="border border-border rounded-xl p-6 bg-secondary/10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold">Simulation</h3>
          <button 
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Fetching...' : 'Fetch Data'}
          </button>
        </div>

        <div className="bg-background border border-border rounded-lg p-8 min-h-[200px] flex items-center justify-center">
          {loading ? (
            <div className="text-muted-foreground animate-pulse">Loading data from server...</div>
          ) : data ? (
            <div className="text-center space-y-2">
              <h4 className="text-xl font-bold text-foreground">{data.title}</h4>
              <p className="text-muted-foreground">{data.description}</p>
              <div className="text-xs font-mono text-muted-foreground mt-4 pt-4 border-t border-border">
                Fetched at: {data.timestamp}
              </div>
            </div>
          ) : (
            <div className="text-muted-foreground">Click the button to simulate a server fetch.</div>
          )}
        </div>
      </section>
    </div>
  );
}
