"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, LayersControl } from "react-leaflet";
import type { ProjectMapMarker } from "./ProjectMap";

export interface LeafletMapHandle {
  flyToMarker: (index: number) => void;
  resetView: () => void;
}

interface LeafletMapProps {
  markers: ProjectMapMarker[];
  onActiveChange: (index: number | null) => void;
}

const FOCUS_ZOOM = 9;

function pinIcon(kind: ProjectMapMarker["kind"], active: boolean) {
  const fill = kind === "biochar" ? (active ? "#E8A030" : "#FFB84D") : active ? "#047740" : "#00965D";
  return L.divIcon({
    className: "",
    html: `<span class="block ${active ? "scale-110" : ""} transition-transform" style="filter:drop-shadow(0 1px 3px rgba(0,0,0,.5))">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" fill="${fill}" stroke="#0A1F15" stroke-width="1.2"/>
        <circle cx="12" cy="9" r="2.6" fill="#0A1F15"/>
      </svg>
    </span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 32],
    popupAnchor: [0, -30],
  });
}

const LeafletMap = forwardRef<LeafletMapHandle, LeafletMapProps>(function LeafletMap({ markers, onActiveChange }, ref) {
  const mapRef = useRef<L.Map | null>(null);
  const markerRefs = useRef<(L.Marker | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const bounds = useMemo(() => L.latLngBounds(markers.map((m) => [m.lat, m.lon] as [number, number])), [markers]);

  function setActive(index: number | null) {
    setActiveIndex(index);
    onActiveChange(index);
  }

  useImperativeHandle(ref, () => ({
    flyToMarker(index: number) {
      const m = markers[index];
      const map = mapRef.current;
      if (!m || !map) return;
      map.flyTo([m.lat, m.lon], FOCUS_ZOOM, { duration: 1 });
      markerRefs.current[index]?.openPopup();
      setActive(index);
    },
    resetView() {
      const map = mapRef.current;
      if (!map) return;
      map.flyToBounds(bounds, { padding: [32, 32], duration: 1 });
      setActive(null);
    },
  }));

  return (
    <MapContainer
      ref={mapRef}
      bounds={bounds}
      boundsOptions={{ padding: [32, 32] }}
      scrollWheelZoom
      className="w-full h-full"
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Satellite">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community"
            maxZoom={19}
          />
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution="Esri"
            maxZoom={19}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Streets">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            maxZoom={19}
          />
        </LayersControl.BaseLayer>
      </LayersControl>

      {markers.map((m, i) => (
        <Marker
          key={m.name}
          position={[m.lat, m.lon]}
          icon={pinIcon(m.kind, activeIndex === i)}
          ref={(el) => {
            markerRefs.current[i] = el;
          }}
          eventHandlers={{
            click: () => setActive(i),
          }}
        >
          <Popup>
            <div className="text-sm font-semibold text-ink">{m.name}</div>
            <div className="text-xs text-ink/60 mt-0.5">{m.place}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
});

export default LeafletMap;
