import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full items-center justify-center flex-col">
      <h1>Hello, World!</h1>

      <Button type="button">button</Button>
    </main>
  );
}
