'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'founders' | 'investors'>('founders');

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-0 retro-pattern opacity-10 z-0" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Where Founders Meet Investors
              </h1>
              <p className="text-xl text-muted-foreground">
                Launchpad connects innovative founders with strategic investors. 
                Showcase your startup or discover the next big thing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="retro-button">
                <Link href={activeTab === 'founders' ? "/projects/create" : "/projects"}>
                  {activeTab === 'founders' ? 'Submit Your Project' : 'Browse Projects'}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                className="border-2 border-black shadow-[3px_3px_0_0_#1a1a1a] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                onClick={() => setActiveTab(activeTab === 'founders' ? 'investors' : 'founders')}
              >
                I'm {activeTab === 'founders' ? 'an Investor' : 'a Founder'}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
            <Card className="relative retro-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
                  <div className="bg-card p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1.0 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 2 
                        }}
                      >
                        <span className="text-2xl">💡</span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold">Showcase Your Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      Present your startup to a curated network of investors
                    </p>
                  </div>
                  <div className="bg-card p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 10,
                          ease: "linear"
                        }}
                      >
                        <span className="text-2xl">🔍</span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold">Find Potential</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover promising startups aligned with your investment thesis
                    </p>
                  </div>
                  <div className="bg-card p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                        }}
                      >
                        <span className="text-2xl">🚀</span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold">Accelerate Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Access resources and connections to scale your business
                    </p>
                  </div>
                  <div className="bg-card p-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 1.5 
                        }}
                      >
                        <span className="text-2xl">🤝</span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold">Build Connections</h3>
                    <p className="text-sm text-muted-foreground">
                      Form meaningful partnerships with founders and investors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}