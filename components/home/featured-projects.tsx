import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRightIcon } from 'lucide-react';
import { mockProjects } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { stageColorMap } from '@/lib/constants';

export function FeaturedProjects() {
  // Get only 3 featured projects
  const featuredProjects = mockProjects.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
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
              <Button asChild variant="outline" className="w-full">
                <Link href={`/projects/${project.id}`}>
                  View Project
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button asChild variant="outline" className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
          <Link href="/projects">
            View All Projects
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}