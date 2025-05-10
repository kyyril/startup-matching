'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    content: "Launchpad helped us connect with the perfect investor who not only provided funding but also brought valuable industry expertise to our startup.",
    author: {
      name: "Michael Rivera",
      role: "Founder, TechSolutions",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
  },
  {
    id: 2,
    content: "As an investor, I've found several promising startups through Launchpad that I wouldn't have discovered otherwise. The platform's vetting process ensures quality projects.",
    author: {
      name: "Sophia Chen",
      role: "Angel Investor",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  },
  {
    id: 3,
    content: "The structured approach to presenting project information made our fundraising process significantly more efficient. We closed our seed round in record time.",
    author: {
      name: "James Wilson",
      role: "CEO, GreenTech Innovations",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    id: 4,
    content: "Launchpad's platform provided us with high-quality leads and connections that were actually relevant to our industry focus. Worth every penny of the subscription.",
    author: {
      name: "Olivia Martinez",
      role: "VC Partner, Future Fund",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      onSelect={(index) => setActiveIndex(index)}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className={cn(
                "h-full retro-border transition-all",
                activeIndex === index ? "ring-2 ring-primary" : ""
              )}>
                <CardContent className="p-6 space-y-4">
                  <QuoteIcon className="h-8 w-8 text-primary opacity-50" />
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                      <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.author.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6">
        <CarouselPrevious className="static mx-2 transform-none" />
        <CarouselNext className="static mx-2 transform-none" />
      </div>
    </Carousel>
  );
}