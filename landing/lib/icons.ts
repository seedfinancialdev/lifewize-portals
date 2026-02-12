import {
  Bot,
  CalendarDays,
  Users,
  BarChart3,
  Share2,
  Layers,
  Mail,
  ShoppingCart,
  BookOpen,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  CalendarDays,
  Users,
  BarChart3,
  Share2,
  Layers,
  Mail,
  ShoppingCart,
  BookOpen,
  GraduationCap,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Bot;
}
