import Image from "next/image"


interface TestimonialCardProps {
  quote: string
  authorName: string
  authorTitle: string
  avatarUrl: string
}

export function TestimonialCard({ quote, authorName, authorTitle, avatarUrl }: TestimonialCardProps) {
  return (
    // Re-added 'group' class and updated styling to match the provided HTML snippet
    <div className="group relative flex flex-col gap-16 overflow-hidden rounded-2xl border-0.75 border-brand-borders bg-brand-white p-5 dark:bg-brand-medium-black md:gap-18 md:rounded-2.5xl md:px-6 md:py-6.5">
      {/* <TestimonialBackgroundSVG /> */}
      <p className="relative z-10 [&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm/[1.125rem] md:text-base/[1.375rem] flex-grow text-gray-300">
        {quote}
      </p>
      <div className="relative z-10 mt-auto flex items-center gap-3">
        <Image
          src={avatarUrl || "/placeholder.svg?height=48&width=48"}
          alt={authorName}
          width={48}
          height={48}
          className="size-[2.6875rem] rounded-full object-cover md:size-[3.25rem]"
        />
        <div>
          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-base/[1.125rem] md:text-lg/[1.5rem] flex items-center text-brand-gray-800 transition-colors duration-300 lg:group-hover:text-white">
            {authorName}
          </p>
          <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-base/[1.125rem] md:text-lg/[1.5rem] text-brand-neutrals-600 transition-colors duration-300 dark:text-brand-neutrals-400 lg:group-hover:text-white">
            {authorTitle}
          </p>
        </div>
      </div>
    </div>
  )
}
