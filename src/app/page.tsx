import MainNav from "@/components/MainNav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard to Shadcn Ui library",
}

export default function Home() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
          </div>
        </div>
      </div>
    </>
  );
}
