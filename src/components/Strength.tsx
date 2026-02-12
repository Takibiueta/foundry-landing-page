"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, MessageSquare } from "lucide-react";

const strengths = [
    {
        title: "一貫生産体制",
        enTitle: "Integrated Production",
        description: "型設計から鋳造、機械加工、そして検査まで。全工程を自社および協力工場との連携でワンストップ対応。納期短縮とコストダウンを実現します。",
        icon: Layers,
    },
    {
        title: "デジタルの職人芸",
        enTitle: "Digital Artisanship",
        description: "3D CAD/CAMによる流動解析と、熟練職人の手作業による仕上げ。最新技術と伝統技能の融合が、複雑形状の鋳造を可能にします。",
        icon: Cpu,
    },
    {
        title: "提案する鋳造",
        enTitle: "Proposals",
        description: "「この形状なら軽量化できる」「この材質なら強度が上がる」など、図面の一歩先へ。設計段階からのVA/VE提案を得意としています。",
        icon: MessageSquare,
    },
];

export function Strength() {
    return (
        <section className="py-24 bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                        Why Foundry
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                        選ばれる理由
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                                {item.enTitle}
                            </p>
                            <p className="text-text-light text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/strength" className="inline-block border border-primary text-primary px-8 py-3 rounded-sm text-sm font-medium hover:bg-primary hover:text-white transition-all">
                        詳しく見る
                    </a>
                </div>
            </div>
        </section>
    );
}
