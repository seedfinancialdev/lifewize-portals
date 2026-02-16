import Skeleton from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-44" />
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-36 rounded-full" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-6 w-64 rounded-full" />
            <div className="space-y-3">
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-4/5" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full max-w-lg" />
              <Skeleton className="h-5 w-3/4 max-w-lg" />
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-14 w-48 rounded-full" />
              <Skeleton className="h-14 w-36 rounded-full" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-[420px] w-full rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Carrier grid skeleton */}
      <div className="py-20 container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <Skeleton className="h-4 w-40 mx-auto" />
          <Skeleton className="h-12 w-80 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
