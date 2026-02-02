"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageCircle, Search, TrendingUp, Clock, Users, Sparkles, Heart, BookmarkPlus,
  Share2, MoreHorizontal, Target, Lightbulb, Trophy, HelpCircle, BookOpen,
  GraduationCap, PartyPopper, LayoutGrid, Activity, Filter, Plus, Flame,
  CheckCircle2, Award, Send, Smile, ThumbsUp, Zap, X, ChevronDown,
  Image as ImageIcon, Play, Link as LinkIcon, AlertCircle, Loader2
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

type ViewMode = "stream" | "topics";
type FilterType = "foryou" | "trending" | "recent" | "unanswered" | "following";

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
  stats: { replies: number; likes: number; views: number; };
  trending?: boolean;
  hasNewReplies?: boolean;
  isUnread?: boolean;
  isHot?: boolean;
  media?: {
    type: "image" | "video" | "link";
    url: string;
    thumbnail?: string;
    title?: string;
  };
  reactions?: { type: "like" | "love" | "fire" | "idea" | "celebrate"; count: number; }[];
  bestAnswer?: boolean;
};

// Skeleton Loader Component
function PostSkeleton() {
  return (
    <div className="rounded-2xl bg-card/40 border border-border/50 p-6 animate-pulse">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-12 w-12 rounded-full bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-muted rounded" />
          <div className="h-3 w-24 bg-muted rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-5 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
    </div>
  );
}

// Activity Pulse Component
function ActivityPulse({ count }: { count: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-2 w-2 rounded-full bg-green-400"
      />
      <span className="text-xs font-medium text-green-400">{count} active now</span>
    </motion.div>
  );
}

// Search Autocomplete Component
function SmartSearch({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  
  const suggestions = ["How to close deals", "Objection handling", "Best cold calling scripts"];
  const recentSearches = ["IUL vs Whole Life", "First month tips"];
  
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
      <Input
        type="search"
        placeholder="Search discussions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="pl-10 rounded-full bg-muted/50 border-border/50"
      />
      
      <AnimatePresence>
        {showSuggestions && (query || recentSearches.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {query && (
              <div className="p-2">
                <p className="text-xs text-muted-foreground px-3 py-2">Suggested</p>
                {suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase())).map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => onSearch(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    <Search className="h-3 w-3 inline mr-2 text-muted-foreground" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            {!query && recentSearches.length > 0 && (
              <div className="p-2">
                <p className="text-xs text-muted-foreground px-3 py-2">Recent</p>
                {recentSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => onSearch(search)}
                    className="w-full text-left px-3 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    <Clock className="h-3 w-3 inline mr-2 text-muted-foreground" />
                    {search}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reaction Picker Component
function ReactionPicker({ onReact }: { onReact: (type: string) => void }) {
  const reactions = [
    { type: "like", icon: ThumbsUp, label: "Like" },
    { type: "love", icon: Heart, label: "Love" },
    { type: "fire", icon: Flame, label: "Fire" },
    { type: "idea", icon: Lightbulb, label: "Idea" },
    { type: "celebrate", icon: PartyPopper, label: "Celebrate" },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      className="flex items-center gap-1 p-2 bg-card border border-border rounded-full shadow-2xl"
    >
      {reactions.map(({ type, icon: Icon, label }) => (
        <motion.button
          key={type}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onReact(type)}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          title={label}
        >
          <Icon className="h-4 w-4" />
        </motion.button>
      ))}
    </motion.div>
  );
}

// Enhanced Post Card
function EnhancedPostCard({ post }: { post: Post }) {
  const [showReactions, setShowReactions] = React.useState(false);
  const [showReply, setShowReply] = React.useState(false);
  const [replyText, setReplyText] = React.useState("");
  const [isLiked, setIsLiked] = React.useState(false);
  
  const badgeConfig = {
    expert: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20", icon: Award },
    mvp: { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/20", icon: Trophy },
    new: { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/20", icon: Sparkles },
  };
  
  const badge = post.author.badge ? badgeConfig[post.author.badge] : null;
  const BadgeIcon = badge?.icon;
  
  // Shadow hierarchy based on post importance
  const shadowClass = post.trending 
    ? "shadow-lg hover:shadow-2xl ring-2 ring-primary/20" 
    : post.isHot
    ? "shadow-md hover:shadow-xl ring-1 ring-orange-500/20"
    : "shadow-sm hover:shadow-xl";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/90 to-card/60 border backdrop-blur-xl cursor-pointer transition-all",
        post.isUnread ? "border-primary/50 border-l-4" : "border-border/50",
        shadowClass
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Best Answer Badge */}
      {post.bestAnswer && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          <span className="text-xs font-medium text-green-500">Best Answer</span>
        </div>
      )}
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-semibold ring-2 ring-background">
                {post.author.avatar}
              </div>
              {post.author.verified && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-primary border-2 border-background flex items-center justify-center"
                >
                  <Sparkles className="h-3 w-3 text-white" />
                </motion.div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold truncate">{post.author.name}</p>
                {post.author.role && (
                  <span className="text-xs text-muted-foreground">· {post.author.role}</span>
                )}
                {badge && BadgeIcon && (
                  <span className={cn("flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border", badge.bg, badge.text, badge.border)}>
                    <BadgeIcon className="h-3 w-3" />
                    {post.author.badge}
                  </span>
                )}
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {post.category}
                </span>
                {post.trending && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </span>
                )}
                {post.isHot && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20">
                    <Flame className="h-3 w-3" />
                    Hot
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

        {/* Media Preview */}
        {post.media && (
          <div className="mb-4 rounded-xl overflow-hidden border border-border/50 bg-muted/30">
            {post.media.type === "image" && (
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            {post.media.type === "video" && (
              <div className="relative aspect-video bg-muted flex items-center justify-center group/video cursor-pointer">
                <Play className="h-16 w-16 text-white drop-shadow-2xl group-hover/video:scale-110 transition-transform" />
              </div>
            )}
            {post.media.type === "link" && (
              <div className="p-4 flex items-center gap-3">
                <div className="h-16 w-16 rounded bg-muted flex items-center justify-center flex-shrink-0">
                  <LinkIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm line-clamp-1">{post.media.title || "Link Preview"}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{post.media.url}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Reactions Bar */}
        {post.reactions && post.reactions.length > 0 && (
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
            {post.reactions.map((reaction) => {
              const icons = { like: ThumbsUp, love: Heart, fire: Flame, idea: Lightbulb, celebrate: PartyPopper };
              const Icon = icons[reaction.type];
              return (
                <motion.button
                  key={reaction.type}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted/50 hover:bg-muted transition-colors text-xs"
                >
                  <Icon className="h-3 w-3" />
                  <span>{reaction.count}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReply(!showReply)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{post.stats.replies}</span>
            </motion.button>
            
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "flex items-center gap-1.5 transition-colors",
                  isLiked ? "text-red-500" : "hover:text-red-500"
                )}
              >
                <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
                <span>{post.stats.likes + (isLiked ? 1 : 0)}</span>
              </motion.button>
              
              <AnimatePresence>
                {showReactions && (
                  <div className="absolute bottom-full mb-2 left-0">
                    <ReactionPicker onReact={(type) => console.log('React:', type)} />
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-1.5" title="Views">
              <Users className="h-4 w-4" />
              <span>{post.stats.views}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="sm" className="h-8 gap-1.5">
                <BookmarkPlus className="h-3.5 w-3.5" />
                Save
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-3.5 w-3.5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Inline Reply */}
        <AnimatePresence>
          {showReply && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border/50"
            >
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                  You
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Write a reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="h-8 gap-1.5">
                      <Smile className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" className="h-8 gap-1.5">
                      <Send className="h-3.5 w-3.5" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// New Posts Banner
function NewPostsBanner({ count, onRefresh }: { count: number; onRefresh: () => void }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="mb-4"
    >
      <button
        onClick={onRefresh}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg"
      >
        <TrendingUp className="h-4 w-4" />
        {count} new post{count > 1 ? 's' : ''} - Click to refresh
      </button>
    </motion.div>
  );
}

// Empty State
function EmptyState({ type }: { type: "no-posts" | "no-results" }) {
  const config = {
    "no-posts": {
      icon: MessageCircle,
      title: "No posts yet",
      description: "Be the first to start a conversation in this community!",
      cta: "Create First Post"
    },
    "no-results": {
      icon: AlertCircle,
      title: "No results found",
      description: "Try adjusting your search or filters to find what you're looking for.",
      cta: "Clear Filters"
    }
  };
  
  const { icon: Icon, title, description, cta } = config[type];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="h-20 w-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      <Button size="lg" className="gap-2">
        <Plus className="h-4 w-4" />
        {cta}
      </Button>
    </motion.div>
  );
}

// Topic Card Component
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

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl cursor-pointer transition-all shadow-md hover:shadow-xl"
    >
      <div className={cn("absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity", topic.color)} />
      
      <div className="relative p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shadow-lg", topic.color)}>
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
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("foryou");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showNewPosts, setShowNewPosts] = React.useState(false);
  const [newPostsCount, setNewPostsCount] = React.useState(3);

  // Simulate new posts arriving
  React.useEffect(() => {
    const timer = setTimeout(() => setShowNewPosts(true), 5000);
    return () => clearTimeout(timer);
  }, []);

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

  const mockPosts: Post[] = [
    {
      id: "1",
      author: { name: "Rachel Andrews", avatar: "RA", verified: true, role: "Senior Agent", badge: "expert" },
      title: "Just closed my biggest deal using the discovery framework!",
      content: "After implementing the discovery call framework from the training, I closed a $50k IUL policy. The key was really listening to their pain points and positioning the solution naturally. Happy to share my exact approach if anyone wants details!",
      category: "Wins",
      timestamp: "2 hours ago",
      stats: { replies: 24, likes: 89, views: 342 },
      trending: true,
      reactions: [
        { type: "fire", count: 45 },
        { type: "celebrate", count: 23 },
        { type: "like", count: 21 }
      ],
      media: {
        type: "image",
        url: "/deal-screenshot.png",
        thumbnail: "/deal-screenshot-thumb.png"
      }
    },
    {
      id: "2",
      author: { name: "Ted James", avatar: "TJ", role: "New Agent", badge: "new" },
      title: "Best objection handling technique you've learned?",
      content: "I'm struggling with the 'I need to think about it' objection. What's worked best for you all in handling this without being pushy?",
      category: "Questions",
      timestamp: "4 hours ago",
      stats: { replies: 18, likes: 45, views: 203 },
      isUnread: true,
      isHot: true,
      reactions: [
        { type: "like", count: 30 },
        { type: "idea", count: 15 }
      ]
    },
    {
      id: "3",
      author: { name: "Yasmin Gonzalez", avatar: "YG", verified: true, role: "Top Performer", badge: "mvp" },
      title: "Morning routine that transformed my sales performance",
      content: "Started doing this 90-day challenge and my close rate went from 23% to 41%. Here's exactly what I do every morning before my first call...",
      category: "Tips",
      timestamp: "6 hours ago",
      stats: { replies: 31, likes: 156, views: 892 },
      trending: true,
      bestAnswer: true,
      media: {
        type: "video",
        url: "/morning-routine.mp4",
        thumbnail: "/morning-routine-thumb.jpg"
      },
      reactions: [
        { type: "love", count: 67 },
        { type: "fire", count: 45 },
        { type: "like", count: 44 }
      ]
    },
  ];

  const filters: { id: FilterType; label: string; icon: React.ReactNode }[] = [
    { id: "foryou", label: "For You", icon: <Sparkles className="h-4 w-4" /> },
    { id: "trending", label: "Trending", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "recent", label: "Recent", icon: <Clock className="h-4 w-4" /> },
    { id: "unanswered", label: "Unanswered", icon: <MessageCircle className="h-4 w-4" /> },
    { id: "following", label: "Following", icon: <Users className="h-4 w-4" /> },
  ];

  const handleRefresh = () => {
    setShowNewPosts(false);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Community
              </h1>
              <ActivityPulse count={127} />
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-2 p-1 rounded-lg bg-muted/50">
                <button
                  onClick={() => setViewMode("stream")}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium",
                    viewMode === "stream" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Activity className="h-4 w-4" />
                  Stream
                </button>
                <button
                  onClick={() => setViewMode("topics")}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-sm font-medium",
                    viewMode === "topics" ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-16 left-1/2 -translate-x-1/2 z-30 h-12 w-32 bg-gradient-to-br from-primary to-primary/80 rounded-b-3xl shadow-xl flex items-center justify-center group"
      >
        <Plus className="h-5 w-5 text-white transition-opacity duration-150 group-hover:opacity-0 absolute" />
        <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          Create Post
        </span>
      </motion.button>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <SmartSearch onSearch={(query) => console.log('Search:', query)} />
          
          <Button variant="outline" size="lg" className="gap-2 rounded-full">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Advanced</span>
          </Button>
        </div>

        {/* Filter Pills */}
        {viewMode === "stream" && (
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
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

        {/* New Posts Banner */}
        <AnimatePresence>
          {showNewPosts && !isLoading && (
            <NewPostsBanner count={newPostsCount} onRefresh={handleRefresh} />
          )}
        </AnimatePresence>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {[1, 2, 3].map((i) => <PostSkeleton key={i} />)}
            </motion.div>
          ) : viewMode === "stream" ? (
            <motion.div
              key="stream"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {mockPosts.length > 0 ? (
                mockPosts.map((post) => <EnhancedPostCard key={post.id} post={post} />)
              ) : (
                <EmptyState type="no-posts" />
              )}
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
