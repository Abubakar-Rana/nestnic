import { notFound } from "next/navigation";
import Link from "next/link";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  content: string;
}

// Shared project list (move to lib/data/projects.ts for reuse if needed)
const projects: ProjectData[] = [
  {
    id: "project-1",
    title: "Project Title 1",
    description: "Brief description",
    content: "Full project details for Project 1...",
  },
  {
    id: "project-2",
    title: "Project Title 2",
    description: "Brief description",
    content: "Details for Project 2...",
  },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    
    <main className="min-h-screen bg-[#0d0d0d] text-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-sm text-blue-400 hover:underline mb-4 inline-block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-400 text-lg mb-6">{project.description}</p>

        <div className="text-gray-300 text-base leading-relaxed space-y-4">
          <p>{project.content}</p>
        </div>
      </div>
    </main>
  );
}
