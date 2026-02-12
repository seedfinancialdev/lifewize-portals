import Skeleton from "@/components/ui/skeleton";

export default function FeaturesLoading() {
  return (
    <div className="min-h-screen">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-36" />
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
        </div>
      </div>

      {/* Header skeleton */}
      <div className="pt-36 pb-12 container mx-auto px-6">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Skeleton className="h-4 w-40 mx-auto" />
          <Skeleton className="h-14 w-96 mx-auto" />
          <Skeleton className="h-5 w-full mx-auto" />
          <Skeleton className="h-5 w-3/4 mx-auto" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-56 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
