import Image from "next/image";

type ThemeMarkProps = {
  alt: string;
  size?: number;
  className?: string;
};

export function ThemeMark({ alt, size = 44, className = "" }: ThemeMarkProps) {
  return (
    <span
      className={`theme-logo-swap relative inline-flex shrink-0 overflow-hidden ${className}`.trim()}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src="/images/branding/mark-light.svg"
        alt={alt}
        width={size}
        height={size}
        className="theme-mark-light absolute inset-0 h-full w-full"
      />
      <Image
        src="/images/branding/mark-dark.svg"
        alt={alt}
        width={size}
        height={size}
        className="theme-mark-dark absolute inset-0 h-full w-full"
      />
    </span>
  );
}
