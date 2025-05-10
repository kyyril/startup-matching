'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden retro-border">
        <Image 
          src={selectedImage} 
          alt="Project image"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Card 
            key={index}
            className={cn(
              "cursor-pointer overflow-hidden",
              selectedImage === image ? "ring-2 ring-primary" : ""
            )}
            onClick={() => setSelectedImage(image)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image 
                  src={image} 
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}