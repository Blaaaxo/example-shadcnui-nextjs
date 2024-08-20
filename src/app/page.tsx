
import { CalendarDateRangePicker } from "@/components/CalendarDateRangePicker";
import MainNav from "@/components/MainNav";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import UserNav from "@/components/UserNav";
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
                        <h1 className="font-medium text-xl">Example</h1>
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            <CalendarDateRangePicker />
                            <Button>Download</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
