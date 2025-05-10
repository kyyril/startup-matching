'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FounderDashboard } from '@/components/dashboard/founder-dashboard';
import { InvestorDashboard } from '@/components/dashboard/investor-dashboard';
import { AdminDashboard } from '@/components/dashboard/admin-dashboard';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

// Mock function to simulate authentication
const getUserRole = () => {
  // In a real app, this would come from your auth system
  // For demo, we'll randomly pick a role or allow selection
  return localStorage.getItem('userRole') || 'founder';
};

export default function DashboardPage() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      const userRole = getUserRole();
      setRole(userRole);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoleChange = (newRole: string) => {
    localStorage.setItem('userRole', newRole);
    setRole(newRole);
    toast({
      title: "Role Changed",
      description: `You are now viewing the dashboard as a ${newRole}.`,
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="space-y-4">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-[500px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8 retro-border">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Manage your projects, investments, and connections.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button 
              variant={role === 'founder' ? 'default' : 'outline'} 
              onClick={() => handleRoleChange('founder')}
              className="retro-button"
            >
              View as Founder
            </Button>
            <Button 
              variant={role === 'investor' ? 'default' : 'outline'} 
              onClick={() => handleRoleChange('investor')}
              className="retro-button"
            >
              View as Investor
            </Button>
            <Button 
              variant={role === 'admin' ? 'default' : 'outline'} 
              onClick={() => handleRoleChange('admin')}
              className="retro-button"
            >
              View as Admin
            </Button>
          </div>
        </CardContent>
      </Card>

      {role === 'founder' && <FounderDashboard />}
      {role === 'investor' && <InvestorDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </div>
  );
}