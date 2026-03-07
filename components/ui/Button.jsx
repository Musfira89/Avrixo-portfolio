import clsx from "clsx";

export default function Button({
  children,
  className,
  variant = "primary",
  as = "button",
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={clsx(
        "relative inline-flex items-center justify-center",
        "px-4.5 py-3.5 rounded-md",
        "text-sm font-semibold whitespace-nowrap",
        "transition-colors duration-300 ease-out",
        "overflow-hidden",
        variant === "primary" && [
          "bg-[#e31e24]",
          "border border-[#e31e24]",
          "text-white",
          "hover:bg-transparent",
          "hover:text-[#e31e24]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}