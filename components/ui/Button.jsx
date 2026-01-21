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
        "px-5 py-5 rounded-lg",
        "text-md font-bold whitespace-nowrap",
        "transition-colors duration-300 ease-out",
        "overflow-hidden",
        variant === "primary" && [
          // default state
          "bg-[#ff5227]",
          "border-2 border-[#ff5c35]",
          "text-white",

          // hover
          "hover:bg-transparent",
          "hover:text-[#ff5c35]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
