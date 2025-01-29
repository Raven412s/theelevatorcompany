import { cn } from "@/lib/utils"
import { BadgeProps, badgeVariants } from "@/types"

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
