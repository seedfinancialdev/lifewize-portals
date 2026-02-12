export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureSection {
  title: string;
  description?: string;
  features: FeatureItem[];
}

export interface Feature {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  heroDescription: string;
  sections: FeatureSection[];
  cta: { text: string; href: string };
  seo: { title: string; description: string };
}

export const features: Feature[] = [
  // ── 1. AI Call Trainer ───────────────────────────────────────────────
  {
    slug: "ai-call-trainer",
    title: "AI Call Trainer",
    tagline: "Master Every Client Conversation with AI-Powered Practice",
    description:
      "Practice real-world scenarios with AI, receive instant feedback, and become a closing machine.",
    iconName: "Bot",
    accentColor: "emerald",
    heroDescription:
      "Elevate your sales skills with our cutting-edge AI call training system powered by ElevenLabs technology. Practice real-world scenarios, receive instant feedback, and become a closing machine.",
    sections: [
      {
        title: "Intelligent Call Simulation",
        features: [
          {
            title: "Realistic AI Conversations",
            description:
              "Practice with AI that responds naturally, just like a real prospect would. Handle objections, answer questions, and perfect your pitch in a safe environment.",
          },
          {
            title: "Custom Script Support",
            description:
              "Upload and practice with your own scripts, or use our AI-powered script generator to create optimized sales dialogues.",
          },
          {
            title: "Call Recording & Playback",
            description:
              "Every training session is recorded so you can review your performance and track improvement over time.",
          },
        ],
      },
      {
        title: "Performance Analytics",
        features: [
          {
            title: "AI Performance Scoring",
            description:
              "Receive detailed scores on your calls based on tone, pacing, objection handling, and closing techniques.",
          },
          {
            title: "Instant Feedback",
            description:
              "Get real-time suggestions during practice sessions to immediately improve your approach.",
          },
          {
            title: "Transcript Analysis",
            description:
              "Review complete call transcripts with AI-highlighted areas for improvement.",
          },
        ],
      },
      {
        title: "Session Management",
        features: [
          {
            title: "Call History Dashboard",
            description:
              "Access your complete training history with duration, scores, and feedback summaries for each session.",
          },
          {
            title: "Progress Tracking",
            description:
              "Monitor your improvement over time with trend analysis and skill breakdowns.",
          },
          {
            title: "Credit Management",
            description:
              "Flexible credit system with pay-per-use or unlimited subscription options.",
          },
        ],
      },
      {
        title: "Getting Started",
        features: [
          {
            title: "Video Introduction",
            description:
              "Comprehensive onboarding video teaches you how to maximize your training effectiveness.",
          },
          {
            title: "Best Practice Guides",
            description:
              "Access proven techniques and tips for more effective practice sessions.",
          },
          {
            title: "Script Generator",
            description:
              "Generate customizable call scripts to help practice your skills on the phone.",
          },
        ],
      },
    ],
    cta: { text: "Try AI Call Trainer Free", href: "#pricing" },
    seo: {
      title: "AI Call Trainer — Practice Sales Calls with AI | LIFEWiZE",
      description:
        "Master insurance sales calls with AI-powered practice. Get instant feedback on tone, pacing, and objection handling. Start free with LIFEWiZE.",
    },
  },

  // ── 2. Calendar & Scheduling ─────────────────────────────────────────
  {
    slug: "calendar",
    title: "Calendar & Scheduling",
    tagline: "Your Command Center for Time Management",
    description:
      "Seamlessly sync with Google Calendar, manage availability, and never miss an important meeting.",
    iconName: "CalendarDays",
    accentColor: "cyan",
    heroDescription:
      "Take control of your schedule with our powerful calendar system. Seamlessly sync with Google Calendar, manage availability, and never miss an important meeting.",
    sections: [
      {
        title: "Multi-Platform Calendar Views",
        features: [
          {
            title: "Desktop Calendar",
            description:
              "Full-featured calendar view with month, week, and day displays. Drag-and-drop events to reschedule with ease.",
          },
          {
            title: "Mobile Calendar",
            description:
              "Touch-optimized calendar experience designed for on-the-go professionals. Swipe navigation and quick-action buttons.",
          },
          {
            title: "Real-Time Google Calendar Sync",
            description:
              "Bidirectional synchronization with your calendars ensures all your appointments stay in perfect harmony.",
          },
        ],
      },
      {
        title: "Event Management",
        features: [
          {
            title: "Quick Event Creation",
            description:
              "Add meetings, calls, and tasks with just a few clicks using our streamlined Event Manager.",
          },
          {
            title: "Event Detail View",
            description:
              "Click any event to see full details, attendees, notes, and quick-action buttons.",
          },
          {
            title: "Drag-and-Drop Scheduling",
            description:
              "Effortlessly move events between dates and times on desktop.",
          },
        ],
      },
      {
        title: "Availability Configuration",
        features: [
          {
            title: "Availability Manager",
            description:
              "Define your working hours for each day of the week. Set different hours for different days.",
          },
          {
            title: "Holiday Blocking",
            description:
              "Automatically block out holidays so clients can't book during your time off.",
          },
          {
            title: "Buffer Time Settings",
            description:
              "Add buffer time before and after meetings to prepare and decompress.",
          },
        ],
      },
      {
        title: "Connected Calendar Management",
        features: [
          {
            title: "Multi-Calendar Support",
            description:
              "Connect and sync multiple calendar accounts for complete schedule visibility.",
          },
          {
            title: "Conflict Detection",
            description:
              "Automatic detection of scheduling conflicts across all connected calendars.",
          },
          {
            title: "Timezone Support",
            description:
              "Handle clients across multiple time zones with automatic timezone conversion.",
          },
        ],
      },
    ],
    cta: { text: "Get Started Free", href: "#pricing" },
    seo: {
      title: "Calendar & Scheduling for Insurance Agents | LIFEWiZE",
      description:
        "Powerful calendar system with Google sync, availability management, and conflict detection. Built for insurance agents. Start free.",
    },
  },

  // ── 3. Community Hub ─────────────────────────────────────────────────
  {
    slug: "community",
    title: "Community Hub",
    tagline: "Connect, Learn, and Grow with Fellow Professionals",
    description:
      "A thriving community of insurance professionals sharing insights, celebrating wins, and building relationships.",
    iconName: "Users",
    accentColor: "blue",
    heroDescription:
      "Join a thriving community of insurance professionals. Share insights, celebrate wins, and build relationships with peers who understand your journey.",
    sections: [
      {
        title: "Social Feed",
        features: [
          {
            title: "Trending Posts",
            description:
              "Discover the most engaging content from your community. Stay informed about industry trends and best practices.",
          },
          {
            title: "Trending Users",
            description:
              "Find and follow the most active and influential members in your network.",
          },
          {
            title: "Content Engagement",
            description:
              "Like, comment, and share posts that resonate with you.",
          },
        ],
      },
      {
        title: "User Profiles",
        features: [
          {
            title: "Professional Profiles",
            description:
              "Showcase your expertise with a detailed profile including bio, achievements, and social links.",
          },
          {
            title: "Activity Statistics",
            description:
              "Track your posts, followers, and engagement metrics.",
          },
        ],
      },
      {
        title: "Social Networking",
        features: [
          {
            title: "Follow System",
            description:
              "Build your network by following professionals whose insights you value.",
          },
          {
            title: "Discovery Features",
            description:
              "Find new connections through trending content and user recommendations.",
          },
          {
            title: "Direct Engagement",
            description:
              "Interact with posts through likes, comments, and shares.",
          },
        ],
      },
    ],
    cta: { text: "Join the Community", href: "#pricing" },
    seo: {
      title: "Agent Community Hub — Network with Top Producers | LIFEWiZE",
      description:
        "Connect with 500+ life insurance agents. Share wins, get advice, and grow together in the LIFEWiZE community.",
    },
  },

  // ── 4. CRM Suite ─────────────────────────────────────────────────────
  {
    slug: "crm",
    title: "CRM Suite",
    tagline: "The Complete Client Relationship Management Solution",
    description:
      "HubSpot-grade pipeline management with email, Twilio calling, and automation built in.",
    iconName: "BarChart3",
    accentColor: "violet",
    heroDescription:
      "Manage your entire sales pipeline from first contact to closed deal. Our CRM suite brings together lead management, email, appointments, conversations, a built-in soft phone, and complete audit trail in one powerful platform.",
    sections: [
      {
        title: "Visual Pipeline Management",
        features: [
          {
            title: "Kanban Board View",
            description:
              "See your entire pipeline at a glance with intuitive drag-and-drop cards. Move leads between stages with a simple gesture.",
          },
          {
            title: "List View",
            description:
              "Fully customizable data-dense tabular view for power users who need to see all lead details simultaneously.",
          },
          {
            title: "Multiple Pipelines",
            description:
              "Create separate pipelines for different products, lead sources, or team members with custom stages and colors.",
          },
        ],
      },
      {
        title: "Lead Operations",
        features: [
          {
            title: "Add New Leads",
            description:
              "Capture leads quickly with our streamlined add-lead modal. Custom fields ensure you gather all the information you need.",
          },
          {
            title: "CSV Bulk Import",
            description:
              "Import hundreds of leads at once from spreadsheets with intelligent field mapping.",
          },
          {
            title: "Complete Lead Profiles",
            description:
              "Activity timeline, custom fields, tags, tasks, marketing management, file management, and conversations panel — all in one view.",
          },
        ],
      },
      {
        title: "Built-in Soft Phone",
        features: [
          {
            title: "Browser-Based Calling",
            description:
              "Place and receive calls directly from your browser with crystal-clear audio quality. No additional software required.",
          },
          {
            title: "Full Dialpad & Caller ID",
            description:
              "Intuitive dialpad interface with caller ID selection, call recording toggle, and local presence dialing.",
          },
          {
            title: "Post-Call Dispositions",
            description:
              "Log call outcomes with customizable dispositions and notes. Complete call history with one-click redial.",
          },
        ],
      },
      {
        title: "Email Center & Conversations",
        features: [
          {
            title: "Gmail & Outlook Integration",
            description:
              "Bring your inbox directly into the CRM with real-time sync, thread view, and label management.",
          },
          {
            title: "Unified Conversations",
            description:
              "Every client conversation — email, SMS, and internal notes — in one three-panel layout with real-time messaging.",
          },
          {
            title: "Audit Trail",
            description:
              "Complete activity logging for compliance and insights — stage transitions, closures, reactivations, and agent attribution.",
          },
        ],
      },
      {
        title: "Appointments & Booking",
        features: [
          {
            title: "Custom Booking Types",
            description:
              "Define appointment types for discovery calls, policy reviews, consultations, and more with custom branding.",
          },
          {
            title: "Intake Questions",
            description:
              "Multiple question types — text, dropdown, radio, checkboxes — with required/optional controls.",
          },
          {
            title: "Team Scheduling",
            description:
              "Round-robin assignment, individual calendars, and intelligent booking distribution.",
          },
        ],
      },
    ],
    cta: { text: "Try the CRM Free", href: "#pricing" },
    seo: {
      title: "Insurance CRM Suite — Pipeline, Email, Phone & More | LIFEWiZE",
      description:
        "All-in-one CRM for insurance agents. Kanban pipeline, built-in soft phone, Gmail sync, SMS, appointments, and audit trail. Start free.",
    },
  },

  // ── 5. Social Media Manager ──────────────────────────────────────────
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    tagline: "Conquer Social Media from One Dashboard",
    description:
      "Post once, publish everywhere. Manage Facebook, Instagram, LinkedIn, TikTok, and YouTube from one interface.",
    iconName: "Share2",
    accentColor: "pink",
    heroDescription:
      "Post once, publish everywhere. Manage your entire social media presence across Facebook, Instagram, LinkedIn, TikTok, and YouTube from a single, powerful interface.",
    sections: [
      {
        title: "Multi-Platform Publishing",
        features: [
          {
            title: "One Post, Many Platforms",
            description:
              "Create content once and publish to all your connected accounts simultaneously.",
          },
          {
            title: "Platform-Specific Previews",
            description:
              "See how your content will appear on each platform before publishing.",
          },
          {
            title: "Schedule for Later",
            description:
              "Queue posts for optimal publishing times or post instantly when timing matters.",
          },
        ],
      },
      {
        title: "Content Creation & Management",
        features: [
          {
            title: "Rich Text Editor",
            description:
              "Create compelling posts with formatting, emojis, and mentions.",
          },
          {
            title: "Media Upload",
            description:
              "Attach images and videos optimized for each platform.",
          },
          {
            title: "Draft Management",
            description:
              "Save works-in-progress and finish later. View all upcoming posts in your scheduled queue.",
          },
        ],
      },
      {
        title: "Social Automation",
        features: [
          {
            title: "DM Flow Builder",
            description:
              "Create automatic direct message flows for common inquiries with keyword triggers.",
          },
          {
            title: "Multi-Step Sequences",
            description:
              "Build conversation flows with multiple automated responses and active/inactive toggles.",
          },
          {
            title: "Edit & Duplicate",
            description:
              "Modify existing flows or create new ones from templates.",
          },
        ],
      },
      {
        title: "Analytics Dashboard",
        features: [
          {
            title: "Overall Statistics",
            description:
              "Aggregate performance across all platforms with post-level analytics.",
          },
          {
            title: "Engagement Tracking",
            description:
              "Track likes, comments, shares, reach, and impressions.",
          },
          {
            title: "Trend Analysis & Export",
            description:
              "Monitor performance changes over time and download analytics for reporting.",
          },
        ],
      },
    ],
    cta: { text: "Start Posting Free", href: "#pricing" },
    seo: {
      title: "Social Media Manager for Insurance Agents | LIFEWiZE",
      description:
        "Post to Facebook, Instagram, LinkedIn, TikTok & YouTube from one dashboard. Schedule, automate DMs, and track analytics. Start free.",
    },
  },

  // ── 6. Funnel Builder ────────────────────────────────────────────────
  {
    slug: "funnel-builder",
    title: "Funnel Builder",
    tagline: "Create High-Converting Sales Funnels Without Code",
    description:
      "Drag-and-drop funnel builder with 25+ components, custom domains, and conversion analytics.",
    iconName: "Layers",
    accentColor: "amber",
    heroDescription:
      "Transform visitors into clients with our professional drag-and-drop funnel builder. Powered by Puck.js, you can create stunning landing pages and lead capture funnels in minutes.",
    sections: [
      {
        title: "Visual Editor",
        features: [
          {
            title: "Drag-and-Drop Interface",
            description:
              "Simply drag components onto your page and arrange them exactly how you want. Real-time preview and undo/redo.",
          },
          {
            title: "25+ Pre-Built Components",
            description:
              "Layout (rows, columns, headers, footers), content (text, images, video, FAQ), conversion (buttons, forms, appointments), and custom code.",
          },
          {
            title: "Rich Text Editor",
            description:
              "Full-featured text editing with formatting, links, styling, and S3-integrated image uploads.",
          },
        ],
      },
      {
        title: "Funnel Management",
        features: [
          {
            title: "My Funnels & Team Funnels",
            description:
              "Access all your personal funnels and view funnels shared across your organization.",
          },
          {
            title: "Templates Library",
            description:
              "Browse professional pre-built templates. Duplicate, share, and create variations quickly.",
          },
          {
            title: "Sharing & Collaboration",
            description:
              "Share funnels with team members instantly. Search users by name or email.",
          },
        ],
      },
      {
        title: "Publishing",
        features: [
          {
            title: "Custom Domains",
            description:
              "Link your own domain for brand congruency with one-click publish and unpublish.",
          },
          {
            title: "Multi-Page Funnels",
            description:
              "Create multi-step funnels with navigation flow and custom thank-you pages.",
          },
          {
            title: "Public Links",
            description:
              "Generate shareable URLs for any funnel with draft mode for tracking unsaved changes.",
          },
        ],
      },
      {
        title: "Analytics & Tracking",
        features: [
          {
            title: "Page View Tracking",
            description:
              "Monitor how many people visit your funnels with form submission analytics.",
          },
          {
            title: "Conversion Metrics",
            description:
              "Calculate and display conversion percentages and lead generation stats.",
          },
          {
            title: "Revenue Attribution",
            description:
              "Track revenue generated from each funnel and monitor bookings from funnel forms.",
          },
        ],
      },
    ],
    cta: { text: "Build Your First Funnel", href: "#pricing" },
    seo: {
      title: "Insurance Funnel Builder — Drag & Drop Pages | LIFEWiZE",
      description:
        "Build high-converting lead capture funnels with 25+ components, custom domains, and analytics. No code required. Start free.",
    },
  },

  // ── 7. Marketing Automation ──────────────────────────────────────────
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    tagline: "Automated Email & SMS Campaigns That Convert",
    description:
      "Nurture leads on autopilot with email and SMS automation, broadcasts, and multi-step sequences.",
    iconName: "Mail",
    accentColor: "orange",
    heroDescription:
      "Nurture leads on autopilot with sophisticated email and SMS automation. From one-time broadcasts to complex multi-step sequences, reach the right people at the right time.",
    sections: [
      {
        title: "Campaigns",
        features: [
          {
            title: "Email & SMS Campaigns",
            description:
              "Beautiful HTML emails and direct SMS campaigns for immediate impact. Multi-channel for maximum reach.",
          },
          {
            title: "Recipient Management",
            description:
              "Build subscriber lists, select segments, and pull recipients directly from your CRM lead database.",
          },
          {
            title: "Scheduling & Analytics",
            description:
              "Send immediately or schedule for optimal timing. Track delivery, open rates, click rates, and conversion attribution.",
          },
        ],
      },
      {
        title: "Email Templates",
        features: [
          {
            title: "Template Builder",
            description:
              "Design beautiful emails without coding. Rich text editor with variable support for personalization.",
          },
          {
            title: "Template Library",
            description:
              "Save reusable designs, organize by category, and track which templates perform best.",
          },
          {
            title: "Live Preview",
            description:
              "See exactly how templates will render before sending to your audience.",
          },
        ],
      },
      {
        title: "Automation Workflows",
        features: [
          {
            title: "Visual Workflow Builder",
            description:
              "Trigger automations based on tags, actions, or dates. Branch flows with conditional logic and delay steps.",
          },
          {
            title: "Action Types",
            description:
              "Email steps, SMS steps, webhook actions, and tag actions — all configurable in your sequences.",
          },
          {
            title: "Enrollment Management",
            description:
              "See who's in each automation. Pause, activate, duplicate, and track completion rates.",
          },
        ],
      },
      {
        title: "Provider Configuration & Analytics",
        features: [
          {
            title: "Email Providers",
            description:
              "Resend integration, custom SMTP, and DKIM setup for maximum deliverability.",
          },
          {
            title: "SMS via Twilio",
            description:
              "Industry-leading SMS delivery with verification testing before sending.",
          },
          {
            title: "Performance Metrics",
            description:
              "Total sends, open rates, click rates, deliverability, bounce tracking, and unsubscribe monitoring.",
          },
        ],
      },
    ],
    cta: { text: "Automate Your Marketing", href: "#pricing" },
    seo: {
      title: "Marketing Automation for Insurance Agents | LIFEWiZE",
      description:
        "Email & SMS automation, visual workflow builder, campaign analytics, and template library. Built for insurance agents. Start free.",
    },
  },

  // ── 8. Lead Center ───────────────────────────────────────────────────
  {
    slug: "lead-center",
    title: "Lead Center",
    tagline: "Premium Lead Acquisition Marketplace",
    description:
      "Access high-quality, verified leads ready to convert. Browse, purchase, and import directly into your CRM.",
    iconName: "ShoppingCart",
    accentColor: "rose",
    heroDescription:
      "Access high-quality, verified leads ready to convert. Browse, purchase, and import leads directly into your CRM — all from one streamlined interface.",
    sections: [
      {
        title: "Lead Marketplace",
        features: [
          {
            title: "Lead Catalog",
            description:
              "Browse available leads by category and quality with detailed previews before purchasing.",
          },
          {
            title: "Quality Indicators",
            description:
              "See lead verification and quality scores to ensure you're investing in the best prospects.",
          },
          {
            title: "Category Filtering",
            description:
              "Find leads that match your target market with powerful filtering options.",
          },
        ],
      },
      {
        title: "Purchasing",
        features: [
          {
            title: "Transparent Pricing",
            description:
              "Clear pricing per lead with no hidden fees. Bulk purchase discounts available.",
          },
          {
            title: "Secure Checkout",
            description:
              "Stripe-powered secure payment processing with immediate confirmation and receipt.",
          },
          {
            title: "CRM Import",
            description:
              "Purchased leads automatically import into your CRM. Also export to CSV for external use.",
          },
        ],
      },
    ],
    cta: { text: "Browse Leads", href: "#pricing" },
    seo: {
      title: "Lead Center — Verified Insurance Leads | LIFEWiZE",
      description:
        "Browse and purchase high-quality, verified insurance leads. Auto-import to CRM. Transparent pricing, no hidden fees.",
    },
  },

  // ── 9. Resource Library ──────────────────────────────────────────────
  {
    slug: "resource-library",
    title: "Resource Library",
    tagline: "Your Knowledge Base for Success",
    description:
      "Articles, guides, and resources to help you succeed in the insurance industry.",
    iconName: "BookOpen",
    accentColor: "teal",
    heroDescription:
      "Access a growing library of articles, guides, and resources designed to help you succeed in the insurance industry. From sales techniques to compliance updates, find the knowledge you need.",
    sections: [
      {
        title: "Content Library",
        features: [
          {
            title: "Grid Layout",
            description:
              "Browse articles with attractive cover images, titles, descriptions, and tags at a glance.",
          },
          {
            title: "Cover Images via CDN",
            description:
              "Professional thumbnails served via CloudFront CDN for fast loading.",
          },
          {
            title: "Full-Text Search",
            description:
              "Find articles by keyword across the entire library.",
          },
        ],
      },
      {
        title: "Content Organization",
        features: [
          {
            title: "Bookmarks",
            description:
              "Easily bookmark articles for quick recall and future reference.",
          },
          {
            title: "Tag System",
            description:
              "Filter articles by topic tags with a tag cloud showing all available categories.",
          },
          {
            title: "Members Only Content",
            description:
              "Premium articles for subscribers with clear badge indicators and subscription integration.",
          },
        ],
      },
    ],
    cta: { text: "Explore Resources", href: "#pricing" },
    seo: {
      title: "Resource Library — Insurance Sales Guides & Articles | LIFEWiZE",
      description:
        "Growing library of articles, scripts, and guides for insurance professionals. Bookmarks, tags, and premium content. Start free.",
    },
  },

  // ── 10. Training Academy ─────────────────────────────────────────────
  {
    slug: "training-academy",
    title: "Training Academy",
    tagline: "World-Class Professional Development",
    description:
      "Video courses, structured learning paths, and progress tracking to develop the skills that drive success.",
    iconName: "GraduationCap",
    accentColor: "indigo",
    heroDescription:
      "Transform your career with our comprehensive training programs. From licensing prep to advanced sales techniques, develop the skills that drive success.",
    sections: [
      {
        title: "Training Library",
        features: [
          {
            title: "Folder Structure",
            description:
              "Training organized by category and topic with visual course listings and progress indicators.",
          },
          {
            title: "Video Content",
            description:
              "High-quality video lessons from industry experts with structured lesson sequences.",
          },
          {
            title: "Progress Saving",
            description:
              "Pick up exactly where you left off. Earn completion status for finished courses.",
          },
        ],
      },
      {
        title: "Access Tiers & Purchases",
        features: [
          {
            title: "Subscription Tiers",
            description:
              "Different access levels for different plans with clear lock indicators and easy upgrade paths.",
          },
          {
            title: "Individual Course Purchase",
            description:
              "Buy access to specific courses with Stripe-powered payment and instant access.",
          },
          {
            title: "Two-Stage Loading",
            description:
              "Static data cached for instant UI, user progress hydrated in real-time with one-hour cache.",
          },
        ],
      },
      {
        title: "Progress Features",
        features: [
          {
            title: "Visual Progress Bars",
            description:
              "See completion percentage at a glance with in-progress, completed, or not-started status.",
          },
          {
            title: "Resume Learning",
            description:
              "One-click to continue where you stopped on any device.",
          },
          {
            title: "Completion Certificates",
            description:
              "Earn badges for finished courses with a progress dashboard for all your training activity.",
          },
        ],
      },
    ],
    cta: { text: "Start Learning Free", href: "#pricing" },
    seo: {
      title: "Training Academy — Insurance Sales Courses | LIFEWiZE",
      description:
        "Video courses from industry experts. Progress tracking, certificates, and structured learning paths for insurance agents. Start free.",
    },
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}

export function getAllSlugs(): string[] {
  return features.map((f) => f.slug);
}
