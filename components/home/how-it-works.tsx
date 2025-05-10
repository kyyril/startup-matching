'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2Icon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  steps: Step[];
}

export function HowItWorks({ title, steps }: HowItWorksProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className={`h-full retro-border relative overflow-hidden ${hoveredIndex === index ? 'ring-2 ring-primary' : ''}`}>
              <div className="absolute -right-4 -top-4 bg-primary h-16 w-16 rounded-full flex items-end justify-start p-2">
                <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
              </div>
              <CardContent className="pt-8 pb-6">
                <div className="space-y-2">
                  <CheckCircle2Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}