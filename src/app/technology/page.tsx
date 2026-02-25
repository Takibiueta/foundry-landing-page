import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { CheckCircle2, Settings2, FlaskConical, ScanLine } from "lucide-react";

export const metadata: Metadata = {
    title: "技術・設備 | 株式会社ミヨシキャスティング",
    description:
        "ミヨシキャスティングの製造工程・保有設備・対応材質をご紹介。自動造型から機械加工・検査まで一貫対応。FC/FCD鋳物、1kg〜400kgに対応。",
};

const processSteps = [
    {
        step: "01",
        title: "型製作",
        desc: "3次元CAD「Creo」を用いた型設計。鋳造CAE「JSCAST」によるシミュレーションで不良リスクを事前検証します。",
    },
    {
        step: "02",
        title: "鋳造",
        desc: "自動造型機（500×400対応）による量産と、700〜900サイズの手込め造型による中〜大型品製造。生型・自硬性を案件に応じて使い分けます。",
    },
    {
        step: "03",
        title: "熱処理・ブラスト",
        desc: "鋳造後の熱処理による材質調整、ショットブラストによる表面清浄化を行い、次工程への最良の状態を整えます。",
    },
    {
        step: "04",
        title: "機械加工",
        desc: "DMG MORI、OKUMA等のマシニングセンター・複合加工機・CNC旋盤群により、高精度な仕上げ加工を一貫対応します。",
    },
    {
        step: "05",
        title: "検査",
        desc: "3次元測定器による寸法検査、据置型固体金属発光分光分析装置「SPECTROMAXx」による材質確認を実施します。",
    },
    {
        step: "06",
        title: "出荷",
        desc: "検査合格品を梱包・出荷。必要に応じて試験成績書を添付します。",
    },
];

const equipmentList = [
    {
        category: "マシニングセンター",
        icon: Settings2,
        items: [
            { name: "横形MC", spec: "DMG MORI NHX6300（X1,050 / Y900 / Z1,030mm）" },
            { name: "横形MC", spec: "DMG MORI NHX5000（X630 / Y560 / Z800mm）" },
            { name: "立形MC", spec: "OKK VM7Ⅲ（X1,530 / Y740 / Z660mm）" },
            { name: "立形MC", spec: "DMG MORI NVX 5060（X600 / Y560 / Z510mm）" },
        ],
    },
    {
        category: "複合加工機・CNC旋盤",
        icon: FlaskConical,
        items: [
            { name: "インテリジェント複合加工機", spec: "OKUMA MULTUS B400Ⅱ（最大加工径690mm）" },
            { name: "CNC旋盤", spec: "OKUMA LB45Ⅱ-M（最大振り630 / 最大加工長2,000mm）" },
            { name: "CNC旋盤", spec: "複数台保有（詳細はお問い合わせください）" },
        ],
    },
    {
        category: "測定・検査設備",
        icon: ScanLine,
        items: [
            { name: "3次元測定器", spec: "寸法測定（精密部品対応）" },
            {
                name: "固体金属発光分光分析装置",
                spec: "SPECTROMAXx（材質・成分分析）",
            },
            { name: "鋳造CAEシステム", spec: "JSCAST（充填・凝固シミュレーション）" },
        ],
    },
];

const materials = [
    {
        name: "FC150〜250（ねずみ鋳鉄）",
        weight: "1〜400kg",
        application: "機械部品、ハウジング類",
        scope: "自社",
        highlight: true,
    },
    {
        name: "FCD450〜600（ダクタイル鋳鉄）",
        weight: "1〜400kg",
        application: "強度・耐衝撃が必要な部品",
        scope: "自社",
        highlight: true,
    },
    {
        name: "大型鋳物（FC/FCD）",
        weight: "400〜3,000kg",
        application: "大型機械部品",
        scope: "協力工場",
        highlight: false,
    },
    {
        name: "ステンレス鋳鋼",
        weight: "要相談",
        application: "耐食性が必要な部品",
        scope: "協力工場",
        highlight: false,
    },
    {
        name: "アルミ合金",
        weight: "要相談",
        application: "軽量化が必要な部品",
        scope: "協力工場",
        highlight: false,
    },
];

export default function TechnologyPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">
                            Technology &amp; Equipment
                        </p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">技術・設備</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            型設計から検査・出荷まで。一貫した生産プロセスと充実した設備で、お客様の図面を形にします。
                        </p>
                    </div>
                </section>

                {/* Manufacturing Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Manufacturing Process
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">製造工程</h2>
                            <p className="mt-3 text-text-light text-sm leading-relaxed max-w-2xl">
                                型製作から出荷まで、すべての工程を自社で一貫対応。各工程でのデータ管理と品質確認により、安定した品質をお届けします。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((s) => (
                                <div
                                    key={s.step}
                                    className="bg-bg rounded-sm p-6 border-l-4 border-accent"
                                >
                                    <p className="text-4xl font-bold text-accent/20 font-mono mb-3">
                                        {s.step}
                                    </p>
                                    <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                                    <p className="text-sm text-text leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Equipment List */}
                <section className="py-20 bg-bg">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Equipment
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">保有設備</h2>
                            <p className="mt-3 text-text-light text-sm leading-relaxed max-w-2xl">
                                MC・CNC旋盤合計30台超を保有。多品種・高精度の加工ニーズに幅広く対応します。
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {equipmentList.map((cat) => (
                                <div key={cat.category} className="bg-white rounded-sm p-6 shadow-sm">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                                            <cat.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-sm font-bold text-primary">{cat.category}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-medium text-primary">{item.name}</p>
                                                    <p className="text-text-light text-xs mt-0.5">{item.spec}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Materials & Size Table */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                                Materials &amp; Size
                            </p>
                            <h2 className="text-3xl font-serif font-bold text-primary">対応材質・サイズ</h2>
                            <p className="mt-3 text-text-light text-sm leading-relaxed max-w-2xl">
                                自社設備での対応範囲を超える案件は、長年の連携実績を持つパートナー工場と協力してお引き受けします。
                            </p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white text-left">
                                        <th className="px-5 py-4 font-semibold">材質</th>
                                        <th className="px-5 py-4 font-semibold">対応重量</th>
                                        <th className="px-5 py-4 font-semibold">主な用途</th>
                                        <th className="px-5 py-4 font-semibold">対応区分</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {materials.map((m, i) => (
                                        <tr
                                            key={i}
                                            className={
                                                m.highlight
                                                    ? "bg-accent/5 border-b border-accent/10"
                                                    : "bg-gray-50 border-b border-gray-100"
                                            }
                                        >
                                            <td className="px-5 py-4 font-medium text-primary">{m.name}</td>
                                            <td className="px-5 py-4 text-text">{m.weight}</td>
                                            <td className="px-5 py-4 text-text">{m.application}</td>
                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${m.scope === "自社"
                                                            ? "bg-primary text-white"
                                                            : "bg-gray-200 text-gray-600"
                                                        }`}
                                                >
                                                    {m.scope}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-xs text-text-light">
                            ※ 協力工場対応品については、窓口はミヨシキャスティングが一括で担います。お客様の管理負担は変わりません。
                        </p>
                    </div>
                </section>

                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
