"use client";

import { useState, useRef, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, MapPin, Clock, Paperclip, X, Upload, CheckCircle, AlertCircle } from "lucide-react";

const ACCEPTED_TYPES = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/tiff",
    "application/dxf",
    "application/dwg",
    // DXF/DWGはMIMEが不定なのでチェック時に拡張子も確認
];
const ACCEPTED_EXT = [".pdf", ".png", ".jpg", ".jpeg", ".tiff", ".tif", ".dxf", ".dwg"];
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

function isValidFile(file: File): string | null {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_EXT.includes(ext)) {
        return `非対応のファイル形式です（${file.name}）`;
    }
    if (file.size > MAX_SIZE_BYTES) {
        return `ファイルサイズが上限（${MAX_SIZE_MB}MB）を超えています（${file.name}）`;
    }
    return null;
}

export default function ContactPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [dragOver, setDragOver] = useState(false);
    const [fileError, setFileError] = useState<string | null>(null);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const addFiles = useCallback((newFiles: FileList | null) => {
        if (!newFiles) return;
        setFileError(null);
        const toAdd: File[] = [];
        for (const file of Array.from(newFiles)) {
            const err = isValidFile(file);
            if (err) {
                setFileError(err);
                return;
            }
            // 重複チェック
            if (!files.find((f) => f.name === file.name && f.size === file.size)) {
                toAdd.push(file);
            }
        }
        setFiles((prev) => [...prev, ...toAdd]);
    }, [files]);

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
        setFileError(null);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        addFiles(e.dataTransfer.files);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);
        files.forEach((file) => formData.append("attachment", file));

        try {
            // Formspree のエンドポイントに送信（YOUR_FORM_ID を差し替えてください）
            const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });
            if (res.ok) {
                setSubmitStatus("success");
                form.reset();
                setFiles([]);
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        }
    };

    return (
        <>
            <Header />
            <main className="pt-20 bg-bg">
                {/* Page Hero */}
                <section className="bg-primary text-white py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-accent font-bold tracking-widest text-sm mb-3 uppercase">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">お問い合わせ</h1>
                        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                            鋳造・機械加工のご相談、お見積もりのご依頼はお気軽にどうぞ。
                            図面（PDF・DXF等）を添付して具体的なご相談もいただけます。
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                                    お電話・直接のご連絡
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                TEL
                                            </p>
                                            <a
                                                href="tel:0883773477"
                                                className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                                            >
                                                0883-77-3477
                                            </a>
                                            <p className="text-xs text-text-light mt-1">FAX: 0883-77-3300</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                受付時間
                                            </p>
                                            <p className="text-base font-semibold text-primary">
                                                平日 8:00 〜 17:00
                                            </p>
                                            <p className="text-xs text-text-light mt-1">
                                                土日祝日・年末年始を除く
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-white rounded-sm p-6 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                                                所在地
                                            </p>
                                            <p className="text-sm font-semibold text-primary leading-relaxed">
                                                〒771-2302
                                                <br />
                                                徳島県三好市三野町加茂野宮1725番地1
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Google Maps */}
                                <div className="mt-8 rounded-sm overflow-hidden shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0!2d133.8600!3d34.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5qCq5byP5Lya56S-44Of44On44K344Kt44Oj44K544Ue44Kj44Oz44Kw!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="株式会社ミヨシキャスティング 所在地"
                                    />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-primary mb-8">
                                    メールでのお問い合わせ
                                </h2>

                                {submitStatus === "success" ? (
                                    <div className="bg-white rounded-sm p-10 shadow-sm flex flex-col items-center text-center gap-4">
                                        <CheckCircle className="w-12 h-12 text-green-500" />
                                        <h3 className="text-xl font-bold text-primary">送信が完了しました</h3>
                                        <p className="text-sm text-text-light leading-relaxed">
                                            お問い合わせいただきありがとうございます。<br />
                                            内容を確認のうえ、担当者よりご連絡いたします。
                                        </p>
                                        <button
                                            onClick={() => setSubmitStatus("idle")}
                                            className="mt-4 text-sm text-accent hover:underline"
                                        >
                                            新しいお問い合わせをする
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        encType="multipart/form-data"
                                        className="bg-white rounded-sm p-8 shadow-sm space-y-6"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="company"
                                                    className="block text-sm font-semibold text-primary mb-2"
                                                >
                                                    会社名
                                                </label>
                                                <input
                                                    id="company"
                                                    name="company"
                                                    type="text"
                                                    placeholder="株式会社○○"
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-semibold text-primary mb-2"
                                                >
                                                    お名前 <span className="text-accent text-xs ml-1">必須</span>
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    placeholder="山田 太郎"
                                                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                メールアドレス <span className="text-accent text-xs ml-1">必須</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="example@company.co.jp"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="tel"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                電話番号
                                            </label>
                                            <input
                                                id="tel"
                                                name="tel"
                                                type="tel"
                                                placeholder="000-0000-0000"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="category"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                お問い合わせ種別 <span className="text-accent text-xs ml-1">必須</span>
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                required
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                                            >
                                                <option value="">選択してください</option>
                                                <option value="estimate">見積もり依頼</option>
                                                <option value="casting">鋳造に関するご相談</option>
                                                <option value="machining">機械加工に関するご相談</option>
                                                <option value="recruit">採用に関するお問い合わせ</option>
                                                <option value="other">その他</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-semibold text-primary mb-2"
                                            >
                                                お問い合わせ内容 <span className="text-accent text-xs ml-1">必須</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="材質・重量・数量・納期など、お気軽にお書きください。図面が固まっていない段階でも構いません。"
                                                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-text placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                                            />
                                        </div>

                                        {/* ── ファイル添付 ── */}
                                        <div>
                                            <label className="block text-sm font-semibold text-primary mb-2">
                                                <Paperclip className="inline w-4 h-4 mr-1 -mt-0.5" />
                                                図面・資料の添付
                                                <span className="text-gray-400 font-normal ml-2 text-xs">
                                                    （任意）
                                                </span>
                                            </label>

                                            {/* ドロップゾーン */}
                                            <div
                                                role="button"
                                                tabIndex={0}
                                                onClick={() => fileInputRef.current?.click()}
                                                onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                                                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                                onDragLeave={() => setDragOver(false)}
                                                onDrop={handleDrop}
                                                className={`
                                                    relative border-2 border-dashed rounded-sm px-6 py-8 text-center cursor-pointer
                                                    transition-colors select-none
                                                    ${dragOver
                                                        ? "border-accent bg-accent/5"
                                                        : "border-gray-200 hover:border-accent/50 hover:bg-gray-50"
                                                    }
                                                `}
                                            >
                                                <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                                                <p className="text-sm text-text-light">
                                                    クリックまたはドラッグ＆ドロップでファイルを追加
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">
                                                    PDF・DXF・DWG・PNG・JPG・TIFF｜各 {MAX_SIZE_MB}MB まで
                                                </p>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    multiple
                                                    accept=".pdf,.dxf,.dwg,.png,.jpg,.jpeg,.tiff,.tif"
                                                    className="hidden"
                                                    onChange={(e) => addFiles(e.target.files)}
                                                />
                                            </div>

                                            {/* エラー表示 */}
                                            {fileError && (
                                                <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
                                                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                                    {fileError}
                                                </p>
                                            )}

                                            {/* 添付済みファイル一覧 */}
                                            {files.length > 0 && (
                                                <ul className="mt-3 space-y-2">
                                                    {files.map((file, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-sm px-3 py-2 text-sm"
                                                        >
                                                            <span className="flex items-center gap-2 text-text truncate">
                                                                <Paperclip className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                                                                <span className="truncate">{file.name}</span>
                                                                <span className="text-gray-400 flex-shrink-0 text-xs">
                                                                    ({(file.size / 1024).toFixed(0)} KB)
                                                                </span>
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFile(i)}
                                                                className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                                                                aria-label="削除"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {/* ── /ファイル添付 ── */}

                                        <p className="text-xs text-text-light leading-relaxed">
                                            ご入力いただいた個人情報は、お問い合わせへの回答にのみ使用いたします。
                                            詳しくは
                                            <a href="/privacy" className="text-accent hover:underline ml-1">
                                                プライバシーポリシー
                                            </a>
                                            をご覧ください。
                                        </p>

                                        {submitStatus === "error" && (
                                            <p className="text-sm text-red-500 flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4" />
                                                送信に失敗しました。お手数ですがお電話にてご連絡ください。
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitStatus === "sending"}
                                            className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-sm transition-colors text-sm tracking-wide"
                                        >
                                            {submitStatus === "sending" ? "送信中..." : "送信する"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
