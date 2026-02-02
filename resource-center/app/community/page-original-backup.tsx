"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Search,
  TrendingUp,
  Clock,
  Users,
  Sparkles,
  Heart,
  BookmarkPlus,
  Share2,
  MoreHorizontal,
  Target,
  Lightbulb,
  Trophy,
  HelpCircle,
  BookOpen,
  GraduationCap,
  PartyPopper,
  LayoutGrid,
  Activity,
  Filter,
  Plus,
  Flame,
  CheckCircle2,
  Award,
  Send,
  Smile,
  ThumbsUp,
  Zap,
  X,
  ChevronDown,
  Image as ImageIcon,
  Play,
  Link as LinkIcon,
  AlertCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

type ViewMode = "stream" | "topics";
type FilterType = "trending" | "recent" | "unanswered" | "following" | "foryou";

type Post = {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
    role?: string;
    badge?: "expert" | "mvp" | "new";
  };
  title: string;
  content: string;
  category: string;
  timestamp: string;
  stats: {
    replies: number;
    likes: number;
    views: number;
  };
  trending?: boolean;
  hasNewReplies?: boolean;
  isUnread?: boolean;
  isHot?: boolean;
  media?: {
    type: "image" | "video" | "link";
    url: string;
    thumbnail?: string;
  };
  reactions?: {
    type: "like" | "love" | "fire" | "idea" | "celebrate";
    count: number;
  }[];
  bestAnswer?: boolean;
};

type Topic = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  postCount: number;
  latestPost: {
    title: string;
    author: string;
    timestamp: string;
  };
  color: string;
};

function PostCard({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl cursor-pointer transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-semibold">
                {post.author.avatar}
              </div>
              {post.author.verified && (
                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold truncate">{post.author.name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {post.category}
                </span>
                {post.trending && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{post.timestamp}</p>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="flex-shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {post.content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{post.stats.replies}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Heart className="h-4 w-4" />
              <span>{post.stats.likes}</span>
            </button>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{post.stats.views}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 gap-1.5">
              <BookmarkPlus className="h-3.5 w-3.5" />
              Save
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl cursor-pointer transition-all"
    >
      <div className={cn("absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity", topic.color)} />
      
      <div className="relative p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", topic.color)}>
            {topic.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
              {topic.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {topic.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>{topic.postCount} posts</span>
          </div>
          
          <div className="text-xs text-muted-foreground truncate max-w-[200px]">
            Latest: {topic.latestPost.title}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunityPage() {
  const [viewMode, setViewMode] = React.useState<ViewMode>("stream");
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("trending");

  const mockPosts: Post[] = [
    {
      id: "1",
      author: { name: "Rachel Andrews", avatar: "RA", verified: true },
      title: "Just closed my biggest deal using the discovery framework!",
      content: "After implementing the discovery call framework from the training, I closed a $50k IUL policy. The key was really listening to their pain points and positioning the solution naturally. Happy to share my exact approach if anyone wants details!",
      category: "Wins",
      timestamp: "2 hours ago",
      stats: { replies: 24, likes: 89, views: 342 },
      trending: true,
    },
    {
      id: "2",
      author: { name: "Ted James", avatar: "TJ" },
      title: "Best objection handling technique you've learned?",
      content: "I'm struggling with the 'I need to think about it' objection. What's worked best for you all in handling this without being pushy?",
      category: "Questions",
      timestamp: "4 hours ago",
      stats: { replies: 18, likes: 45, views: 203 },
    },
    {
      id: "3",
      author: { name: "Yasmin Gonzalez", avatar: "YG", verified: true },
      title: "Morning routine that transformed my sales performance",
      content: "Started doing this 90-day challenge and my close rate went from 23% to 41%. Here's exactly what I do every morning before my first call...",
      category: "Tips",
      timestamp: "6 hours ago",
      stats: { replies: 31, likes: 156, views: 892 },
      trending: true,
    },
  ];

  const topics: Topic[] = [
    {
      id: "1",
      name: "Getting Started",
      icon: <Target className="h-6 w-6 text-white" />,
      description: "New member introductions and onboarding help",
      postCount: 234,
      latestPost: { title: "First day tips?", author: "Mike R.", timestamp: "1h ago" },
      color: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      id: "2",
      name: "Sales Techniques",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      description: "Share and learn proven sales strategies",
      postCount: 1563,
      latestPost: { title: "Cold calling scripts", author: "Sarah K.", timestamp: "30m ago" },
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: "3",
      name: "Deal Closures & Wins",
      icon: <Trophy className="h-6 w-6 text-white" />,
      description: "Celebrate your victories and share success stories",
      postCount: 892,
      latestPost: { title: "First $100k month!", author: "Rachel A.", timestamp: "2h ago" },
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      id: "4",
      name: "Questions & Support",
      icon: <HelpCircle className="h-6 w-6 text-white" />,
      description: "Get help from experienced professionals",
      postCount: 2103,
      latestPost: { title: "Handling objections", author: "Ted J.", timestamp: "4h ago" },
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: "5",
      name: "Product Knowledge",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Deep dives into IUL, term life, and more",
      postCount: 678,
      latestPost: { title: "IUL vs Whole Life", author: "David M.", timestamp: "5h ago" },
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      id: "6",
      name: "Training & Development",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      description: "Courses, resources, and skill building",
      postCount: 445,
      latestPost: { title: "Best training resources", author: "Alex T.", timestamp: "6h ago" },
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      id: "7",
      name: "Celebrations",
      icon: <PartyPopper className="h-6 w-6 text-white" />,
      description: "Milestones, achievements, and team wins",
      postCount: 567,
      latestPost: { title: "Hit my goal!", author: "Lisa P.", timestamp: "3h ago" },
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
  ];

  const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
    { id: "trending", label: "Trending", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "recent", label: "Recent", icon: <Clock className="h-4 w-4" /> },
    { id: "unanswered", label: "Unanswered", icon: <MessageCircle className="h-4 w-4" /> },
    { id: "following", label: "Following", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Community
            </h1>
            
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-2 p-1 rounded-lg bg-muted/50">
                <button
                  onClick={() => setViewMode("stream")}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium",
                    viewMode === "stream"
                      ? "bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Activity className="h-4 w-4" />
                  Stream
                </button>
                <button
                  onClick={() => setViewMode("topics")}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium",
                    viewMode === "topics"
                      ? "bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                  Topics
                </button>
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Half-Moon Create Button */}
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ 
          y: 2,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        className="fixed top-16 left-1/2 -translate-x-1/2 z-30 h-16 w-40 bg-gradient-to-br from-primary to-primary/80 rounded-b-full shadow-2xl flex items-center justify-center group overflow-hidden"
      >
        <Plus className="h-7 w-7 text-white transition-opacity duration-150 group-hover:opacity-0 absolute" />
        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          Create Post
        </span>
      </motion.button>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search discussions..."
              className="pl-10 rounded-full bg-muted/50 border-border/50"
            />
          </div>
          
          <Button variant="outline" size="lg" className="gap-2 rounded-full">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>

        {/* Filter Pills */}
        {viewMode === "stream" && (
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "gap-2 rounded-full whitespace-nowrap",
                  activeFilter === filter.id && "shadow-lg shadow-primary/25"
                )}
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === "stream" ? (
            <motion.div
              key="stream"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="topics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
