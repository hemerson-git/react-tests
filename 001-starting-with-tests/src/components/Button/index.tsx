import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export function Button({ children, isLoading = false }: ButtonProps) {
  return (
    <button className="bg-[green] min-w-[100px] w-full py-2 rounded-md transition-opacity hover:opacity-75">
      {isLoading ? "Loading..." : children}
    </button>
  );
}
