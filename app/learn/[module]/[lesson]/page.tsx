'use client';

import { useParams, useRouter } from 'next/navigation';
import { curriculum, Lesson } from '@/lib/curriculum';
import { Button } from '@/components/ui/button'; // We'll need to create this
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

// Import lesson contents (we'll create these next)
import WhatIsNextJs from '@/components/lessons/concepts/WhatIsNextJs';
import ServerVsClient from '@/components/lessons/concepts/ServerVsClient';
import AppRouter from '@/components/lessons/concepts/AppRouter';
import PagesLayouts from '@/components/lessons/components/PagesLayouts';
import LinkNavigation from '@/components/lessons/components/LinkNavigation';
import ImagesFonts from '@/components/lessons/components/ImagesFonts';
import FirstPage from '@/components/lessons/workshop/FirstPage';
import DynamicRoutes from '@/components/lessons/workshop/DynamicRoutes';
import FetchingData from '@/components/lessons/workshop/FetchingData';
import SeoMetadata from '@/components/lessons/best-practices/SeoMetadata';
import ProjectStructure from '@/components/lessons/best-practices/ProjectStructure';

const lessonMap: Record<string, React.ComponentType<any>> = {
  'what-is-nextjs': WhatIsNextJs,
  'server-vs-client': ServerVsClient,
  'app-router': AppRouter,
  'pages-layouts': PagesLayouts,
  'link-navigation': LinkNavigation,
  'images-fonts': ImagesFonts,
  'first-page': FirstPage,
  'dynamic-routes': DynamicRoutes,
  'fetching-data': FetchingData,
  'seo-metadata': SeoMetadata,
  'project-structure': ProjectStructure,
};

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const moduleId = params.module as string;
  const lessonId = params.lesson as string;

  // Find current lesson index to determine prev/next
  const currentModuleIndex = curriculum.findIndex(m => m.id === moduleId);
  const currentModule = curriculum[currentModuleIndex];
  
  const currentLessonIndex = currentModule?.lessons.findIndex(l => l.id === lessonId) ?? -1;
  const currentLesson = currentModule?.lessons[currentLessonIndex];

  if (!currentLesson || !currentModule) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
        <p className="text-muted-foreground mb-6">We couldn&apos;t find the lesson you&apos;re looking for.</p>
        <button 
          onClick={() => router.push('/')}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Calculate Prev/Next links
  const getPrevNext = () => {
    let prev = null;
    let next = null;

    // Previous
    if (currentLessonIndex > 0) {
      const prevLesson = currentModule.lessons[currentLessonIndex - 1];
      prev = `/learn/${moduleId}/${prevLesson.id}`;
    } else if (currentModuleIndex > 0) {
      const prevModule = curriculum[currentModuleIndex - 1];
      const prevLesson = prevModule.lessons[prevModule.lessons.length - 1];
      prev = `/learn/${prevModule.id}/${prevLesson.id}`;
    }

    // Next
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      const nextLesson = currentModule.lessons[currentLessonIndex + 1];
      next = `/learn/${moduleId}/${nextLesson.id}`;
    } else if (currentModuleIndex < curriculum.length - 1) {
      const nextModule = curriculum[currentModuleIndex + 1];
      const nextLesson = nextModule.lessons[0];
      next = `/learn/${nextModule.id}/${nextLesson.id}`;
    }

    return { prev, next };
  };

  const { prev, next } = getPrevNext();
  const LessonComponent = lessonMap[lessonId] || DefaultLessonComponent;

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="mb-8">
        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
          {currentModule.title}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          {currentLesson.title}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          {currentLesson.description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        key={lessonId} // Re-animate on lesson change
        className="prose prose-zinc dark:prose-invert max-w-none mb-12"
      >
        <LessonComponent />
      </motion.div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between border-t border-border pt-8 mt-12">
        {prev ? (
          <button 
            onClick={() => router.push(prev)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg hover:bg-secondary"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
        ) : (
          <div />
        )}

        {next ? (
          <button 
            onClick={() => router.push(next)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover:translate-x-1"
          >
            Next Lesson <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all"
          >
            Finish Course <CheckCircle2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function DefaultLessonComponent() {
  return (
    <div className="p-6 border border-dashed border-border rounded-lg bg-secondary/20 text-center">
      <p className="text-muted-foreground">This lesson content is under construction.</p>
    </div>
  );
}
