"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { Icons } from "@/components/Icons";

import { Logo } from "./Logo";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#features",
        label: "Features",
    },
    {
        href: "#testimonials",
        label: "Testimonials",
    },
    {
        href: "#pricing",
        label: "Pricing",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <div className="container h-16 px-4 w-screen flex justify-between items-center">
                    <div className="font-bold flex">
                        <Link href="/" className="ml-2 font-bold text-xl flex">
                            <Logo />
                        </Link>
                    </div>

                    {/* mobile */}
                    <div className="flex md:hidden">
                        <ModeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="px-2">
                                <Menu
                                    className="flex md:hidden h-5 w-5"
                                    onClick={() => setIsOpen(true)}
                                ></Menu>
                            </SheetTrigger>

                            <SheetContent side={"left"}>
                                <SheetHeader>
                                    <SheetTitle className="font-bold text-xl text-start">
                                        SaaS Marketing
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col justify-center items-start space-y-3 mt-6">
                                    <ul className="flex flex-col space-y-3">
                                        {routeList.map(
                                            ({ href, label }: RouteProps) => (
                                                <li key={label}>
                                                    <Link
                                                        key={label}
                                                        href={href}
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        className={buttonVariants(
                                                            {
                                                                variant:
                                                                    "ghost",
                                                            }
                                                        )}
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <Link
                                        href="https://github.com/chrisstef/saas-marketing-template.git"
                                        target="_blank"
                                        className={`w-[110px] border ${buttonVariants(
                                            {
                                                variant: "secondary",
                                            }
                                        )}`}
                                    >
                                        <Icons.github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* desktop */}
                    <div className="hidden md:flex gap-2">
                        <ul className="flex space-x-2">
                            {routeList.map((route: RouteProps, i) => (
                                <li key={i}>
                                    <Link
                                        href={route.href}
                                        className={`text-[17px] ${buttonVariants(
                                            {
                                                variant: "ghost",
                                            }
                                        )}`}
                                    >
                                        {route.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <div className="flex space-x-2">
                            <Link
                                href="https://github.com/chrisstef/saas-marketing-template.git"
                                target="_blank"
                                className={`border ${buttonVariants({
                                    variant: "secondary",
                                })}`}
                            >
                                <Icons.github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>

                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </NavigationMenu>
        </nav>
    );
};

export default Navbar;
