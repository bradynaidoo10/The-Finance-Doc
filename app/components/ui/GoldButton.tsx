"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function GoldButton({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    solid:
      "bg-[#c8a84b] text-white hover:bg-[#b8943b] shadow-gold hover:shadow-gold-lg focus:ring-[#c8a84b]",
    outline:
      "border-2 border-[#c8a84b] text-[#c8a84b] hover:bg-[#c8a84b] hover:text-white focus:ring-[#c8a84b]",
  };

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
