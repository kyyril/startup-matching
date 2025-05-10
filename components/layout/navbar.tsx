'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  BellIcon, 
  MessageSquareIcon, 
  RocketIcon, 
  SearchIcon, 
  MenuIcon, 
  UserIcon,
  SunIcon,
  MoonIcon
} from 'lucide-react';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Messages', href: '/messages' },
];

// Mock auth state
const isLoggedIn = true;
const user = {
  name: 'Jane Smith',
  email: 'jane@example.com',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
};

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <RocketIcon className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">Launchpad</span>
          </Link>
          
          <nav className="ml-10 hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="hidden md:flex w-full max-w-sm items-center space-x-2">
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-8 rounded-full bg-muted"
                  />
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <BellIcon className="h-5 w-5" />
                    <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-primary"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px] p-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-4 rounded-lg p-2 hover:bg-accent">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="User" />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">John Doe</span>{" "}
                            expressed interest in your project
                          </p>
                          <p className="text-xs text-muted-foreground">
                            2 minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 rounded-lg p-2 hover:bg-accent">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg" alt="User" />
                          <AvatarFallback>AT</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">Alicia Thompson</span>{" "}
                            sent you a message
                          </p>
                          <p className="text-xs text-muted-foreground">
                            1 hour ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link 
                        href="/notifications" 
                        className="text-xs text-primary underline underline-offset-4"
                      >
                        View all notifications
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/messages">
                <Button variant="ghost" size="icon" className="relative">
                  <MessageSquareIcon className="h-5 w-5" />
                  <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-primary"></span>
                </Button>
              </Link>
              
              <ModeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-8 w-8 rounded-full"
                    aria-label="User menu"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <ModeToggle />
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="retro-button">
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary p-2 rounded-md",
                      pathname === item.href
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {!isLoggedIn && (
                  <>
                    <Link
                      href="/login"
                      className="text-base font-medium transition-colors hover:text-primary p-2 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="bg-primary text-primary-foreground p-2 rounded-md text-base font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}