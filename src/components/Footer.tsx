import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex items-end">
                                <div className="w-2 h-2 bg-green-500 mb-1"></div>
                                <div className="w-3 h-3 bg-red-500 rotate-45 mx-1"></div>
                                <div className="w-2 h-2 bg-blue-500"></div>
                            </div>
                            <Link href="/" className="text-xl font-bold tracking-wider block">
                                MIYOSHI CASTING
                            </Link>
                        </div>
                        <address className="text-gray-400 text-sm leading-relaxed mb-6 not-italic">
                            株式会社ミヨシキャスティング<br />
                            〒771-2302<br />
                            徳島県三好市三野町加茂野宮1725番地1<br />
                            <br />
                            TEL: 0883-77-3477<br />
                            FAX: 0883-77-3300<br />
                            Email: kuniyasu@m-casting.com
                        </address>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">
                            Menu
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm hover:text-accent transition-colors">
                                    会社情報
                                </Link>
                            </li>
                            <li>
                                <Link href="/strength" className="text-sm hover:text-accent transition-colors">
                                    選ばれる理由
                                </Link>
                            </li>
                            <li>
                                <Link href="/technology" className="text-sm hover:text-accent transition-colors">
                                    技術・設備
                                </Link>
                            </li>
                            <li>
                                <Link href="/recruit" className="text-sm hover:text-accent transition-colors">
                                    採用情報
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">
                            Contact
                        </h3>
                        <p className="text-sm text-gray-300 mb-6">
                            鋳造、機械加工、建設工事など、お気軽にお問い合わせください。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-sm text-sm font-medium transition-colors"
                        >
                            お問い合わせフォーム
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} MIYOSHI CASTING Co., Ltd. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
