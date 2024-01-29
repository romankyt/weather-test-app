"use client";
import { useSearchParams } from "next/navigation";
import { Weather } from "./components/Weather";

export default function Home() {
  const params = useSearchParams();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24 bg-black">
      <Weather city={params.get("city") as string} />
    </main>
  );
}
