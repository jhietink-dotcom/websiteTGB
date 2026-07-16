export function DashboardMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F1A12] text-white text-xs font-mono">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A2B1E] border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 bg-white/5 rounded px-3 py-1 text-white/30 text-[10px]">
          app.thegreenbranch.nl
        </div>
      </div>
      {/* App chrome */}
      <div className="flex h-[340px]">
        {/* Sidebar */}
        <div className="w-44 bg-[#0A1410] border-r border-white/5 flex flex-col p-3 gap-0.5 shrink-0">
          <div className="px-2 py-1.5 mb-1">
            <div className="text-[9px] font-bold text-[#FFB84D] tracking-widest uppercase">OS TGB</div>
          </div>
          {[
            { icon: "⬡", label: "Projects", active: false },
            { icon: "◈", label: "Screening", active: false },
            { icon: "◉", label: "Development", active: true },
            { icon: "◎", label: "MRV", active: false },
            { icon: "⊕", label: "Expansion", active: false },
          ].map((item) => (
            <div
              key={`dev-${item.label}`}
              className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] ${
                item.active
                  ? "bg-[#00965D] text-white font-semibold"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              <span className="text-[11px]">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <div className="mt-auto pt-2 border-t border-white/5">
            <div className="px-2 py-1.5 text-[9px] text-white/30">Sapucaia Project</div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-white">Development Platform</div>
              <div className="text-[9px] text-white/40">Sapucaia Sustainable Forests · Feasibility Phase</div>
            </div>
            <div className="flex gap-1.5">
              <div className="px-2 py-0.5 bg-[#00965D]/30 border border-[#00965D]/40 rounded text-[9px] text-[#4caf80]">Active</div>
              <div className="px-2 py-0.5 bg-[#FFB84D]/20 border border-[#FFB84D]/30 rounded text-[9px] text-[#FFB84D]">Phase 3/5</div>
            </div>
          </div>

          {/* Phase timeline */}
          <div className="flex items-center gap-0 text-[8px]">
            {["Screening", "Pre-Feasibility", "Feasibility", "Development", "MRV"].map((p, i) => (
              <div key={p} className="flex items-center">
                <div className={`flex flex-col items-center gap-0.5 ${i < 3 ? "text-[#4caf80]" : i === 3 ? "text-[#FFB84D]" : "text-white/20"}`}>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                    i < 3 ? "bg-[#00965D] border-[#00965D]" : i === 3 ? "bg-[#FFB84D]/20 border-[#FFB84D]" : "border-white/10"
                  }`}>
                    {i < 3 ? "✓" : i === 3 ? "●" : "○"}
                  </div>
                  <span className={`${i > 2 ? "hidden" : ""}`}>{p.split("-")[0]}</span>
                </div>
                {i < 4 && <div className={`w-8 h-px mx-1 ${i < 2 ? "bg-[#00965D]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          {/* Content cards */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-white/5 rounded-lg p-2.5">
              <div className="text-[9px] font-semibold text-white/60 mb-1.5">Partner Deliverables</div>
              {[
                { label: "Carbon Methodology", status: "approved" },
                { label: "Project Boundary Design", status: "in_progress" },
                { label: "Baseline Eligibility", status: "pending" },
              ].map((d) => (
                <div key={d.label} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <span className="text-[9px] text-white/50 truncate mr-2">{d.label}</span>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded-full shrink-0 ${
                    d.status === "approved" ? "bg-[#00965D]/30 text-[#4caf80]" :
                    d.status === "in_progress" ? "bg-[#FFB84D]/20 text-[#FFB84D]" :
                    "bg-white/5 text-white/30"
                  }`}>
                    {d.status === "approved" ? "Approved" : d.status === "in_progress" ? "In Progress" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-2.5">
              <div className="text-[9px] font-semibold text-white/60 mb-1.5">Key Metrics</div>
              {[
                { label: "Area", value: "4,800 ha" },
                { label: "Est. Volume", value: "320K tCO₂" },
                { label: "Methodology", value: "VM0047" },
                { label: "Validator", value: "SCS Global" },
              ].map((m) => (
                <div key={m.label} className="flex justify-between py-1 border-b border-white/5 last:border-0">
                  <span className="text-[9px] text-white/40">{m.label}</span>
                  <span className="text-[9px] text-white/70 font-medium">{m.value}</span>
                </div>
              ))}
            </div>
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
            <div className="text-[9px] font-bold text-[#FFB84D] tracking-widest uppercase">OS TGB</div>
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
