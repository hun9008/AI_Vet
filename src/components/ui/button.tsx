// components/ui/button.tsx
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  const baseClasses = "px-4 py-2 font-semibold rounded";
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-black",
    outline: "border border-gray-500 text-gray-500"
  }[variant];

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />
  );
};

export default Button;