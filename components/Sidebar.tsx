'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { curriculum } from '@/lib/curriculum';
import { cn } from '@/lib/utils';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card h-[calc(100vh-4rem)] overflow-y-auto hidden md:block sticky top-16">
      <div className="p-4 space-y-6">
        {curriculum.map((module, moduleIndex) => (
          <div key={module.id}>
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-foreground/80 uppercase tracking-wider">
              <module.icon className="w-4 h-4" />
              {module.title}
            </div>
            <div className="space-y-1">
              {module.lessons.map((lesson, lessonIndex) => {
                const href = `/learn/${module.id}/${lesson.id}`;
                const isActive = pathname === href;
                
                return (
                  <Link 
                    key={lesson.id} 
                    href={href}
                    className={cn(
                      "group flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <span className="truncate">{lessonIndex + 1}. {lesson.title}</span>
                    {isActive && (
                      <motion.div layoutId="active-lesson-indicator">
                        <ChevronRight className="w-3 h-3" />
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
