"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companyInfo = [
    { label: "会社名", value: "株式会社ミヨシキャスティング" },
    { label: "所在地", value: "〒771-2302 徳島県三好市三野町加茂野宮1725番地1" },
    { label: "TEL / FAX", value: "0883-77-3477 ／ 0883-77-3300" },
    { label: "創業", value: "昭和24年（1949年）4月" },
    { label: "設立", value: "平成21年（2009年）4月（株式会社に組織変更）" },
    { label: "資本金", value: "4,800万円" },
    { label: "代表者", value: "代表取締役社長　国安 秀典" },
    { label: "事業内容", value: "各種鋳物製品（FC・FCD・ステンレス鋳鋼）の製造、機械加工、建設業" },
    { label: "敷地面積", value: "本社工場 8,107m²（約2,456坪）" },
];

export function About() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                            <Image
                                src="/images/casting-pouring.jpg"
                                alt="鋳造工場 注湯作業"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bg-dark -z-10" />
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                                Company
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-snug">
                                会社概要
                            </h3>
                            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                                昭和24年創業。社是「誠心誠意」のもと、鋳造ひとすじ75年超の実績を積み重ねてきました。
                            </p>

                            {/* Company Info Table */}
                            <dl className="divide-y divide-gray-100 border-t border-gray-100">
                                {companyInfo.map((item) => (
                                    <div key={item.label} className="flex gap-4 py-3">
                                        <dt className="w-28 flex-shrink-0 text-xs font-semibold text-gray-500 pt-0.5">
                                            {item.label}
                                        </dt>
                                        <dd className="text-sm text-text leading-relaxed">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="mt-8">
                                <a
                                    href="/about"
                                    className="inline-flex items-center text-accent font-medium hover:text-accent-light transition-colors group"
                                >
                                    <span className="mr-2">会社情報の詳細を見る</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
