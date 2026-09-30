type IconProps = {
  children: string;
  className?: string;
};

export function Icon({ children, className = "" }: IconProps) {
  return <span className={`material-symbols-outlined ${className}`}>{children}</span>;
}