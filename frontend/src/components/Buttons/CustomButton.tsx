"use client";
import { useRouter } from "next/navigation";

interface CustomButtonProps {
  label: string;
  color?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: string;
  disabled?: boolean;
  size?: string;
  path?: string; // <- path for internal/external navigation
}

export default function CustomButton({
  label,
  color = "primary",
  icon,
  className,
  variant,
  disabled = false,
  size,
  path,
}: CustomButtonProps) {
  const router = useRouter();

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

  const handleClick = () => {
    if (disabled || !path) return;

    // If it's an external link (starts with http), use window.location
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      router.push(path);
    }
  };

  return (
    <button className={btnClasses} onClick={handleClick} disabled={disabled}>
      {icon}
      {label}
    </button>
  );
}
