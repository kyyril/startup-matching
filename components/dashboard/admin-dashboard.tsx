import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart3Icon, 
  CheckCircleIcon, 
  ClockIcon, 
  DollarSignIcon, 
  ShieldIcon, 
  UsersIcon, 
  XCircleIcon 
} from 'lucide-react';
import { mockProjects } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mocked chart data
const userSignupData = [
  { name: 'Jan', founders: 12, investors: 8 },
  { name: 'Feb', founders: 15, investors: 10 },
  { name: 'Mar', founders: 18, investors: 14 },
  { name: 'Apr', founders: 24, investors: 16 },
  { name: 'May', founders: 32, investors: 22 },
  { name: 'Jun', founders: 38, investors: 28 },
  { name: 'Jul', founders: 45, investors: 34 },
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,842</div>
            <p className="text-xs text-muted-foreground mt-2">
              +24% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-2">
              Projects awaiting review
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$35,210</div>
            <p className="text-xs text-muted-foreground mt-2">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="retro-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <ShieldIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Healthy</div>
            <p className="text-xs text-muted-foreground mt-2">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="retro-border">
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>
            New user signups by month and type
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={userSignupData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
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
              <Legend />
              <Bar 
                dataKey="founders" 
                fill="hsl(var(--chart-1))" 
                name="Founders" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="investors" 
                fill="hsl(var(--chart-2))" 
                name="Investors" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Project Approvals</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4">
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>Pending Project Approvals</CardTitle>
              <CardDescription>
                Review and approve new project submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Founder</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProjects.slice(0, 3).map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={project.founderAvatar} alt={project.founder} />
                            <AvatarFallback>{project.founder.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{project.founder}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{project.category}</Badge>
                      </TableCell>
                      <TableCell>2 hours ago</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <CheckCircleIcon className="mr-1 h-4 w-4 text-green-500" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircleIcon className="mr-1 h-4 w-4 text-red-500" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-4">
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>
                Key metrics and performance indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Connection Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">28.4%</div>
                      <p className="text-xs text-muted-foreground">
                        +4.2% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Avg. Time to Fund</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">42 days</div>
                      <p className="text-xs text-muted-foreground">
                        -3 days from last quarter
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Platform Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">73%</div>
                      <p className="text-xs text-muted-foreground">
                        Weekly active users
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Most Active Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Technology</span>
                          <span className="font-medium">32%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Healthcare</span>
                          <span className="font-medium">24%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Fintech</span>
                          <span className="font-medium">18%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sustainability</span>
                          <span className="font-medium">14%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Consumer</span>
                          <span className="font-medium">12%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">User Retention</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>30-day retention</span>
                          <span className="font-medium">76%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>60-day retention</span>
                          <span className="font-medium">68%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>90-day retention</span>
                          <span className="font-medium">62%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>6-month retention</span>
                          <span className="font-medium">54%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>12-month retention</span>
                          <span className="font-medium">42%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <Card className="retro-border">
            <CardHeader>
              <CardTitle>Recent User Registrations</CardTitle>
              <CardDescription>
                Latest users who joined the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" alt="User" />
                          <AvatarFallback>LA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Lisa Anderson</p>
                          <p className="text-xs text-muted-foreground">lisa@example.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Founder</Badge>
                    </TableCell>
                    <TableCell>2 hours ago</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="User" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Mark Johnson</p>
                          <p className="text-xs text-muted-foreground">mark@example.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Investor</Badge>
                    </TableCell>
                    <TableCell>5 hours ago</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        Pending Verification
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="User" />
                          <AvatarFallback>SW</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Sarah Williams</p>
                          <p className="text-xs text-muted-foreground">sarah@example.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Founder</Badge>
                    </TableCell>
                    <TableCell>12 hours ago</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt="User" />
                          <AvatarFallback>DT</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">David Thompson</p>
                          <p className="text-xs text-muted-foreground">david@example.com</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Investor</Badge>
                    </TableCell>
                    <TableCell>1 day ago</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}