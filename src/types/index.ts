import { cva, VariantProps } from 'class-variance-authority';
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { DayPicker } from 'react-day-picker';

export const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

export type Lift = {
    name: string;
    image: string;
    description: string;
    features: string[];
  };

  export interface TemplateProps {
    children: React.ReactNode;
  }

  export interface ButtonProps {
  id?: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

export interface AnimatedTextProps {
  phrase: string;
  className?: string;
}

export interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export interface BentoCardProps {
    src: string;
    title: React.ReactNode; // Accept React elements or strings for the title
    description?: string;
  }

  export interface CardProps {
  i: number;
  title: string;
  description: string;
  keyUsp: string[];
  src: string;
  url: string;
  color: string;
  progress: any; // Adjust type as needed if the `progress` object has a specific type
  range: [number, number];
  targetScale: number;
  textColor: string;
}

export interface MagneticWrapperProps {
  children: React.ReactElement;
}

export interface AnimatedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface MouseEvent {
    movementY: number;
    clientX: number;
  }

 export type lineProps = {
      gap?: string
  }

  export interface ProductDetailsProps {
  images: string[];
  title: string;
  description: string;
  features: string[];
  specialFeature?: string;
}

export interface usp {
    link: string;
    title: string;
    description: string;
    src: string;
    color: string;
    text: string;
    keyUSPs: string[]
  }

  export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

    export const buttonVariants = cva(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow hover:bg-primary/90",
              destructive:
                "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
              outline:
                "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
              secondary:
                "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2",
              sm: "h-8 rounded-md px-3 text-xs",
              lg: "h-10 rounded-md px-8",
              icon: "h-9 w-9",
            },
          },
          defaultVariants: {
            variant: "default",
            size: "default",
          },
        }
      )

      export interface ButtonProps
        extends React.ButtonHTMLAttributes<HTMLButtonElement>,
          VariantProps<typeof buttonVariants> {
        asChild?: boolean
      }

      export const sheetVariants = cva(
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
        {
          variants: {
            side: {
              top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
              bottom:
                "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
              left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
              right:
                "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            },
          },
          defaultVariants: {
            side: "right",
          },
        }
      )

     export interface SheetContentProps
        extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
          VariantProps<typeof sheetVariants> {}

          export type ScrollBasedMarqueeProps = {
            logos?: string[];
            text?: string | string[];
            gap?: number; // Gap between elements
            direction?: "left" | "right"; // New parameter for scroll direction
            componentClass: string;
          };

          export type Dimension = {
            width: number;
            height: number;
          };

          export type ColumnProps = {
            images: string[];
            y: any; // The `useTransform` return type is `MotionValue<any>`
          };

          export type CalendarProps = React.ComponentProps<typeof DayPicker>

          