import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ArrowRightIcon, BookmarkIcon, CheckCircleIcon, ClockIcon, HeartIcon, MessageSquareIcon as MessageSquare2Icon, PencilIcon, StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { stageColorMap } from '@/lib/constants';
import { Project } from '@/lib/types/types';

interface DashboardProjectCardProps {
  project: Project;
  asFounder?: boolean;
  bookmarked?: boolean;
  recommended?: boolean;
}

export function DashboardProjectCard({ 
  project, 
  asFounder = false,
  bookmarked = false,
  recommended = false,
}: DashboardProjectCardProps) {
  return (
    <Card className={cn(
      "h-full flex flex-col retro-border overflow-hidden",
      recommended ? "ring-2 ring-primary" : ""
    )}>
      <div className="relative h-40 w-full">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Badge 
            className={cn(
              "text-xs",
              stageColorMap[project.stage] || "bg-secondary"
            )}
          >
            {project.stage}
          </Badge>
          
          {recommended && (
            <Badge variant="default" className="bg-primary text-xs">
              <StarIcon className="h-3 w-3 mr-1" /> Recommended
            </Badge>
          )}
        </div>
        
        {asFounder && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <HeartIcon className="h-4 w-4" />
                <span className="text-sm">5 interested</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare2Icon className="h-4 w-4" />
                <span className="text-sm">3 messages</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="flex-1 pt-6 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-xl">{project.name}</h3>
            {bookmarked && (
              <BookmarkIcon className="h-5 w-5 text-primary fill-primary" />
            )}
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2">
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
          <Badge variant="outline">{project.category}</Badge>
        </div>
        
        {asFounder && (
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Profile completion</span>
              <span>78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0 pb-6">
        {asFounder ? (
          <div className="flex space-x-2 w-full">
            <Button variant="outline" className="flex-1 retro-border">
              <PencilIcon className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="flex-1 retro-border">
              <ClockIcon className="h-4 w-4 mr-2" />
              Status
            </Button>
          </div>
        ) : (
          <Button asChild variant="outline" className="w-full retro-border">
            <Link href={`/projects/${project.id}`}>
              View Details
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}