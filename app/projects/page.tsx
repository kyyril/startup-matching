'use client';

import { useState } from 'react';
import { ProjectList } from '@/components/projects/project-list';
import { ProjectFilters } from '@/components/projects/project-filters';
import { SearchBar } from '@/components/projects/search-bar';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { mockProjects } from '@/lib/mock-data';
import { FilterType } from '@/lib/types/types';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterType>({
    category: [],
    stage: [],
    fundingRange: null,
    location: [],
  });

  const filteredProjects = mockProjects.filter(project => {
    // Search query filter
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !project.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (activeFilters.category.length > 0 && 
        !activeFilters.category.includes(project.category)) {
      return false;
    }
    
    // Stage filter
    if (activeFilters.stage.length > 0 && 
        !activeFilters.stage.includes(project.stage)) {
      return false;
    }
    
    // Location filter
    if (activeFilters.location.length > 0 && 
        !activeFilters.location.includes(project.location)) {
      return false;
    }
    
    // Funding Range filter
    if (activeFilters.fundingRange) {
      const { min, max } = activeFilters.fundingRange;
      if ((min !== null && project.fundingGoal < min) || 
          (max !== null && project.fundingGoal > max)) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Discover Projects</h1>
          <p className="text-muted-foreground">Find innovative startups looking for investors</p>
        </div>
        <Link href="/projects/create">
          <Button className="retro-button">
            <PlusIcon className="mr-2 h-4 w-4" />
            Submit Project
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProjectFilters 
            filters={activeFilters} 
            setFilters={setActiveFilters} 
          />
        </div>
        
        <div className="lg:col-span-3">
          <SearchBar 
            query={searchQuery} 
            setQuery={setSearchQuery}
            count={filteredProjects.length}
          />
          
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}