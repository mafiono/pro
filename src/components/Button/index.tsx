import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded" } as const;
const variants = {
  fill: {
    gray_500: "bg-gray-500 text-white-A700",
    yellow_900: "bg-yellow-900",
    blue_gray_800_07: "bg-blue_gray-800_07",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 shadow-bs text-white-A700",
    gray_900: "bg-gray-900 text-gray-500",
    teal_400: "bg-teal-400 text-white-A700",
  },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-[11px]", lg: "p-4" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
