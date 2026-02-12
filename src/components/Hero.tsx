"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-primary">
            {/* Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="h-full w-full bg-gray-800 animate-pulse flex items-center justify-center text-gray-600">
                    <span className="text-xl">Video Background Placeholder (Factory/Pouring Scene)</span>
                </div>
                {/* Actual video tag would go here */}
                {/* <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video> */}
            </div>

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-white text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-lg md:text-xl font-medium tracking-widest mb-6 text-accent">
                        TEMPERATURE WITHIN PRECISION
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-in-expand leading-tight mb-8">
                        <span className="block">熱を</span>
                        <span className="block">操る。</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-base md:text-lg text-gray-200 leading-relaxed font-light">
                        1000分の1ミリを追求する精密さと、
                        <br className="hidden md:block" />
                        1000度を超える溶湯の熱量。
                        <br />
                        その両極を、人の手と技術で繋ぐ。
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ArrowDown className="w-8 h-8 opacity-70" />
            </motion.div>
        </section>
    );
}
