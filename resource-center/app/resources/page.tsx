"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  FileText,
  Video,
  CheckSquare,
  Lightbulb,
  Search,
  Sparkles,
  Clock,
  TrendingUp,
  Bookmark,
  Play,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

type ContentCardProps = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image?: string;
  trending?: boolean;
};

function ContentCard({ title, description, category, readTime, image, trending }: ContentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
          <div className="absolute inset-0 bg-muted animate-pulse" />
        </div>
      )}
      
      <div className="relative p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {category}
          </span>
          {trending && (
            <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
              <TrendingUp className="h-3 w-3" />
              Trending
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{readTime}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8 gap-1.5">
            <Bookmark className="h-3.5 w-3.5" />
            Save
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

type VideoCardProps = {
  title: string;
  platform: 'tiktok' | 'instagram' | 'youtube';
  thumbnail?: string;
  duration?: string;
};

function VideoCard({ title, platform, thumbnail, duration }: VideoCardProps) {
  const platformIcons = {
    tiktok: Play,
    instagram: Instagram,
    youtube: Youtube,
  };
  
  const platformColors = {
    tiktok: 'from-pink-500 to-cyan-500',
    instagram: 'from-purple-500 via-pink-500 to-orange-500',
    youtube: 'from-red-600 to-red-500',
  };
  
  const Icon = platformIcons[platform];
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-card border border-border/50 cursor-pointer"
    >
      <div className="relative aspect-[9/16] md:aspect-video overflow-hidden bg-muted">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", platformColors[platform])} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn(
            "h-16 w-16 rounded-full bg-gradient-to-br flex items-center justify-center",
            platformColors[platform],
            "shadow-lg group-hover:scale-110 transition-transform"
          )}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        {duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
            {duration}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

export default function ResourceCenterPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const categories = [
    { id: "all", label: "All Content", icon: Sparkles },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "guides", label: "Guides", icon: BookOpen },
    { id: "checklists", label: "Checklists", icon: CheckSquare },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tips", label: "Pro Tips", icon: Lightbulb },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Premium Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Resource Center
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Search content..."
                  className="pl-10 w-[300px] bg-muted/50 border-border/50 focus:bg-muted"
                />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Your knowledge hub
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Everything You Need<br />to Succeed
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Articles, guides, checklists, and expert insights—all in one place
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "gap-2 rounded-full px-6",
                    selectedCategory === cat.id && "shadow-lg shadow-primary/25"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          <ContentCard
            title="Mastering the Discovery Call"
            description="Learn proven techniques to uncover client needs and build trust from the first conversation."
            category="Article"
            readTime="8 min read"
            trending
          />
          <ContentCard
            title="The Ultimate Prospecting Checklist"
            description="Never miss a step with this comprehensive guide to identifying and qualifying leads."
            category="Checklist"
            readTime="5 min read"
          />
          <ContentCard
            title="Objection Handling Framework"
            description="Transform objections into opportunities with this proven step-by-step approach."
            category="Guide"
            readTime="12 min read"
            trending
          />
          <ContentCard
            title="Top 10 Closing Techniques"
            description="Master the art of closing deals with these time-tested strategies from top performers."
            category="Article"
            readTime="10 min read"
          />
          <ContentCard
            title="Weekly Success Planner"
            description="Plan your week like a pro with this structured approach to goal setting and execution."
            category="Checklist"
            readTime="3 min read"
          />
          <ContentCard
            title="Building Long-Term Client Relationships"
            description="Strategies for creating lasting connections that drive referrals and repeat business."
            category="Guide"
            readTime="15 min read"
          />
        </motion.div>

        {/* Casey's Content Vault */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 blur-lg opacity-75" />
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-1">
                    <div className="h-full w-full rounded-full overflow-hidden bg-background">
                      <img 
                        src="/casey-headshot.png" 
                        alt="Casey Dahl" 
                        className="h-full w-full object-cover scale-125 object-[center_1%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                    Casey's Content Vault
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="text-sm text-muted-foreground">Exclusive insights from our founder</p>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 0.8, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-12"
                    >
                      {/* Dark mode - white signature */}
                      <img 
                        src="/casey-signature-white.png" 
                        alt="Casey Dahl Signature" 
                        className="h-full w-auto object-contain dark:block hidden"
                      />
                      {/* Light mode - black signature */}
                      <img 
                        src="/casey-signature-black.png" 
                        alt="Casey Dahl Signature" 
                        className="h-full w-auto object-contain dark:hidden block"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Get direct access to Casey Dahl's latest content across TikTok, Instagram, and YouTube. 
                Real stories, actionable advice, and insider perspectives on building success.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <VideoCard
                  title="How I Built My First Team"
                  platform="youtube"
                  duration="8:42"
                />
                <VideoCard
                  title="Morning Routine for Success"
                  platform="instagram"
                  duration="0:45"
                />
                <VideoCard
                  title="5 Mistakes New Agents Make"
                  platform="tiktok"
                  duration="0:58"
                />
                <VideoCard
                  title="My #1 Prospecting Tip"
                  platform="youtube"
                  duration="5:23"
                />
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="gap-2 rounded-full">
                  <ExternalLink className="h-4 w-4" />
                  View All Content
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full">
                  <Bookmark className="h-4 w-4" />
                  Save to Library
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
