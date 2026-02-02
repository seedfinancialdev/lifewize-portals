# LIFEWiZE Portals

Unified monorepo for LIFEWiZE agent portals and platforms.

## 🎯 Portals

### Resource Center
**Location**: `./resource-center`  
**Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion  
**Description**: Main agent resource hub featuring the premium Community platform with world-class UX

**Features**:
- 📚 Resource library and content vault
- 💬 Community platform with dual-view architecture (Stream & Topics)
- 🎨 Premium UI with glassmorphic design, shadow hierarchy, and micro-interactions
- ⚡ Real-time activity indicators and live updates
- 🔍 Smart search with autocomplete
- 🎭 Rich content: media previews, author badges, reactions

**Quick Start**:
```bash
cd resource-center
npm install
npm run dev
# Open http://localhost:3000
```

### AI Sales Call Trainer
**Location**: `./ai-sales-call-trainer`  
**Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS  
**Description**: Interactive AI-powered sales training platform

**Features**:
- 🤖 AI conversation simulation
- 📊 Performance analytics
- 🎯 Scenario-based training
- 📈 Progress tracking

**Quick Start**:
```bash
cd ai-sales-call-trainer
npm install
npm run dev
# Open http://localhost:3001
```

## 🏗️ Architecture

```
lifewize-portals/
├── resource-center/          # Main resource hub + Community
│   ├── app/
│   │   ├── community/        # Community platform
│   │   ├── resources/        # Resource library
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/              # Shared UI components
│   │   └── theme/           # Theme system
│   └── package.json
│
├── ai-sales-call-trainer/    # AI training portal
│   ├── app/
│   ├── components/
│   └── package.json
│
└── README.md                 # This file
```

## 🚀 Development

Each portal is independently deployable:

```bash
# Install all dependencies
npm install --workspaces

# Run specific portal
cd resource-center && npm run dev
cd ai-sales-call-trainer && npm run dev

# Build for production
npm run build --workspace=resource-center
npm run build --workspace=ai-sales-call-trainer
```

## 📦 Deployment

Each portal can be deployed independently:

- **Resource Center**: Vercel, Netlify, or any Next.js hosting
- **AI Sales Call Trainer**: Vercel, Netlify, or any Next.js hosting

## 🎨 Design System

Shared design tokens and components across portals:
- **Colors**: Primary gradient, semantic colors
- **Typography**: Inter font family
- **Spacing**: Tailwind CSS scale
- **Animations**: Framer Motion for premium interactions

## 📝 License

Proprietary - LIFEWiZE
