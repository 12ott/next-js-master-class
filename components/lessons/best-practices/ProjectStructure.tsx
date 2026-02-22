'use client';
import { Folder, FileCode } from 'lucide-react';

export default function ProjectStructure() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
        <p className="text-lg leading-relaxed mb-6">
          Keeping your project organized is key to scaling. While Next.js is unopinionated about where you put your components, here is a recommended structure.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Recommended Structure</h3>
          <ul className="space-y-2 font-mono text-sm">
            <li className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-yellow-500" /> app/ <span className="text-muted-foreground ml-auto">{`// Routes & Pages`}</span>
            </li>
            <li className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-blue-500" /> components/ <span className="text-muted-foreground ml-auto">{`// UI Components`}</span>
            </li>
            <li className="flex items-center gap-2 pl-4">
              <Folder className="w-4 h-4 text-blue-500" /> ui/ <span className="text-muted-foreground ml-auto">{`// Buttons, Inputs`}</span>
            </li>
            <li className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-green-500" /> lib/ <span className="text-muted-foreground ml-auto">{`// Utilities, API calls`}</span>
            </li>
            <li className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-purple-500" /> public/ <span className="text-muted-foreground ml-auto">{`// Static assets`}</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Colocation</h4>
            <p className="text-sm text-muted-foreground">
              You can also keep components related to a specific page <strong>inside</strong> that page&apos;s folder. Next.js ignores files that don&apos;t match the special file names (page.tsx, layout.tsx, etc.).
            </p>
          </div>
          
          <div className="bg-secondary/30 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Private Folders</h4>
            <p className="text-sm text-muted-foreground">
              Prefix a folder with an underscore (e.g., <code className="bg-background px-1 rounded">_utils</code>) to opt it out of routing entirely.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 border border-primary/10 p-6 rounded-xl">
        <h3 className="font-bold mb-2">Final Tip</h3>
        <p className="text-muted-foreground">
          Consistency is more important than the &quot;perfect&quot; structure. Pick a pattern and stick to it across your team.
        </p>
      </section>
    </div>
  );
}
