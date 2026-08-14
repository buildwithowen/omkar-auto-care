import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "dark";
  fullWidth?: boolean;
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  fullWidth = false,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}