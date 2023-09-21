import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      type="text"
      className={`px-4 py-2 rounded-sm w-full ${className || ""}`}
      {...rest}
    />
  );
}
