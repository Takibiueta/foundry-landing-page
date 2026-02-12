"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                Image: Worker inspecting a mold (Clean, Bright)
                            </div>
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
                                Philosophy
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 leading-snug">
                                Foundry + Laboratory
                                <br />
                                <span className="text-2xl md:text-3xl mt-2 block">工場であり、研究所であれ。</span>
                            </h3>
                            <div className="space-y-6 text-text leading-relaxed">
                                <p>
                                    私たちは単に図面通りに鉄を流し込むだけの工場ではありません。
                                    材質の選定から、より効率的な形状の提案、そして加工まで。
                                </p>
                                <p>
                                    「どうすればより良い製品になるか」を常に実験し、検証し、
                                    お客様と共に最適解を導き出す。
                                    それが、私たちの考える現代の鋳造（ファウンドリ）です。
                                </p>
                                <div className="pt-4">
                                    <p className="font-serif text-lg font-bold text-primary">
                                        株式会社ミヨシキャスティング
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        取締役 常務　国安 秀典
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="/company" className="inline-flex items-center text-accent font-medium hover:text-accent-light transition-colors group">
                                    <span className="mr-2">私たちについて</span>
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
