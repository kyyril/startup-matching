'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Metrics } from '@/lib/types/types';

interface ProjectMetricsProps {
  metrics: Metrics;
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="retro-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Monthly Active Users</CardTitle>
            <CardDescription>User growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.activeUsers.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mb-6">
              +{metrics.userGrowthRate}% from last month
            </p>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics.userGrowth}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '0.375rem',
                    }}
                    labelStyle={{
                      color: 'hsl(var(--foreground))',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="retro-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue</CardTitle>
            <CardDescription>Monthly revenue in USD</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${metrics.revenue.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mb-6">
              +{metrics.revenueGrowthRate}% from last month
            </p>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metrics.revenueGrowth}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '0.375rem',
                    }}
                    labelStyle={{
                      color: 'hsl(var(--foreground))',
                    }}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="hsl(var(--chart-2))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="retro-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Engagement</CardTitle>
            <CardDescription>User retention metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.retentionRate}%</div>
            <p className="text-sm text-muted-foreground mb-6">
              30-day user retention rate
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Daily Active Users</span>
                  <span>{metrics.dailyActiveUsers.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chart-3 rounded-full"
                    style={{ width: `${(metrics.dailyActiveUsers / metrics.activeUsers) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Weekly Active Users</span>
                  <span>{metrics.weeklyActiveUsers.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-chart-3 rounded-full"
                    style={{ width: `${(metrics.weeklyActiveUsers / metrics.activeUsers) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="retro-border">
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
          <CardDescription>
            Core metrics that demonstrate traction and growth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Customer Acquisition Cost</p>
              <p className="text-2xl font-bold">${metrics.customerAcquisitionCost}</p>
              <p className="text-sm text-muted-foreground">
                Cost to acquire each user
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-muted-foreground">Lifetime Value</p>
              <p className="text-2xl font-bold">${metrics.lifetimeValue}</p>
              <p className="text-sm text-muted-foreground">
                Revenue per user over time
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold">{metrics.conversionRate}%</p>
              <p className="text-sm text-muted-foreground">
                Visitors who become customers
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-muted-foreground">Churn Rate</p>
              <p className="text-2xl font-bold">{metrics.churnRate}%</p>
              <p className="text-sm text-muted-foreground">
                Monthly customer turnover
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}