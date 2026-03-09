import { cn } from "@/lib/utils";

type BlurOrbProps = {
  className?: string;
};

export function BlurOrb({ className }: BlurOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle,_rgba(86,168,255,0.34)_0%,_rgba(86,168,255,0.12)_34%,_transparent_68%)] blur-2xl",
        className
      )}
    />
  );
}
