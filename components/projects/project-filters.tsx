'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FilterIcon, RefreshCcwIcon } from 'lucide-react';
import { projectCategories, projectStages, projectLocations } from '@/lib/constants';
import { FilterType } from '@/lib/types/types';

interface ProjectFiltersProps {
  filters: FilterType;
  setFilters: (filters: FilterType) => void;
}

export function ProjectFilters({ filters, setFilters }: ProjectFiltersProps) {
  const [fundingRange, setFundingRange] = useState<[number, number]>([
    filters.fundingRange?.min || 0,
    filters.fundingRange?.max || 1000000,
  ]);
  
  const toggleCategory = (category: string) => {
    if (filters.category.includes(category)) {
      setFilters({
        ...filters,
        category: filters.category.filter(c => c !== category),
      });
    } else {
      setFilters({
        ...filters,
        category: [...filters.category, category],
      });
    }
  };
  
  const toggleStage = (stage: string) => {
    if (filters.stage.includes(stage)) {
      setFilters({
        ...filters,
        stage: filters.stage.filter(s => s !== stage),
      });
    } else {
      setFilters({
        ...filters,
        stage: [...filters.stage, stage],
      });
    }
  };
  
  const toggleLocation = (location: string) => {
    if (filters.location.includes(location)) {
      setFilters({
        ...filters,
        location: filters.location.filter(l => l !== location),
      });
    } else {
      setFilters({
        ...filters,
        location: [...filters.location, location],
      });
    }
  };
  
  const handleFundingRangeChange = (value: number[]) => {
    setFundingRange([value[0], value[1]]);
    setFilters({
      ...filters,
      fundingRange: {
        min: value[0],
        max: value[1],
      },
    });
  };
  
  const resetFilters = () => {
    setFilters({
      category: [],
      stage: [],
      fundingRange: null,
      location: [],
    });
    setFundingRange([0, 1000000]);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FilterIcon className="h-5 w-5 mr-2" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={resetFilters}
          className="text-primary"
        >
          <RefreshCcwIcon className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>
      
      <Card className="retro-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Category</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3">
          {projectCategories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={filters.category.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`} className="flex-1 cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card className="retro-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Stage</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3">
          {projectStages.map((stage) => (
            <div key={stage} className="flex items-center space-x-2">
              <Checkbox 
                id={`stage-${stage}`} 
                checked={filters.stage.includes(stage)}
                onCheckedChange={() => toggleStage(stage)}
              />
              <Label htmlFor={`stage-${stage}`} className="flex-1 cursor-pointer">
                {stage}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card className="retro-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Funding Goal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            defaultValue={[fundingRange[0], fundingRange[1]]}
            max={1000000}
            step={50000}
            value={[fundingRange[0], fundingRange[1]]}
            onValueChange={handleFundingRangeChange}
            className="my-6"
          />
          <div className="flex justify-between">
            <p className="text-sm">${fundingRange[0].toLocaleString()}</p>
            <p className="text-sm">${fundingRange[1].toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="retro-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {projectLocations.slice(0, 6).map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox 
                id={`location-${location}`} 
                checked={filters.location.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              />
              <Label htmlFor={`location-${location}`} className="flex-1 cursor-pointer">
                {location}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}