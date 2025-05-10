
import { ProjectDetailClient } from '@/components/projects/projectDetail/ProjectDetailClient';
import { mockProjects } from '@/lib/mock-data';

// Required for static export
export function generateStaticParams() {
  return mockProjects.map(project => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the project data - this runs on the server
  const project = mockProjects.find(p => p.id === params.id) || mockProjects[0];
  
  // Pass the project data to the client component
  return <ProjectDetailClient project={project} />;
}