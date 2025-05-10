'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users2Icon, 
  Briefcase, 
  Rocket, 
  BarChart2 
} from 'lucide-react';

const stats = [
  {
    id: 1,
    name: "Active Projects",
    value: 450,
    icon: Rocket,
    description: "Innovative startups seeking funding",
  },
  {
    id: 2,
    name: "Investors",
    value: 2300,
    icon: Briefcase,
    description: "Angels, VCs and corporate investors",
  },
  {
    id: 3,
    name: "Founders",
    value: 3500,
    icon: Users2Icon,
    description: "Entrepreneurs building the future",
  },
  {
    id: 4,
    name: "Successful Investments",
    value: 185,
    icon: BarChart2,
    description: "Funding deals closed on our platform",
  },
];

export function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    
    const step = stats.map(stat => (stat.value / (duration / interval)));
    
    const timer = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map((count, i) => {
          const newCount = count + step[i];
          return newCount >= stats[i].value ? stats[i].value : newCount;
        })
      );
    }, interval);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="py-16 retro-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={stat.id} className="retro-border bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold">
                  {Math.round(counters[index]).toLocaleString()}
                </p>
                <p className="font-medium">{stat.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}