import Image from "next/image";
import {
  Activity, ArrowRight, Building2, CheckCircle2, ChevronDown, CircleDot,
  FileText, GitBranch, Globe, Hexagon, LayoutGrid, Satellite, Settings, Settings2,
  TrendingUp, Unlock, Users,
} from "lucide-react";

/* Light-theme recreation of the GreenBranch OS Development screen. */

const navMain = [
  { icon: LayoutGrid, label: "Projects" },
  { icon: Activity, label: "MRV" },
];
const navModules = [
  { icon: GitBranch, label: "Development", active: true },
  { icon: TrendingUp, label: "Expansion" },
  { icon: Satellite, label: "MRV V1" },
  { icon: Satellite, label: "MRV V2" },
];
const navAdmin = [
  { icon: Globe, label: "Project Page" },
  { icon: Settings, label: "Admin" },
];
const phases = [
  { n: "Phase 1", label: "Screening", done: true },
  { n: "Phase 2", label: "Pre-Feas", done: true },
  { n: "Phase 3", label: "Feasibility", done: true },
  { n: "Phase 4", label: "Development", done: false },
];

export function DashboardMockup() {
  return (
    <div className="max-w-[600px] ml-auto rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl bg-white text-navy">
      <div className="flex min-h-0">
        {/* sidebar */}
        <div className="w-[150px] shrink-0 bg-[#FBFCFB] border-r border-[#E8EDE9] px-2.5 py-3 flex flex-col gap-3.5">
          <Image src="/logo-green.png" alt="The Green Branch" width={90} height={14} className="h-3.5 w-auto ml-1" />
          <div className="-mt-2.5 px-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#9AA79E]">
            Operating system
          </div>

          <div>
            <div className="px-1 mb-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#9AA79E]">
              Active project
            </div>
            <div className="flex items-center justify-between gap-1 rounded-md border border-[#E8EDE9] bg-white px-2 py-1.5 text-[9px] font-medium text-navy">
              <span className="min-w-0 truncate">Sapucaia Sustainable…</span>
              <ChevronDown className="w-2.5 h-2.5 text-[#9AA79E] shrink-0" />
            </div>
          </div>

          <div className="flex flex-col gap-px">
            {navMain.map((n) => (
              <div key={n.label} className="flex items-center gap-[7px] rounded-md px-2 py-[5px] text-[9px] text-[#4A5A50]">
                <n.icon className="w-[11px] h-[11px] text-[#7E8D84]" />
                {n.label}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-px">
            <div className="px-2 mb-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#9AA79E]">Modules</div>
            {navModules.map((n) => (
              <div
                key={n.label}
                className={`flex items-center gap-[7px] rounded-md px-2 py-[5px] text-[9px] ${
                  n.active ? "bg-[#206042] font-semibold text-white" : "text-[#4A5A50]"
                }`}
              >
                <n.icon className={`w-[11px] h-[11px] ${n.active ? "" : "text-[#7E8D84]"}`} />
                {n.label}
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-px">
            <div className="px-2 mb-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#9AA79E]">Admin</div>
            {navAdmin.map((n) => (
              <div key={n.label} className="flex items-center gap-[7px] rounded-md px-2 py-[5px] text-[9px] text-[#4A5A50]">
                <n.icon className="w-[11px] h-[11px] text-[#7E8D84]" />
                {n.label}
              </div>
            ))}
          </div>
        </div>

        {/* main */}
        <div className="flex-1 min-w-0 bg-white p-4 flex flex-col gap-2.5">
          <div className="flex items-start justify-between gap-2.5">
            <div className="min-w-0">
              <div className="text-[17px] font-bold text-navy leading-tight tracking-tight">Development</div>
              <div className="mt-0.5 text-[9px] text-[#6B7A71] truncate">
                Sapucaia Sustainable Forests — Project Development Platform
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#E8EDE9] bg-white px-2.5 py-[5px] text-[9px] font-medium text-navy">
              <Settings2 className="w-2.5 h-2.5 text-[#7E8D84]" />
              Admin View
              <ChevronDown className="w-2.5 h-2.5 text-[#9AA79E]" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-lg border border-[#E8EDE9] bg-[#FBFCFB] px-3 py-2.5">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <Unlock className="w-[11px] h-[11px] text-[#206042]" />
                <span className="text-[10px] font-semibold text-navy">Page Module Unlocked</span>
              </div>
              <div className="mt-[3px] text-[9px] leading-relaxed text-[#6B7A71]">
                Pre-Feasibility has been approved. You can now manage the investor-facing public page for this project.
              </div>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md border border-[#E8EDE9] bg-white px-2.5 py-1.5 text-[9px] font-semibold text-navy">
              Go to Page
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>

          <div className="flex gap-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#E8EDE9] bg-white px-2.5 py-1.5 text-[9px] font-semibold text-navy">
              <GitBranch className="w-2.5 h-2.5 text-[#206042]" />
              Development Phases
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-[#F1F4F2] px-2.5 py-1.5 text-[9px] font-medium text-[#6B7A71]">
              <FileText className="w-2.5 h-2.5 text-[#9AA79E]" />
              Templates &amp; Examples
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg border border-[#E8EDE9] bg-white p-2.5">
            {phases.map((p, i) => (
              <div key={p.n} className="flex flex-1 items-center gap-1.5 min-w-0">
                {i > 0 && <ArrowRight className="w-2.5 h-2.5 shrink-0 text-[#C3CDC7]" />}
                <div
                  className={`flex-1 min-w-0 rounded-md px-1.5 py-2 text-center ${
                    p.done ? "bg-[#F3F9F5]" : "border border-[#206042] bg-[#F1F4F2]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    {p.done ? (
                      <CheckCircle2 className="w-[11px] h-[11px] text-forest" />
                    ) : (
                      <CircleDot className="w-[11px] h-[11px] text-navy" />
                    )}
                    <span className={`text-[9px] text-navy ${p.done ? "font-semibold" : "font-bold"}`}>{p.n}</span>
                  </div>
                  <div className={`my-[3px] text-[8px] ${p.done ? "text-[#6B7A71]" : "font-medium text-[#4A5A50]"}`}>
                    {p.label}
                  </div>
                  <div className="flex justify-center gap-[3px]">
                    <div className="h-[3px] w-[18px] rounded-full bg-[#206042]" />
                    <div className="h-[3px] w-[18px] rounded-full bg-[#0ACC88]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[#E8EDE9] bg-white p-3">
            <div className="flex items-start justify-between gap-2.5">
              <div className="flex min-w-0 gap-2">
                <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-forest-muted">
                  <Hexagon className="w-3 h-3 text-[#206042]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-navy">Phase 4: Development</div>
                  <div className="mt-0.5 text-[9px] leading-relaxed text-[#6B7A71]">
                    Complete full technical development to make the project investment-ready and
                    implementation-capable.
                  </div>
                </div>
              </div>
              <div className="shrink-0 whitespace-nowrap text-[9px] text-[#6B7A71]">Phase 4 of 4</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Users, title: "Partner Deliverables", sub: "Documents to be submitted by the project partner", count: "3/3" },
              { icon: Building2, title: "TGB Deliverables", sub: "Documents prepared by TGB", count: "10/10" },
            ].map((d) => (
              <div key={d.title} className="min-w-0 rounded-lg border border-[#E8EDE9] bg-white p-2.5">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <d.icon className="w-[11px] h-[11px] text-[#206042]" />
                  <span className="text-[10px] font-bold text-navy">{d.title}</span>
                </div>
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0 text-[8px] leading-relaxed text-[#6B7A71]">{d.sub}</div>
                  <div className="shrink-0 text-right">
                    <div className="text-[9px] font-bold text-navy">
                      {d.count} <span className="font-normal text-[#6B7A71]">required</span>
                    </div>
                    <div className="mt-1 h-1 w-11 rounded-full bg-[#206042]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MRVMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1A12] text-white text-xs">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A2B1E] border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px]">
          app.thegreenbranch.nl/mrv
        </div>
      </div>
      <div className="flex h-[340px]">
        <div className="w-44 bg-[#0A1410] border-r border-white/5 flex flex-col p-3 gap-0.5 shrink-0">
          <div className="px-2 py-1.5 mb-1">
            <div className="text-[9px] font-bold text-[#FFB84D] tracking-widest uppercase">GreenBranch OS</div>
          </div>
          {[
            { icon: "⬡", label: "Projects", active: false },
            { icon: "◈", label: "Screening", active: false },
            { icon: "◉", label: "Development", active: false },
            { icon: "◎", label: "MRV", active: true },
            { icon: "⊕", label: "Expansion", active: false },
          ].map((item) => (
            <div key={`mrv-${item.label}`} className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] ${item.active ? "bg-[#00965D] text-white font-semibold" : "text-white/40"}`}>
              <span className="text-[11px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3">
          <div className="text-[11px] font-bold text-white">MRV Dashboard</div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Active Instances", value: "12", color: "text-[#4caf80]" },
              { label: "Field Submissions", value: "847", color: "text-white" },
              { label: "Avg Health", value: "94%", color: "text-[#FFB84D]" },
              { label: "Next Audit", value: "Jun 25", color: "text-white/60" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-lg p-2">
                <div className={`text-base font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[8px] text-white/40 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 flex-1">
            <div className="text-[9px] font-semibold text-white/60 mb-2">Project Health</div>
            {[
              { name: "Sapucaia", health: "green", pct: 96, ha: "4,800 ha" },
              { name: "Serra do Sudeste", health: "green", pct: 91, ha: "2,200 ha" },
              { name: "Suledo ARR", health: "amber", pct: 78, ha: "6,100 ha" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
                <div className={`w-2 h-2 rounded-full shrink-0 ${p.health === "green" ? "bg-[#4caf80]" : "bg-[#FFB84D]"}`} />
                <span className="text-[9px] text-white/70 flex-1">{p.name}</span>
                <div className="w-16 bg-white/10 rounded-full h-1">
                  <div className={`h-1 rounded-full ${p.health === "green" ? "bg-[#00965D]" : "bg-[#FFB84D]"}`} style={{ width: `${p.pct}%` }} />
                </div>
                <span className="text-[8px] text-white/40">{p.ha}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InvestorDashboardMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1A12] text-white text-xs">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A2B1E] border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px]">
          app.thegreenbranch.nl/my-purchases
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 h-[340px]">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-bold text-white">Buyer Portfolio</div>
          <div className="text-[9px] text-[#FFB84D]">3 active positions</div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Total Credits", value: "12,400 tCO₂", sub: "across 3 projects" },
            { label: "Portfolio Value", value: "€186K", sub: "at delivery" },
            { label: "Vintage", value: "2025–2027", sub: "delivery window" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-lg p-2">
              <div className="text-[10px] font-bold text-white">{s.value}</div>
              <div className="text-[8px] text-white/40 mt-0.5">{s.label}</div>
              <div className="text-[8px] text-white/25 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-lg p-2.5 flex-1">
          <div className="text-[9px] font-semibold text-white/60 mb-2">Purchase Details</div>
          <div className="grid grid-cols-4 gap-1 mb-1.5 text-[8px] text-white/30 font-medium">
            <span>Project</span><span>Type</span><span>Volume</span><span>Status</span>
          </div>
          {[
            { proj: "Sapucaia", type: "Dev. Contribution", vol: "5,000 tCO₂", status: "Active", color: "text-[#4caf80]" },
            { proj: "Serra do Sudeste", type: "Spot Credits", vol: "3,400 tCO₂", status: "Delivered", color: "text-white/50" },
            { proj: "Suledo ARR", type: "ERPA 2026", vol: "4,000 tCO₂", status: "Contracted", color: "text-[#FFB84D]" },
          ].map((r) => (
            <div key={r.proj} className="grid grid-cols-4 gap-1 py-1.5 border-b border-white/5 last:border-0 text-[9px]">
              <span className="text-white/70 truncate">{r.proj}</span>
              <span className="text-white/40 truncate">{r.type}</span>
              <span className="text-white/60">{r.vol}</span>
              <span className={r.color}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
