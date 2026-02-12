import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
    {
        date: "2024.05.20",
        cat: "お知らせ",
        title: "Webサイトをリニューアルしました",
        href: "/news/renewal",
    },
    {
        date: "2024.04.15",
        cat: "技術情報",
        title: "大型FCD鋳物の製造ラインを増設しました",
        href: "/news/line-expansion",
    },
    {
        date: "2024.03.10",
        cat: "採用",
        title: "2025年度新卒採用のエントリー受付を開始しました",
        href: "/recruit/2025",
    },
];

export function News() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                            News
                        </h2>
                        <h3 className="text-3xl md:text-3xl font-serif font-bold text-primary">
                            お知らせ
                        </h3>
                    </div>
                    <Link href="/news" className="hidden md:flex items-center text-sm font-medium text-text hover:text-accent transition-colors mt-4 md:mt-0">
                        一覧を見る <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="border-t border-gray-200">
                    {newsItems.map((item, index) => (
                        <Link key={index} href={item.href} className="flex flex-col md:flex-row md:items-center py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors group">
                            <div className="mb-2 md:mb-0 md:w-48 flex items-center space-x-4">
                                <span className="text-sm font-medium text-text-light">{item.date}</span>
                                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                    {item.cat}
                                </span>
                            </div>
                            <div className="flex-1">
                                <span className="text-base text-primary font-medium group-hover:text-accent transition-colors">
                                    {item.title}
                                </span>
                            </div>
                            <div className="hidden md:block text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link href="/news" className="inline-flex items-center text-sm font-medium text-text hover:text-accent transition-colors">
                        一覧を見る <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
