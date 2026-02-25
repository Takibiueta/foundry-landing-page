"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "会社情報", href: "/about" },
    { name: "選ばれる理由", href: "/strength" },
    { name: "技術・設備", href: "/technology" },
    { name: "採用情報", href: "/recruit" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* Logo Mark Representation */}
                        <div className="flex items-end">
                            <div className="w-3 h-3 bg-green-600 mb-2"></div>
                            <div className="w-4 h-4 bg-red-600 rotate-45 mx-1 mb-1"></div>
                            <div className="w-3 h-3 bg-blue-600"></div>
                        </div>
                        <Link href="/" className="text-xl font-bold tracking-wider text-text group">
                            <span className="block leading-none">MIYOSHI</span>
                            <span className="text-[10px] font-normal tracking-widest text-gray-500">CASTING</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-text hover:text-accent transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-light transition-all"
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-bg-dark hover:text-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-4 text-base font-medium text-text hover:bg-bg-dark hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="block w-full text-center rounded-sm bg-primary px-5 py-4 text-base font-medium text-white hover:bg-primary-light"
                                onClick={() => setIsOpen(false)}
                            >
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
