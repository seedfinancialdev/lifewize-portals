import Skeleton from "@/components/ui/skeleton";

export default function FeaturePageLoading() {
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

      {/* Hero skeleton */}
      <div className="pt-36 pb-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Skeleton className="h-14 w-14 rounded-2xl" />
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-3/5" />
            </div>
            <Skeleton className="h-5 w-full max-w-md" />
            <Skeleton className="h-5 w-4/5 max-w-md" />
            <div className="flex gap-4 pt-2">
              <Skeleton className="h-12 w-44 rounded-full" />
              <Skeleton className="h-12 w-36 rounded-full" />
            </div>
          </div>
          <div className="hidden lg:block">
            <Skeleton className="h-[360px] w-full rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Sections skeleton */}
      <div className="py-16 container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "direction-rtl" : ""
              }`}
            >
              <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="space-y-3 pt-4">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Skeleton className="h-[280px] w-full rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
