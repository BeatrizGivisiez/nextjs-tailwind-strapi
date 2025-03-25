"use client";

import { ReactNode } from "react";

interface CustomButtonProps {
  label: string;
  color:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  variant?: "soft" | "outline" | "dash" | "active";
  disabled?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
  icon?: ReactNode;
  className?: string;
}

export default function CustomButton({
  label,
  color = "primary",
  icon,
  className,
  variant,
  disabled = false,
  size,
}: CustomButtonProps) {
  const btnClasses = [
    "btn",
    `btn-${color}`,
    variant ? `btn-${variant}` : "",
    size ? `btn-${size}` : "",
    disabled ? "btn-disabled opacity-50 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={btnClasses}>
      {icon}
      {label}
    </button>
  );
}
