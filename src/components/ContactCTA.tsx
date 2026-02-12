export function ContactCTA() {
    return (
        <section className="py-24 bg-primary text-white text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                    図面がある方も、まだの方も。
                </h2>
                <p className="text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                    材質選定や工法のご提案から対応します。<br />
                    製品の仕様が固まっていない段階でも、お気軽にお声がけください。
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/contact"
                        className="inline-block bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors shadow-lg"
                    >
                        図面から相談する
                    </a>
                    <a
                        href="tel:0883773477"
                        className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors border border-white/20"
                    >
                        0883-77-3477
                    </a>
                </div>
            </div>
        </section>
    );
}
