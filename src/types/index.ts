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
