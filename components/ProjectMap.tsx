"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LeafletMapHandle } from "./LeafletMap";

export type ProjectMapMarker = {
  name: string;
  place: string;
  lat: number;
  lon: number;
  kind: "biochar" | "arr";
};

interface ProjectMapProps {
  markers: ProjectMapMarker[];
  resetLabel: string;
  legend: { biochar: string; arr: string };
  className?: string;
}

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-white/5" />,
});

export default function ProjectMap({ markers, resetLabel, legend, className }: ProjectMapProps) {
  const mapHandle = useRef<LeafletMapHandle>(null);

  return (
    <div className={cn("relative w-full h-[460px] rounded-xl overflow-hidden border border-white/10 leaflet-map-tgb", className)}>
      <LeafletMap ref={mapHandle} markers={markers} onActiveChange={() => {}} />
      <button
        type="button"
        onClick={() => mapHandle.current?.resetView()}
        className="absolute left-3 bottom-3 z-[500] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-forest-deeper/90 border border-white/15 text-xs font-semibold text-white hover:bg-forest-deeper transition-colors shadow-lg"
      >
        <Compass className="w-3.5 h-3.5" /> {resetLabel}
      </button>
      <div className="absolute right-3 bottom-3 z-[500] flex items-center gap-3 px-3 py-2 rounded-lg bg-forest-deeper/90 border border-white/15 text-[11px] text-white/70 shadow-lg">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> {legend.biochar}</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-forest" /> {legend.arr}</span>
      </div>
    </div>
  );
}
