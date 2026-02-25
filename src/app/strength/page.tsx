import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowRight, Factory, Wrench, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "ミヨシの強み | 株式会社ミヨシキャスティング",
    description:
        "鋳造から機械加工まで一貫生産体制、30台超の設備、CAE解析による品質保証。ミヨシキャスティングが選ばれる3つの理由をご紹介します。",
};

const strengthDetails = [
    {
        id: "integrated",
        title: "一貫生産体制",
        enTitle: "Integrated Production",
        icon: Factory,
        summary: "発注先は、ミヨシ一社で済みます。",
        body: `型製作から鋳造、熱処理、ショットブラスト、機械加工、検査まで社内で完結します。
発注先ごとの見積り取得・納期調整・品質確認——その管理工数と横持ち運賃を、構造的に削減できます。
設計段階からのVE提案も積極的に行い、お客様のトータルコスト最適化をサポートします。`,
        steps: ["型製作", "鋳造", "熱処理", "ブラスト・仕上げ", "機械加工", "検査・出荷"],
        badge: "対応工程 6工程",
    },
    {
        id: "equipment",
        title: "充実の設備群",
        enTitle: "Advanced Equipment",
        icon: Wrench,
        summary: "大型MCから複合加工機まで、30台超の加工設備。",
        body: `DMG MORI NHX6300をはじめとする横形・立形マシニングセンター、
OKUMA MULTUS B400Ⅱ複合加工機、CNC旋盤群を保有しています。
多品種・高精度の加工ニーズに対応可能です。
また、グループ会社（鳥取）の大型横形MC（NH8000等）との連携により、
自社単独では対応しきれない大型・特殊案件にも柔軟に対応できます。`,
        equipmentHighlights: [
            { name: "横形マシニングセンター", spec: "DMG MORI NHX6300（X1,050 / Y900 / Z1,030mm）" },
            { name: "立形マシニングセンター", spec: "OKK VM7Ⅲ（X1,530 / Y740 / Z660mm）" },
            { name: "インテリジェント複合加工機", spec: "OKUMA MULTUS B400Ⅱ（最大加工径690mm）" },
            { name: "CNC旋盤", spec: "OKUMA LB45Ⅱ-M（最大振り630 / 最大加工長2,000mm）" },
        ],
        badge: "MC・CNC旋盤 30台超",
    },
    {
        id: "quality",
        title: "データで裏付ける品質",
        enTitle: "Quality Assurance",
        icon: ShieldCheck,
        summary: "CAE解析から分光分析まで、経験と技術の両輪で品質を担保。",
        body: `鋳造前に鋳造CAE「JSCAST」によるシミュレーションを実施。
引け巣や湯回り不良のリスクを事前に把握し、型設計にフィードバックします。
3次元CAD「Creo」による設計支援、据置型固体金属発光分光分析装置「SPECTROMAXx」による材質保証も完備。
75年超の実績から生まれた職人の目と、最新のデジタル技術が品質を守ります。`,
        badge: "創業 1949年（昭和24年）",
    },
];

export default function StrengthPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Strength</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">ミヨシの強み</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            お客様の手間を減らすために。一貫生産・充実設備・品質保証の3つの柱でご支援します。
                        </p>
                    </div>
                </section>

                {strengthDetails.map((item, index) => (
                    <section
                        key={item.id}
                        id={item.id}
                        className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-bg"}`}
                    >
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row gap-16 items-start">
                                {/* Left: Text */}
                                <div className="w-full lg:w-1/2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-6">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                        {item.enTitle}
                                    </p>
                                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg font-semibold text-primary/80 mb-6">{item.summary}</p>
                                    <p className="text-text text-sm leading-relaxed whitespace-pre-line">{item.body}</p>
                                    <div className="mt-6">
                                        <span className="inline-block text-xs font-bold text-primary bg-primary/5 border border-primary/20 px-4 py-2 rounded-full">
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Right: Steps or Equipment */}
                                <div className="w-full lg:w-1/2">
                                    {item.steps && (
                                        <div className="bg-bg rounded-sm p-8">
                                            <p className="text-xs font-bold tracking-widest text-accent uppercase mb-6">
                                                生産フロー
                                            </p>
                                            <div className="flex flex-col gap-3">
                                                {item.steps.map((step, i) => (
                                                    <div key={i} className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                                                            {i + 1}
                                                        </div>
                                                        <span className="text-sm font-medium text-primary">
                                                            {step}
                                                        </span>
                                                        {i < item.steps.length - 1 && (
                                                            <div className="absolute ml-4 mt-10 h-3 w-px bg-primary/20" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Materials */}
                                            <div className="mt-8 pt-6 border-t border-gray-200">
                                                <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                                                    対応材質
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {["FC（ねずみ鋳鉄）", "FCD（ダクタイル鋳鉄）", "ステンレス鋳鋼"].map(
                                                        (m) => (
                                                            <span
                                                                key={m}
                                                                className="text-xs font-medium border border-primary/30 text-primary px-3 py-1 rounded-full"
                                                            >
                                                                {m}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {item.equipmentHighlights && (
                                        <div className="space-y-3">
                                            {item.equipmentHighlights.map((eq) => (
                                                <div
                                                    key={eq.name}
                                                    className="bg-white rounded-sm p-5 shadow-sm border-l-4 border-accent"
                                                >
                                                    <p className="text-sm font-bold text-primary mb-1">{eq.name}</p>
                                                    <p className="text-xs text-text-light">{eq.spec}</p>
                                                </div>
                                            ))}
                                            <a
                                                href="/facility"
                                                className="inline-flex items-center gap-2 text-sm text-accent font-medium mt-2 hover:underline"
                                            >
                                                設備一覧をすべて見る <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
