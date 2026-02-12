"use client";

import { motion } from "framer-motion";

const services = [
    {
        name: "鋳造事業 (FC/FCD・ステンレス)",
        desc: "各種鋳物（FC・FCD）からステンレス鋳物まで、高品質な素材供給を実現します。",
        image: "bg-gray-300",
    },
    {
        name: "機械部品加工",
        desc: "鋳造品の仕上げ加工から精密部品の製作まで、一貫した加工体制を整えています。",
        image: "bg-gray-400",
    },
    {
        name: "総合建設・鉄骨工事",
        desc: "建築基礎から鉄骨構造物の製作・施工まで、地域のインフラを支えます。",
        image: "bg-gray-500",
    },
];

export function Services() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">
                            Business Fields
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                            事業領域
                        </h3>
                    </div>
                    <a href="/technology" className="hidden md:block text-sm font-medium text-text border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                        製品・実績一覧を見る
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-sm cursor-pointer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Image Placeholder */}
                            <div className={`aspect-[3/4] ${item.image} transition-transform duration-700 group-hover:scale-110 relative`}>
                                <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-2xl">
                                    Image
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                                <p className="text-white/80 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <a href="/technology" className="text-sm font-medium text-text border-b border-primary pb-1">
                        製品・実績一覧を見る
                    </a>
                </div>
            </div>
        </section>
    );
}
