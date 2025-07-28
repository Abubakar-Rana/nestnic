import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    {...props}
    className={`bg-[#00e676] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#00c864] transition-all ${className}`}
  >
    {children}
  </button>
);
