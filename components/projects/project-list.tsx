import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Project } from '@/lib/types';
import { stageColorMap } from '@/lib/constants';
import { ArrowRightIcon, BookmarkIcon, XCircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-12 text-center">
        <XCircleIcon className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No projects found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {projects.map((project) => (
        <Card key={project.id} className="h-full flex flex-col retro-border overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={project.coverImage}
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge 
                className={cn(
                  "text-xs",
                  stageColorMap[project.stage] || "bg-secondary"
                )}
              >
                {project.stage}
              </Badge>
            </div>
          </div>
          <CardContent className="flex-1 pt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl">{project.name}</h3>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {project.shortDescription}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={project.founderAvatar} alt={project.founder} />
                  <AvatarFallback>{project.founder.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{project.founder}</p>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
              </div>
              <p className="text-sm font-medium">
                ${project.fundingGoal.toLocaleString()}
              </p>
            </div>
          </CardContent>
          <CardFooter className="pt-0 pb-6">
            <div className="flex w-full space-x-2">
              <Button variant="outline" size="icon" className="retro-border">
                <BookmarkIcon className="h-4 w-4" />
              </Button>
              <Button asChild variant="outline" className="flex-1 retro-border">
                <Link href={`/projects/${project.id}`}>
                  View Details
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}