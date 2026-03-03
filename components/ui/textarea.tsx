import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-2 rounded-2xl px-[18px] py-3 w-full focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
