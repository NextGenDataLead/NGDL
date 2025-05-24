"use client"

export function SectionDivider() {
  return (
    <div className="relative my-20">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border" />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-4">
          <div className="h-2 w-2 rounded-full bg-primary/50" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </div>
  )
}
