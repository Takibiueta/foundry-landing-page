import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
    title: "会社情報 | 株式会社ミヨシキャスティング",
    description:
        "株式会社ミヨシキャスティングの会社概要・企業理念・沿革・協力工場ネットワークをご紹介します。昭和24年創業、徳島県三好市の鋳造メーカーです。",
};

const companyInfo = [
    { label: "会社名", value: "株式会社ミヨシキャスティング" },
    { label: "所在地", value: "〒771-2302 徳島県三好市三野町加茂野宮1725番地1" },
    { label: "TEL", value: "0883-77-3477" },
    { label: "FAX", value: "0883-77-3300" },
    { label: "創業", value: "昭和24年（1949年）4月" },
    { label: "設立", value: "平成21年（2009年）4月（株式会社に組織変更）" },
    { label: "資本金", value: "4,800万円" },
    { label: "代表者", value: "代表取締役社長　国安 秀典" },
    { label: "事業内容", value: "各種鋳物製品（FC・FCD・ステンレス鋳鋼）の製造、機械加工、建設業" },
    { label: "敷地面積", value: "本社工場 8,107m²（約2,456坪）" },
];

const history = [
    { year: "昭和24年4月", event: "国安鋳造として創業" },
    { year: "昭和29年4月", event: "企業組合 三好鋳造工場に改組" },
    { year: "昭和53年8月", event: "建築工事業・鋼構物工事業を登録、一般建築業開始" },
    { year: "昭和56年10月", event: "資本増額、出資総額500万円" },
    { year: "昭和61年10月", event: "資本増額4,300万円、合計出資総額4,800万円" },
    { year: "昭和62年3月", event: "三野町に鋳造工場新築" },
    { year: "平成4年12月", event: "徳島ダイワ精工 協力工場となる" },
    { year: "平成7年3月", event: "三野町工場（鋳造工場・機械工場）落成" },
    { year: "平成7年4月", event: "社名変更 → （企）ミヨシキャスティング" },
    { year: "平成21年4月", event: "組織変更 → 株式会社ミヨシキャスティング" },
];

const partners = [
    { region: "徳島", name: "株式会社平田鋳造" },
    { region: "香川", name: "金安鋳造株式会社" },
    { region: "愛媛", name: "株式会社クリタ" },
    { region: "鳥取（グループ会社）", name: "株式会社ミヨシ（敷地44,813m² / 従業員30名）" },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Company</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">会社情報</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            昭和24年創業。社是「誠心誠意」のもと、鋳造ひとすじ75年超の実績を積み重ねてきました。
                        </p>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="py-20 bg-white" id="philosophy">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                        <p className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">Philosophy</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                            企業理念
                        </h2>
                        <p className="text-5xl font-serif font-bold text-primary tracking-widest mb-8">誠心誠意</p>
                        <p className="text-text leading-relaxed">
                            私たちは単に図面通りに鉄を流し込むだけの工場ではありません。
                            材質の選定から、より効率的な形状の提案、そして加工まで。
                            「どうすればより良い製品になるか」を常に誠心誠意取り組み、
                            お客様と共に最適解を導き出すことが、私たちのものづくりです。
                        </p>
                    </div>
                </section>

                {/* Company Overview */}
                <section className="py-20 bg-bg" id="overview">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Overview</p>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-10">会社概要</h2>

                        <div className="bg-white rounded-sm shadow-sm overflow-hidden max-w-3xl">
                            <dl className="divide-y divide-gray-100">
                                {companyInfo.map((item) => (
                                    <div key={item.label} className="flex gap-6 px-8 py-4">
                                        <dt className="w-32 flex-shrink-0 text-sm font-semibold text-gray-500">
                                            {item.label}
                                        </dt>
                                        <dd className="text-sm text-text leading-relaxed">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="py-20 bg-white" id="history">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">History</p>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-10">沿革</h2>

                        <div className="max-w-3xl relative">
                            {/* Timeline line */}
                            <div className="absolute left-36 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

                            <div className="space-y-6">
                                {history.map((item, index) => (
                                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-0">
                                        <div className="md:w-36 pt-1">
                                            <span className="text-sm font-bold text-accent">{item.year}</span>
                                        </div>
                                        <div className="md:pl-10 relative">
                                            {/* Dot */}
                                            <div className="absolute -left-[13px] top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-white hidden md:block" />
                                            <p className="text-sm text-text leading-relaxed">{item.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Network */}
                <section className="py-20 bg-bg" id="network">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Network</p>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">協力工場ネットワーク</h2>
                        <p className="text-text-light text-sm mb-10 max-w-xl leading-relaxed">
                            自社設備の対応範囲を超える案件でも、長年の連携実績を持つパートナー工場との
                            ネットワークにより、大型鋳物・ステンレス・アルミに対応できる場合があります。
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
                            {partners.map((p) => (
                                <div
                                    key={p.name}
                                    className="bg-white rounded-sm p-6 shadow-sm border border-gray-100"
                                >
                                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                                        {p.region}
                                    </p>
                                    <p className="text-sm font-semibold text-primary leading-relaxed">{p.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
