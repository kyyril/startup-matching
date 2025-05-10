import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HowItWorks } from '@/components/home/how-it-works';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedProjects } from '@/components/home/featured-projects';
import { Testimonials } from '@/components/home/testimonials';
import { Stats } from '@/components/home/stats';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="founders" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger 
                value="founders" 
                className="text-lg py-3 data-[state=active]:shadow-[3px_3px_0_0_#1a1a1a]"
              >
                For Founders
              </TabsTrigger>
              <TabsTrigger 
                value="investors" 
                className="text-lg py-3 data-[state=active]:shadow-[3px_3px_0_0_#1a1a1a]"
              >
                For Investors
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="founders" className="space-y-8 animate-in fade-in-50 slide-in-from-left-5">
            <HowItWorks 
              title="Launch Your Startup with the Right Support"
              steps={[
                { title: "Create your profile", description: "Showcase your team's expertise and vision" },
                { title: "Publish your project", description: "Add details about your idea, traction, and goals" },
                { title: "Connect with investors", description: "Receive interest and schedule meetings" },
                { title: "Secure funding", description: "Finalize deals and grow your startup" }
              ]}
            />
          </TabsContent>
          
          <TabsContent value="investors" className="space-y-8 animate-in fade-in-50 slide-in-from-right-5">
            <HowItWorks 
              title="Discover the Next Big Innovation"
              steps={[
                { title: "Build your profile", description: "Showcase your investment expertise and focus" },
                { title: "Browse projects", description: "Explore ventures filtered to your interests" },
                { title: "Connect with founders", description: "Schedule demos and discussions" },
                { title: "Invest with confidence", description: "Support vetted startups with potential" }
              ]}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <FeaturedProjects />
        </div>
      </div>
      
      <Stats />
      
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}