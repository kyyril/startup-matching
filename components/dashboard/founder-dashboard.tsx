'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  RocketIcon, 
  MessageSquareIcon, 
  BellIcon, 
  BarChart3Icon, 
  ClockIcon,
  PlusIcon,
  ChevronRightIcon,
  EyeIcon,
  HeartIcon,
  UserIcon,
  CheckCircleIcon,
  XCircleIcon,
} from 'lucide-react';
import { DashboardProjectCard } from '@/components/dashboard/dashboard-project-card';
import { mockProjects } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function FounderDashboard() {
  const [projectProgress, setProjectProgress] = useState(78);
  
  // Filter to only show the first 2 projects as if they belonged to the founder
  const myProjects = mockProjects.slice(0, 2);
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <RocketIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectProgress}%</div>
            <Progress value={projectProgress} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Complete your profile to attract more investors
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">
              +5 since yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Project Views</CardTitle>
            <EyeIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">842</div>
            <p className="text-xs text-muted-foreground mt-2">
              +24% from last week
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interested Investors</CardTitle>
            <HeartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-2">
              2 new in the last 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="investor-requests">Investor Requests</TabsTrigger>
          <TabsTrigger value="tasks">Action Items</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">My Projects</h2>
            <Button asChild className="retro-button">
              <Link href="/projects/create">
                <PlusIcon className="mr-2 h-4 w-4" />
                New Project
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects.map((project) => (
              <DashboardProjectCard 
                key={project.id}
                project={project}
                asFounder={true}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="investor-requests" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Investor Requests</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/messages">
                View All
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Card className="retro-border">
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Investor" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Angel Investor</p>
                      <p className="text-xs text-muted-foreground">For: Tech Innovators Platform</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <CheckCircleIcon className="mr-1 h-4 w-4 text-green-500" />
                      Accept
                    </Button>
                    <Button variant="outline" size="sm">
                      <XCircleIcon className="mr-1 h-4 w-4 text-red-500" />
                      Decline
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="Investor" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Sarah Miller</p>
                      <p className="text-xs text-muted-foreground">VC Partner</p>
                      <p className="text-xs text-muted-foreground">For: EcoSolutions App</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <CheckCircleIcon className="mr-1 h-4 w-4 text-green-500" />
                      Accept
                    </Button>
                    <Button variant="outline" size="sm">
                      <XCircleIcon className="mr-1 h-4 w-4 text-red-500" />
                      Decline
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Investor" />
                      <AvatarFallback>RB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Robert Brown</p>
                      <p className="text-xs text-muted-foreground">Corporate Investor</p>
                      <p className="text-xs text-muted-foreground">For: Tech Innovators Platform</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <CheckCircleIcon className="mr-1 h-4 w-4 text-green-500" />
                      Accept
                    </Button>
                    <Button variant="outline" size="sm">
                      <XCircleIcon className="mr-1 h-4 w-4 text-red-500" />
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Action Items</h2>
          </div>
          
          <Card className="retro-border">
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-amber-100 p-2">
                      <ClockIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Complete your founder profile</p>
                      <p className="text-xs text-muted-foreground">
                        Add your experience and background to build credibility
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Complete</Button>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <UserIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Add team members to Tech Innovators</p>
                      <p className="text-xs text-muted-foreground">
                        Showcase your team's expertise to potential investors
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Add Now</Button>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <BarChart3Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Update metrics for EcoSolutions App</p>
                      <p className="text-xs text-muted-foreground">
                        Add recent traction metrics to attract more investors
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-purple-100 p-2">
                      <MessageSquareIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Respond to investor messages (3)</p>
                      <p className="text-xs text-muted-foreground">
                        You have 3 unread messages from potential investors
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Messages</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}