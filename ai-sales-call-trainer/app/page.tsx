"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Bot,
  FileText,
  Handshake,
  Mic,
  Phone,
  PhoneCall,
  Settings,
  Sparkles,
  Square,
  Target,
  Users,
  Shield,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

 type OptionTileProps = {
   title: string;
   description: string;
   icon: React.ReactNode;
   selected: boolean;
   onClick: () => void;
 };

 function OptionTile({
   title,
   description,
   icon,
   selected,
   onClick,
 }: OptionTileProps) {
   return (
     <button
       type="button"
       onClick={onClick}
       className={cn(
         "group w-full rounded-xl border border-border/60 bg-card/65 px-4 py-3 text-left shadow-sm backdrop-blur-md transition-all hover:-translate-y-[1px] hover:border-border/80 hover:bg-card/70 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring supports-[backdrop-filter]:bg-card/50",
         selected &&
           "border-primary/50 bg-primary/10 shadow-lg ring-1 ring-primary/40 hover:border-primary/60 hover:bg-primary/12"
       )}
     >
       <div className="flex items-start gap-3">
         <div
           className={cn(
             "mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground transition-colors group-hover:text-foreground",
             selected && "border-primary/50 text-primary"
           )}
         >
           {icon}
         </div>
         <div className="min-w-0">
           <div className="flex items-center justify-between gap-3">
             <p className={cn("font-semibold", selected && "text-foreground")}>{title}</p>
             <span
               className={cn(
                 "rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground",
                 selected && "border-primary/40 text-primary"
               )}
             >
               {selected ? "Selected" : "Select"}
             </span>
           </div>
           <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
         </div>
       </div>
     </button>
   );
 }

export default function AICallTrainingPage() {
  const [practiceStyle, setPracticeStyle] = React.useState<"general" | "referral" | "closing">("general");
  const [leadType, setLeadType] = React.useState<"warm" | "cold">("warm");
  const [template, setTemplate] = React.useState<"blank" | "objection" | "referral" | "review">("blank");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Welcome, Jon.</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-primary">PLATINUM SUBSCRIBER</span>
              <div className="relative">
                <input type="search" placeholder="Search..." className="bg-background/60 border border-input/70 rounded-md py-2 pl-10 pr-4 text-sm shadow-sm backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring supports-[backdrop-filter]:bg-background/45" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl flex items-center justify-center"><Phone className="mr-3"/>AI Call Training <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1 ml-2">BETA</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">The future of learning.</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="shadow-lg">
              <CardHeader>
                  <CardTitle className="text-lg font-bold">Credits</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-3xl font-bold text-primary">30,000</p>
                  <p className="text-muted-foreground">Credits Available</p>
              </CardContent>
          </Card>

          <Card className="shadow-lg">
              <CardHeader>
                  <CardTitle className="text-lg font-bold">Call Status</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 bg-muted rounded-full"><Bot size={20} className="text-muted-foreground"/></div>
                        <div className="min-w-0">
                            <p className="font-semibold leading-tight">AI Agent</p>
                            <p className="text-sm text-muted-foreground truncate">Disconnected (Idle)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon"><Mic size={18}/></Button>
                        <Button variant="destructive" size="icon"><Square size={18}/></Button>
                    </div>
                  </div>
              </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Call Setup */}
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Create Your Scenario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <label className="text-lg font-medium">Practice Style</label>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <OptionTile
                        title="General"
                        description="Balanced conversation with common objections."
                        icon={<Sparkles className="h-5 w-5" />}
                        selected={practiceStyle === "general"}
                        onClick={() => setPracticeStyle("general")}
                      />
                      <OptionTile
                        title="Referral"
                        description="Build rapport and ask for introductions confidently."
                        icon={<Handshake className="h-5 w-5" />}
                        selected={practiceStyle === "referral"}
                        onClick={() => setPracticeStyle("referral")}
                      />
                      <OptionTile
                        title="Closing"
                        description="Handle urgency and guide to aFQs and next steps."
                        icon={<Target className="h-5 w-5" />}
                        selected={practiceStyle === "closing"}
                        onClick={() => setPracticeStyle("closing")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-lg font-medium">Lead Type</label>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <OptionTile
                        title="Warm Lead"
                        description="They know who you are. Focus on needs and fit."
                        icon={<PhoneCall className="h-5 w-5" />}
                        selected={leadType === "warm"}
                        onClick={() => setLeadType("warm")}
                      />
                      <OptionTile
                        title="Cold Call"
                        description="Fast opener, permission-based, earn attention quickly."
                        icon={<Phone className="h-5 w-5" />}
                        selected={leadType === "cold"}
                        onClick={() => setLeadType("cold")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="text-lg font-medium">Product</label>
                    <Input id="product" placeholder="e.g. Indexed Universal Life Insurance" className="mt-2" />
                  </div>

                  <div>
                    <label className="text-lg font-medium">Rudeness Level</label>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm">Polite</span>
                      <Slider defaultValue={[33]} max={100} step={1} />
                      <span className="text-sm">Hostile</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-lg font-medium">Objection Level</label>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm">None</span>
                      <Slider defaultValue={[20]} max={100} step={1} />
                      <span className="text-sm">High</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button variant="outline" className="w-full"><Settings className="mr-2 h-4 w-4"/> Script Generator</Button>
                    <Button className="w-full"><Phone className="mr-2 h-4 w-4"/> Start Call</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Template Selector</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <OptionTile
                    title="Blank Scenario"
                    description="Start from scratch with your own inputs."
                    icon={<FileText className="h-5 w-5" />}
                    selected={template === "blank"}
                    onClick={() => setTemplate("blank")}
                  />
                  <OptionTile
                    title="Objection Handling"
                    description="Practice pushback, concerns, and calm redirection."
                    icon={<Shield className="h-5 w-5" />}
                    selected={template === "objection"}
                    onClick={() => setTemplate("objection")}
                  />
                  <OptionTile
                    title="Referral Ask"
                    description="Warm close to earn introductions and next steps."
                    icon={<Users className="h-5 w-5" />}
                    selected={template === "referral"}
                    onClick={() => setTemplate("referral")}
                  />
                  <OptionTile
                    title="Policy Review"
                    description="Consultative review and value positioning."
                    icon={<Handshake className="h-5 w-5" />}
                    selected={template === "review"}
                    onClick={() => setTemplate("review")}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create your desired call scenario and practice your skills on the phone! Once you're finished, say "End Call" to receive a detailed report on your performance.</p>
                <Button variant="link" className="px-0">Start training now!</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
