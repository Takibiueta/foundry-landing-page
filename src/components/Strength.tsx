"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Wrench, ShieldCheck } from "lucide-react";

const strengths = [
    {
        title: "一貫生産体制",
        enTitle: "Integrated Production",
        description:
            "型製作 → 鋳造 → 熱処理 → ショットブラスト → 機械加工 → 検査。複数業者への分散発注が不要になり、横持ち運賃の削減・納期短縮・窓口一本化を実現します。",
        badge: "対応工程 6工程",
        icon: Factory,
    },
    {
        title: "充実の設備群",
        enTitle: "Advanced Equipment",
        description:
            "DMG MORI NHX6300をはじめとする横形・立形マシニングセンター、OKUMA MULTUS B400Ⅱ複合加工機、CNC旋盤群を保有。多品種・高精度の加工ニーズに対応します。",
        badge: "MC・CNC旋盤 30台超",
        icon: Wrench,
    },
    {
        title: "データで裏付ける品質",
        enTitle: "Quality Assurance",
        description:
            "鋳造CAE「JSCAST」による事前シミュレーション、3次元CAD「Creo」による設計支援、SPECTROMAX分光分析装置による材質保証。経験と最新技術の両輪で品質を担保します。",
        badge: "創業 1949年",
        icon: ShieldCheck,
    },
];

export function Strength() {
    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                        Strength
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                        ミヨシが選ばれる3つの理由
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                                {item.enTitle}
                            </p>
                            <p className="text-text-light text-sm leading-relaxed flex-grow">
                                {item.description}
                            </p>
                            {/* Badge */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="inline-block text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                                    {item.badge}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Flow */}
                <motion.div
                    className="mt-16 bg-white rounded-sm p-8 shadow-sm overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs font-bold tracking-widest text-accent uppercase mb-6">
                        Process — ワンストップ生産フロー
                    </p>
                    <div className="flex items-center gap-2 min-w-max">
                        {["型製作", "鋳造", "熱処理", "ブラスト・仕上げ", "機械加工", "検査・出荷"].map(
                            (step, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mb-2">
                                            {i + 1}
                                        </div>
                                        <span className="text-sm font-medium text-primary whitespace-nowrap">
                                            {step}
                                        </span>
                                    </div>
                                    {i < 5 && (
                                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mb-4" />
                                    )}
                                </div>
                            )
                        )}
                    </div>
                    <p className="mt-6 text-sm text-text-light leading-relaxed">
                        お客様の窓口はミヨシ一社。設計段階からのVE提案、工程間のシームレスな品質管理、そしてトータルコストの最適化をお約束します。
                    </p>
                    {/* Materials badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {["FC（ねずみ鋳鉄）", "FCD（ダクタイル鋳鉄）", "ステンレス鋳鋼"].map((m) => (
                            <span
                                key={m}
                                className="text-xs font-medium border border-primary/30 text-primary px-3 py-1 rounded-full"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="mt-10 text-center">
                    <a
                        href="/strength"
                        className="inline-block border border-primary text-primary px-8 py-3 rounded-sm text-sm font-medium hover:bg-primary hover:text-white transition-all"
                    >
                        詳しく見る
                    </a>
                </div>
            </div>
        </section>
    );
}
