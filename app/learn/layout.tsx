import { Sidebar } from '@/components/Sidebar';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="h-16 border-b border-border bg-background sticky top-0 z-50 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-black text-white rounded flex items-center justify-center text-xs">N</div>
            <span className="hidden sm:inline">Next.js Masterclass</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Exit Course</Link>
        </div>
      </header>

      <div className="flex flex-1 container mx-auto max-w-7xl px-0 sm:px-4">
        <Sidebar />
        <main className="flex-1 min-w-0 py-8 px-4 sm:px-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
