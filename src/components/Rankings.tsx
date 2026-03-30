import { rankings } from "@/lib/data";

const intentColors: Record<string, string> = {
  Commercial: "bg-blue-50 text-blue-700 border-blue-200",
  Transactional: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Informational: "bg-orange-50 text-orange-700 border-orange-200",
};

export default function Rankings() {
  return (
    <section id="rankings" className="py-28 px-6 max-w-7xl mx-auto">
      <p className="text-xs tracking-widest uppercase text-[var(--accent)] font-semibold mb-3">Performance</p>
      <h2 className="font-playfair text-5xl font-bold text-[var(--ink)] mb-4">Our SEO Rankings</h2>
      <p className="text-[var(--muted)] mb-14 max-w-xl font-light">High-intent casino keywords across Tier 1 and emerging markets. Earned through technical SEO, editorial authority, and zero shortcuts.</p>
      <div className="grid grid-cols-3 gap-5 mb-14">
        {[
          { num: "850+", label: "Page 1 Keywords" },
          { num: "2.4M", label: "Monthly Organic Visits" },
          { num: "DR 72", label: "Domain Rating" },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-[var(--border)] rounded-2xl px-8 py-7 text-center">
            <div className="font-playfair text-4xl font-bold text-[var(--accent)] mb-1">{m.num}</div>
            <div className="text-xs tracking-widest uppercase text-[var(--muted)]">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--pearl-2)]">
              {["Keyword","Position","Market","Volume / mo","Intent"].map((h) => (
                <th key={h} className="text-left px-6 py-4 text-xs tracking-widest uppercase text-[var(--muted)] font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rankings.map((r, i) => (
              <tr key={r.keyword} className={`border-b border-[var(--border)] hover:bg-[var(--pearl)] transition-colors ${i === rankings.length - 1 ? "border-none" : ""}`}>
                <td className="px-6 py-4 font-medium text-[var(--ink)]">{r.keyword}</td>
                <td className="px-6 py-4"><span className="font-playfair text-2xl font-bold text-[var(--accent)]">#{r.position}</span></td>
                <td className="px-6 py-4 text-[var(--muted)]">{r.market}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-[var(--pearl-3)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="text-xs text-[var(--muted)] min-w-[36px]">{r.volume}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs border px-2.5 py-1 rounded-full ${intentColors[r.intent]}`}>{r.intent}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}