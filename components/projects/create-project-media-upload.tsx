'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ImageIcon, 
  PlusIcon, 
  TextIcon, 
  TrashIcon, 
  UploadIcon, 
  VideoIcon, 
  XIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function CreateProjectMediaUpload() {
  const [coverImage, setCoverImage] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [demoVideo, setDemoVideo] = useState<string>('');
  const [pitch, setPitch] = useState<string>('');
  
  const removeCoverImage = () => {
    setCoverImage('');
  };
  
  const removeGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };
  
  const addGalleryImage = (url: string) => {
    if (url && !galleryImages.includes(url)) {
      setGalleryImages([...galleryImages, url]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Media Assets</h3>
        <p className="text-muted-foreground mb-6">
          Upload media to showcase your project to potential investors.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="cover-image" className="block mb-2">Cover Image</Label>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Input
                id="cover-image"
                placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                className="retro-input mb-2"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                This image will be displayed as the main cover image for your project.
              </p>
            </div>
            <Button 
              type="button" 
              variant="outline"
              className="retro-border"
              disabled={!coverImage}
              onClick={removeCoverImage}
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
          
          {coverImage && (
            <Card className="mt-4 relative border-2 border-dashed border-primary/50 bg-primary/5 overflow-hidden">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-background/80 hover:bg-background"
                onClick={removeCoverImage}
              >
                <XIcon className="h-4 w-4" />
              </Button>
              <CardContent className="p-0">
                <div className="h-[200px] flex items-center justify-center">
                  <img 
                    src={coverImage} 
                    alt="Cover preview" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div>
          <Label htmlFor="gallery-images" className="block mb-2">Gallery Images</Label>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Input
                  id="gallery-images"
                  placeholder="Enter image URL"
                  className="retro-input"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addGalleryImage((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <Button 
                  type="button" 
                  variant="outline"
                  className="retro-border"
                  onClick={() => {
                    const input = document.getElementById('gallery-images') as HTMLInputElement;
                    addGalleryImage(input.value);
                    input.value = '';
                  }}
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Add multiple images to create a gallery. Press Enter or click + after each URL.
              </p>
            </div>
          </div>
          
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {galleryImages.map((image, index) => (
                <Card key={index} className="relative overflow-hidden border-2 border-dashed border-primary/20 bg-primary/5">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full bg-background/80 hover:bg-background z-10"
                    onClick={() => removeGalleryImage(index)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                  <CardContent className="p-0">
                    <div className="h-[120px] flex items-center justify-center">
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Invalid+Image+URL';
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card 
                className={cn(
                  "flex flex-col items-center justify-center p-4 border-2 border-dashed",
                  "border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors"
                )}
                onClick={() => document.getElementById('gallery-images')?.focus()}
              >
                <ImageIcon className="h-10 w-10 text-primary/40 mb-2" />
                <p className="text-sm text-center text-muted-foreground">Add another image</p>
              </Card>
            </div>
          )}
        </div>
        
        <div>
          <Label htmlFor="demo-video" className="block mb-2">Demo Video URL (Optional)</Label>
          <Input
            id="demo-video"
            placeholder="Paste YouTube, Vimeo or other video URL"
            className="retro-input"
            value={demoVideo}
            onChange={(e) => setDemoVideo(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Add a link to a video demonstration of your product.
          </p>
        </div>
        
        <div>
          <Label htmlFor="pitch-deck" className="block mb-2">Pitch Deck URL (Optional)</Label>
          <Input
            id="pitch-deck"
            placeholder="Link to your pitch deck (Google Slides, PDF, etc.)"
            className="retro-input"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Share your pitch deck with potential investors.
          </p>
        </div>
      </div>
    </div>
  );
}