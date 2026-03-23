import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
    className,
    type,
    readOnly,
    ...props
}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            readOnly={readOnly}
            data-slot="input"
            className={cn(
                "border-2 rounded-lg pl-[18px] pr-10 py-3 w-full focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out",
                className,
            )}
            {...props}
        />
    );
}

export { Input };
