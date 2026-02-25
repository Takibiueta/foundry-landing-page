import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "お問い合わせ | 株式会社ミヨシキャスティング",
    description:
        "鋳造・機械加工のご相談、お見積もりのご依頼はお気軽にどうぞ。フォームまたはお電話にてお問い合わせください。",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">お問い合わせ</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            鋳造・機械加工のご相談、お見積もりのご依頼はお気軽にどうぞ。
                            材質選定や工法のご提案から対応いたします。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                                    お電話・直接のご連絡
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                TEL
                                            </p>
                                            <a
                                                href="tel:0883773477"
                                                className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                                            >
                                                0883-77-3477
                                            </a>
                                            <p className="text-xs text-text-light mt-1">FAX: 0883-77-3300</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                受付時間
                                            </p>
                                            <p className="text-base font-semibold text-primary">
                                                平日 8:00 〜 17:00
                                            </p>
                                            <p className="text-xs text-text-light mt-1">
                                                土日祝日・年末年始を除く
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                所在地
                                            </p>
                                            <p className="text-sm font-semibold text-primary leading-relaxed">
                                                〒771-2302
                                                <br />
                                                徳島県三好市三野町加茂野宮1725番地1
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Maps */}
                                <div className="mt-8 rounded-sm overflow-hidden shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0!2d133.8600!3d34.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5qCq5byP5Lya56S-44Of44On44K344Kt44Oj44K544Ue44Kj44Oz44Kw!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="株式会社ミヨシキャスティング 所在地"
                                    />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                                    メールでのお問い合わせ
                                </h2>

                                <form className="bg-white rounded-sm p-8 shadow-sm space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                会社名
                                            </label>
                                            <input
                                                id="company"
                                                type="text"
                                                placeholder="株式会社○○"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                お名前 <span className="text-accent text-xs ml-1">必須</span>
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="山田 太郎"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-primary mb-2"
                                        >
                                            メールアドレス <span className="text-accent text-xs ml-1">必須</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="example@company.co.jp"
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="tel"
                                            className="block text-sm font-semibold text-primary mb-2"
                                        >
                                            電話番号
                                        </label>
                                        <input
                                            id="tel"
                                            type="tel"
                                            placeholder="000-0000-0000"
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block text-sm font-semibold text-primary mb-2"
                                        >
                                            お問い合わせ種別 <span className="text-accent text-xs ml-1">必須</span>
                                        </label>
                                        <select
                                            id="category"
                                            required
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                        >
                                            <option value="">選択してください</option>
                                            <option value="estimate">見積もり依頼</option>
                                            <option value="casting">鋳造に関するご相談</option>
                                            <option value="machining">機械加工に関するご相談</option>
                                            <option value="recruit">採用に関するお問い合わせ</option>
                                            <option value="other">その他</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-primary mb-2"
                                        >
                                            お問い合わせ内容 <span className="text-accent text-xs ml-1">必須</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            placeholder="材質・重量・数量・納期など、お気軽にお書きください。図面が固まっていない段階でも構いません。"
                                            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                                        />
                                    </div>

                                    <p className="text-xs text-text-light leading-relaxed">
                                        ご入力いただいた個人情報は、お問い合わせへの回答にのみ使用いたします。
                                        詳しくは
                                        <a href="/privacy" className="text-accent hover:underline ml-1">
                                            プライバシーポリシー
                                        </a>
                                        をご覧ください。
                                    </p>

                                    <button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 rounded-sm transition-colors text-sm tracking-wide"
                                    >
                                        送信する
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
