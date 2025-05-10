'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  projectCategories, projectStages, projectLocations, technologies
} from '@/lib/constants';
import { CreateProjectMediaUpload } from '@/components/projects/create-project-media-upload';
import { CreateProjectTeamMembers } from '@/components/projects/create-project-team-members';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, { message: "Project name must be at least 3 characters" }),
  shortDescription: z.string().max(150, { message: "Short description cannot exceed 150 characters" }),
  description: z.string().min(100, { message: "Description must be at least 100 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  stage: z.string().min(1, { message: "Please select a stage" }),
  location: z.string().min(1, { message: "Please select a location" }),
  problemStatement: z.string().min(50, { message: "Problem statement must be at least 50 characters" }),
  solution: z.string().min(50, { message: "Solution must be at least 50 characters" }),
  businessModel: z.string().min(50, { message: "Business model must be at least 50 characters" }),
  fundingGoal: z.string().min(1, { message: "Please enter your funding goal" }),
  equity: z.string().min(1, { message: "Please enter the equity percentage" }),
  minInvestment: z.string().min(1, { message: "Please enter minimum investment" }),
  foundedYear: z.string().min(1, { message: "Please enter founding year" }),
  revenue: z.string().optional(),
  website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
});

export default function CreateProjectPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState("basic");
  const [submitting, setSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      shortDescription: "",
      description: "",
      category: "",
      stage: "",
      location: "",
      problemStatement: "",
      solution: "",
      businessModel: "",
      fundingGoal: "",
      equity: "",
      minInvestment: "",
      foundedYear: "",
      revenue: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      toast({
        title: "Project submitted",
        description: "Your project has been submitted for review",
      });
      router.push('/dashboard');
    }, 2000);
  }

  const goToNextTab = () => {
    if (currentTab === "basic") {
      form.trigger(["name", "shortDescription", "description", "category", "stage", "location"]);
      const basicFieldsValid = !form.formState.errors.name && 
                              !form.formState.errors.shortDescription && 
                              !form.formState.errors.description && 
                              !form.formState.errors.category && 
                              !form.formState.errors.stage && 
                              !form.formState.errors.location;
      
      if (basicFieldsValid) {
        setCurrentTab("details");
      }
    } else if (currentTab === "details") {
      form.trigger(["problemStatement", "solution", "businessModel"]);
      const detailsFieldsValid = !form.formState.errors.problemStatement && 
                               !form.formState.errors.solution && 
                               !form.formState.errors.businessModel;
      
      if (detailsFieldsValid) {
        setCurrentTab("funding");
      }
    } else if (currentTab === "funding") {
      form.trigger(["fundingGoal", "equity", "minInvestment", "foundedYear"]);
      const fundingFieldsValid = !form.formState.errors.fundingGoal && 
                               !form.formState.errors.equity && 
                               !form.formState.errors.minInvestment && 
                               !form.formState.errors.foundedYear;
      
      if (fundingFieldsValid) {
        setCurrentTab("media");
      }
    } else if (currentTab === "media") {
      setCurrentTab("team");
    }
  };

  const goToPrevTab = () => {
    if (currentTab === "details") {
      setCurrentTab("basic");
    } else if (currentTab === "funding") {
      setCurrentTab("details");
    } else if (currentTab === "media") {
      setCurrentTab("funding");
    } else if (currentTab === "team") {
      setCurrentTab("media");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Submit Your Project</h1>
          <p className="text-muted-foreground">Showcase your startup to potential investors</p>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="mt-6 animate-in fade-in-50">
              <Card className="p-6 retro-border">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your project name" {...field} className="retro-input" />
                        </FormControl>
                        <FormDescription>
                          This is the name that will be displayed to potential investors.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Input placeholder="A brief one-line description" {...field} className="retro-input" />
                        </FormControl>
                        <FormDescription>
                          A concise summary of your project (max 150 characters).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your project in detail" 
                            {...field} 
                            rows={5}
                            className="retro-input"
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a comprehensive description of your project, its goals, and vision.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="retro-input">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="stage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stage</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="retro-input">
                                <SelectValue placeholder="Select stage" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectStages.map((stage) => (
                                <SelectItem key={stage} value={stage}>
                                  {stage}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Location</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="retro-input">
                                <SelectValue placeholder="Select location" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectLocations.map((location) => (
                                <SelectItem key={location} value={location}>
                                  {location}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    type="button" 
                    onClick={goToNextTab}
                    className="retro-button"
                  >
                    Next: Project Details
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6 animate-in fade-in-50">
              <Card className="p-6 retro-border">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="problemStatement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Problem Statement</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="What problem are you solving?" 
                            {...field} 
                            rows={3}
                            className="retro-input"
                          />
                        </FormControl>
                        <FormDescription>
                          Clearly define the problem your project aims to solve.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="solution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Solution</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How does your project solve this problem?" 
                            {...field} 
                            rows={3}
                            className="retro-input"
                          />
                        </FormControl>
                        <FormDescription>
                          Explain your solution and how it addresses the problem.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Model</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How will your project generate revenue?" 
                            {...field} 
                            rows={3}
                            className="retro-input"
                          />
                        </FormControl>
                        <FormDescription>
                          Describe your business model, revenue streams, and monetization strategy.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourproject.com" {...field} className="retro-input" />
                        </FormControl>
                        <FormDescription>
                          Add your project's website if available.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPrevTab}
                    className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={goToNextTab}
                    className="retro-button"
                  >
                    Next: Funding Details
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="funding" className="mt-6 animate-in fade-in-50">
              <Card className="p-6 retro-border">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fundingGoal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Funding Goal ($)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="500000" 
                              {...field} 
                              className="retro-input"
                            />
                          </FormControl>
                          <FormDescription>
                            How much funding are you seeking?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="equity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Equity Offered (%)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="15" 
                              {...field} 
                              className="retro-input"
                            />
                          </FormControl>
                          <FormDescription>
                            What percentage of equity are you offering?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="minInvestment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Minimum Investment ($)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="25000" 
                              {...field} 
                              className="retro-input"
                            />
                          </FormControl>
                          <FormDescription>
                            What is the minimum investment amount?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="foundedYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Founded Year</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="2023" 
                              {...field} 
                              className="retro-input"
                            />
                          </FormControl>
                          <FormDescription>
                            When was your company founded?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Revenue (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Pre-revenue or enter amount" 
                            {...field} 
                            className="retro-input"
                          />
                        </FormControl>
                        <FormDescription>
                          What is your current revenue status?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPrevTab}
                    className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={goToNextTab}
                    className="retro-button"
                  >
                    Next: Media
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="media" className="mt-6 animate-in fade-in-50">
              <Card className="p-6 retro-border">
                <CreateProjectMediaUpload />
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPrevTab}
                    className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button" 
                    onClick={goToNextTab}
                    className="retro-button"
                  >
                    Next: Team Members
                  </Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="mt-6 animate-in fade-in-50">
              <Card className="p-6 retro-border">
                <CreateProjectTeamMembers />
                
                <div className="flex justify-between mt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={goToPrevTab}
                    className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    disabled={submitting}
                    className="retro-button"
                  >
                    {submitting ? "Submitting..." : "Submit Project"}
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}