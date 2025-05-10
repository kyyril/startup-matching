'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  HeartIcon, Share2Icon, BarChart3Icon, Users2Icon, 
  TargetIcon, GlobeIcon, CalendarIcon, Banknote 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProjectGallery } from '@/components/projects/project-gallery';
import { ProjectTeam } from '@/components/projects/project-team';
import { ProjectMetrics } from '@/components/projects/project-metrics';
import { ContactFounderForm } from '@/components/projects/contact-founder-form';
import { mockProjects } from '@/lib/mock-data';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { stageColorMap } from '@/lib/constants';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = useState(false);
  
  // In a real app, fetch the project from API
  const project = mockProjects.find(p => p.id === params.id) || mockProjects[0];
  
  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: bookmarked ? "Project removed from your saved items" : "Project saved to your bookmarks",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Project link copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6"
      >
        ← Back to projects
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden retro-border">
            <Image 
              src={project.coverImage} 
              alt={project.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-bold text-white">{project.name}</h1>
                  <p className="text-white/80">{project.shortDescription}</p>
                </div>
                <Badge 
                  className={cn(
                    "text-sm py-1.5",
                    stageColorMap[project.stage] || "bg-secondary"
                  )}
                >
                  {project.stage}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant="outline">{project.location}</Badge>
            <Badge variant="outline">{project.technology.join(', ')}</Badge>
            <div className="flex-1"></div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBookmark}
              className={bookmarked ? "text-primary" : ""}
            >
              <HeartIcon className={cn("h-4 w-4 mr-2", bookmarked ? "fill-primary" : "")} />
              {bookmarked ? "Saved" : "Save"}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
            >
              <Share2Icon className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 animate-in fade-in-50">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
                <p className="text-muted-foreground">
                  {project.problemStatement}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Business Model</h3>
                <p className="text-muted-foreground">
                  {project.businessModel}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="animate-in fade-in-50">
              <ProjectGallery images={project.gallery} />
            </TabsContent>
            
            <TabsContent value="team" className="animate-in fade-in-50">
              <ProjectTeam team={project.team} />
            </TabsContent>
            
            <TabsContent value="metrics" className="animate-in fade-in-50">
              <ProjectMetrics metrics={project.metrics} />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>Funding Goal</CardTitle>
              <CardDescription>Current funding round details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Seeking</span>
                <span className="text-2xl font-bold">${project.fundingGoal.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center">
                  <TargetIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>{project.equity}% equity offered</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Funding closes {project.fundingEndDate}</span>
                </div>
                <div className="flex items-center">
                  <Banknote className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Min investment: ${project.minInvestment.toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full retro-button">
                Express Interest
              </Button>
            </CardContent>
          </Card>
          
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>Contact Founder</CardTitle>
              <CardDescription>Send a message or request a demo</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactFounderForm projectId={project.id} founderName={project.founder} />
            </CardContent>
          </Card>
          
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>At a Glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Founded</span>
                  <span>{project.foundedYear}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Location</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Team Size</span>
                  <span>{project.teamSize} people</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Revenue</span>
                  <span>{project.revenue}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}