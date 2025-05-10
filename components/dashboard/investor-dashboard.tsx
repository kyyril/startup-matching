'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3Icon, 
  BookmarkIcon, 
  ChevronRightIcon, 
  HeartIcon, 
  SearchIcon, 
  UserIcon, 
  ZapIcon
} from 'lucide-react';
import { mockProjects } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DashboardProjectCard } from '@/components/dashboard/dashboard-project-card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

// Mocked chart data
const chartData = [
  { name: 'Jan', projects: 4 },
  { name: 'Feb', projects: 6 },
  { name: 'Mar', projects: 8 },
  { name: 'Apr', projects: 12 },
  { name: 'May', projects: 16 },
  { name: 'Jun', projects: 18 },
  { name: 'Jul', projects: 24 },
];

export function InvestorDashboard() {
  // Get all projects for discovery
  const discoverProjects = mockProjects.slice(0, 4);
  
  // Get bookmarked projects (just using first two for demo)
  const bookmarkedProjects = mockProjects.slice(0, 2);
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Viewed</CardTitle>
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-2">
              +6 in the last week
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookmarked</CardTitle>
            <BookmarkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-2">
              +2 since yesterday
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connections</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">
              3 new connections this month
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Projects</CardTitle>
            <ZapIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground mt-2">
              Matching your investment criteria
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="retro-border">
        <CardHeader>
          <CardTitle>Project Discovery Activity</CardTitle>
          <CardDescription>
            Your project viewing and bookmarking trends over time
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '0.375rem',
                }}
                labelStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{
                  fill: 'hsl(var(--background))',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: A6,
                  fill: 'hsl(var(--primary))',
                  stroke: 'hsl(var(--background))',
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="discover" className="space-y-4">
        <TabsList>
          <TabsTrigger value="discover">Discover Projects</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discover" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">New Projects to Discover</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/projects">
                View All
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discoverProjects.map((project) => (
              <DashboardProjectCard 
                key={project.id}
                project={project}
                asFounder={false}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bookmarked" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Bookmarked Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookmarkedProjects.map((project) => (
              <DashboardProjectCard 
                key={project.id}
                project={project}
                asFounder={false}
                bookmarked
              />
            ))}
            
            {bookmarkedProjects.length === 0 && (
              <Card className="col-span-2 py-12 retro-border">
                <CardContent className="flex flex-col items-center text-center">
                  <BookmarkIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold">No bookmarked projects yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse projects and bookmark those that interest you
                  </p>
                  <Button asChild className="retro-button">
                    <Link href="/projects">Browse Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="recommended" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recommended For You</h2>
            <Button variant="outline" size="sm">
              Update Preferences
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Just use the first 2 projects for demo */}
            {mockProjects.slice(2, 4).map((project) => (
              <DashboardProjectCard 
                key={project.id}
                project={project}
                asFounder={false}
                recommended
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}