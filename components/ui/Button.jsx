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
        "px-7 py-5 rounded-lg",
        "text-md font-semibold whitespace-nowrap",
        "transition-colors duration-300 ease-out",
        "overflow-hidden",
        variant === "primary" && [
          // default state
          "bg-brand-cyan/50",
          "border-2 border-brand-cyan/70", // 👈 slightly stronger
          "text-white",

          // hover
          "hover:bg-transparent",
          "hover:text-brand-cyan/70",
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
