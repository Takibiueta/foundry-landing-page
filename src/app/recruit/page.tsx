import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, MapPin, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "採用情報 | 株式会社ミヨシキャスティング",
    description:
        "ミヨシキャスティングの採用情報。鋳造・機械加工・建設事業で働く仲間を募集しています。経験不問、徳島県三好市。",
};

const appeals = [
    {
        title: "手を動かす。考える。形になる。",
        desc: "鋳造は、材料・温度・時間——変数と向き合い続ける仕事です。経験は問いません。ものづくりの手触りを、ここで。",
    },
    {
        title: "一貫ラインで、全工程を経験できる。",
        desc: "型製作から機械加工・検査まで、すべての工程が社内にあります。特定工程だけでなく、ものづくりの全体像を理解できる環境です。",
    },
    {
        title: "75年の技術が、あなたを育てる。",
        desc: "1949年（昭和24年）創業。熟練の職人と最新のデジタル技術が共存する職場で、確かな技術力を身につけられます。",
    },
];

const positions = [
    {
        title: "鋳造スタッフ",
        type: "正社員",
        description:
            "自動造型機・手込め造型による鋳物製造。鋳造の基本から応用まで、先輩スタッフが丁寧に指導します。",
        requirements: ["普通自動車免許（AT限定可）", "要素地方：徳島県三好市", "未経験歓迎"],
    },
    {
        title: "機械加工スタッフ",
        type: "正社員",
        description:
            "マシニングセンター・CNC旋盤を使用した金属加工。NC操作の経験があれば尚可。未経験者もOKです。",
        requirements: ["普通自動車免許", "要素地方：徳島県三好市", "機械操作経験者優遇（未経験可）"],
    },
    {
        title: "建設・鉄骨スタッフ",
        type: "正社員",
        description:
            "一般建設および鉄骨工事の施工。地元インフラを支えるやりがいある仕事です。各種資格取得支援あり。",
        requirements: ["普通自動車免許", "要素地方：徳島県三好市", "建設関連資格保持者優遇"],
    },
];

const workInfo = [
    { icon: Clock, label: "勤務時間", value: "8:00〜17:00（休憩1時間）※部署により異なる" },
    { icon: MapPin, label: "勤務地", value: "徳島県三好市（詳細は応募後にご案内）" },
    { icon: GraduationCap, label: "学歴・資格", value: "不問（普通自動車免許があれば尚可）" },
    { icon: Users, label: "雇用形態", value: "正社員（試用期間あり）" },
];

export default function RecruitPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">
                            Careers
                        </p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">採用情報</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            ものづくりの現場で、あなたの「手を動かしたい」という気持ちを形にしませんか。
                            経験の有無より、熱意を大切にする職場です。
                        </p>
                    </div>
                </section>

                {/* Appeals */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Why Miyoshi
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">
                                ミヨシで働く3つの魅力
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {appeals.map((a, i) => (
                                <div key={i} className="bg-bg rounded-sm p-8 border-t-4 border-accent">
                                    <p className="text-5xl font-bold text-accent/20 font-mono mb-4">
                                        0{i + 1}
                                    </p>
                                    <h3 className="text-lg font-bold text-primary mb-3">{a.title}</h3>
                                    <p className="text-sm text-text leading-relaxed">{a.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work Info */}
                <section className="py-20 bg-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Work Conditions
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">勤務条件（共通）</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
                            {workInfo.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white rounded-sm p-5 flex items-start gap-4 shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-light font-medium mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium text-primary">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-xs text-text-light">
                            ※ 詳細な待遇・給与・休日については応募後の面談にてご説明します。お気軽にお問い合わせください。
                        </p>
                    </div>
                </section>

                {/* Positions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Open Positions
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">募集職種</h2>
                        </div>
                        <div className="space-y-6">
                            {positions.map((pos, i) => (
                                <div
                                    key={i}
                                    className="bg-bg rounded-sm p-8 border border-gray-100 flex flex-col md:flex-row gap-8"
                                >
                                    <div className="md:w-1/3">
                                        <span className="inline-block text-xs font-bold text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full mb-3">
                                            {pos.type}
                                        </span>
                                        <h3 className="text-xl font-bold text-primary">{pos.title}</h3>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-sm text-text leading-relaxed mb-5">
                                            {pos.description}
                                        </p>
                                        <ul className="space-y-1">
                                            {pos.requirements.map((r, j) => (
                                                <li
                                                    key={j}
                                                    className="text-xs text-text-light flex items-center gap-2"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Entry CTA */}
                <section className="py-20 bg-accent text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-serif font-bold mb-4">
                            まずは工場見学からでも構いません。
                        </h2>
                        <p className="text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
                            「話を聞いてみたい」「現場を見てみたい」——そんな気持ちで構いません。
                            ご連絡をお待ちしています。
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-accent px-8 py-3 rounded-sm font-bold hover:bg-white/90 transition-colors shadow-sm"
                        >
                            採用について問い合わせる
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
