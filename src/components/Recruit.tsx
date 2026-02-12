"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Recruit() {
    return (
        <section className="py-24 bg-accent/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                                Careers
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                                手を動かす。考える。<br />形になる。
                            </h3>
                            <p className="text-text mb-8 leading-relaxed">
                                鋳造は、材料・温度・時間——変数と向き合い続ける仕事です。<br />
                                経験は問いません。ものづくりの手触りを、ここで。<br />
                                工場見学からでも構いません。
                            </p>

                            <a href="/recruit" className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-sm font-medium hover:bg-accent-light transition-colors shadow-sm hover:shadow-md">
                                採用情報を見る
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="aspect-video bg-gray-300 rounded-sm overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                                Image: Person working (Warm tone)
                            </div>
                            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
