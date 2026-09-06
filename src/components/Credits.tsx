export function Credits() {
  const bibleSources = [
    { name: "dalsuum/bible-master", desc: "67 JSON files — Tedim, Hakha, Falam, Paite versions", url: "https://github.com/dalsuum/bible-master" },
  ];

  const dictSources = [
    { name: "ZomiLanguage/dictionary", desc: "93,931 Zolai→English entries", url: "https://github.com/ZomiLanguage/dictionary" },
    { name: "dalsuum/zolai-dictionary", desc: "7,861 headwords — trilingual (ZO-EN-MY)", url: "https://github.com/dalsuum/zolai-dictionary" },
    { name: "paumkim/zomi-dataset", desc: "130K+ dictionary entries", url: "https://github.com/paumkim/zomi-dataset" },
    { name: "TongDot", desc: "5,004 Zolai-English entries", url: "https://www.tongdot.com" },
    { name: "Glosbe API", desc: "Tedim-English translation examples", url: "https://glosbe.com/cpd/en" },
  ];

  const corpusSources = [
    { name: "paumkim/zomi-dataset", desc: "208MB clean corpus — 3M+ sentences", url: "https://github.com/paumkim/zomi-dataset" },
    { name: "Zolai Grammar Vol 1", desc: "Taang Zomi (2010) — authoritative grammar", url: "#" },
    { name: "Zolai Sinna", desc: "ZAUS (2010) — 34-lesson textbook", url: "#" },
    { name: "ZVS 2018", desc: "Zomi Virtual State — orthography standard", url: "#" },
  ];

  const contributors = [
    { name: "paumkim", role: "Comprehensive Zolai dataset + crawling scripts" },
    { name: "dalsuum", role: "Bible JSON corpus + trilingual dictionary" },
    { name: "Min Si Thu", role: "Tedim-English-Burmese Handbook + MyanmarGPT" },
    { name: "Taang Zomi", role: "Authoritative Zolai Grammar Vol 1" },
    { name: "ZAUS", role: "Zolai Sinna textbook" },
    { name: "Zomi Virtual State", role: "ZVS 2018 orthography standard" },
    { name: "peterlianpi", role: "Project founder + primary developer" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Data Sources & Attribution
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We are grateful to the communities, researchers, and organizations who
          made this language preservation work possible.
        </p>

        {/* Why Bible */}
        <div className="mb-12 p-6 rounded-2xl bg-blue-950/30 border border-blue-800/30">
          <h3 className="text-xl font-semibold mb-3 text-blue-300">
            Why We Use the Bible
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Bible is our <strong>primary training corpus</strong> because it is the{" "}
            <strong>only complete, trusted, EN/ZO parallel corpus</strong> available for
            Tedim Zolai — with 31,102 parallel verses across multiple Chin language
            versions. We use it as a <em>language learning corpus</em>, not for religious
            purposes.
          </p>
        </div>

        {/* Bible Sources */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-white">Bible Sources</h3>
          <div className="grid gap-3">
            {bibleSources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
              >
                <span className="font-medium text-blue-400">{s.name}</span>
                <span className="text-gray-400 text-sm ml-3">{s.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Dictionary Sources */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-white">Dictionary Sources</h3>
          <div className="grid gap-3">
            {dictSources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-colors"
              >
                <span className="font-medium text-green-400">{s.name}</span>
                <span className="text-gray-400 text-sm ml-3">{s.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Corpus Sources */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-white">Corpus & Reference</h3>
          <div className="grid gap-3">
            {corpusSources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-colors"
              >
                <span className="font-medium text-purple-400">{s.name}</span>
                <span className="text-gray-400 text-sm ml-3">{s.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-white">Community Contributors</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {contributors.map((c) => (
              <div
                key={c.name}
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50"
              >
                <span className="font-medium text-yellow-400">{c.name}</span>
                <span className="text-gray-400 text-sm block mt-1">{c.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/Zolai-AI/zolai-datasets/blob/main/data/CREDITS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            View Full Credits on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
