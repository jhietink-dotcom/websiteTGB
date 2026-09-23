// Single source of truth for the portfolio's locale-independent project data
// (used on the Projects page and anywhere else, e.g. the Home page, that
// needs to reference the portfolio — so counts/figures never drift out of
// sync between pages).

export type StatusKey = "Active" | "Certified" | "Development" | "Concept";

export type ProjectStatic = {
  num: string;
  flag: string;
  photo: string;
  align: "left" | "right";
  statusKey: StatusKey;
  kind: "biochar" | "arr";
  lat: number;
  lon: number;
};

export const projectsStatic: ProjectStatic[] = [
  { num: "01", flag: "🇧🇷", photo: "/img/DSCF9854.JPG", align: "left", statusKey: "Certified", kind: "arr", lat: -17.0, lon: -39.6 }, // Bahia
  { num: "02", flag: "🇧🇷", photo: "/img/tff-DSCF8276.JPG", align: "right", statusKey: "Development", kind: "arr", lat: -11.5, lon: -55.8 }, // Mato Grosso
  { num: "03", flag: "🇧🇷", photo: "/img/DSCF9805.JPG", align: "left", statusKey: "Concept", kind: "arr", lat: -3.8, lon: -52.0 }, // Pará
  { num: "04", flag: "🇧🇷", photo: "/img/DSCF9831.JPG", align: "right", statusKey: "Development", kind: "arr", lat: -30.85, lon: -53.15 }, // Rio Grande do Sul
  { num: "05", flag: "🇧🇷", photo: "/img/biochar.jpg", align: "left", statusKey: "Development", kind: "biochar", lat: -1.72, lon: -48.88 }, // Abaetetuba, Pará
  { num: "06", flag: "🇹🇿", photo: "/img/DSCF9797.JPG", align: "right", statusKey: "Development", kind: "arr", lat: -5.3, lon: 36.98 }, // Kiteto, Tanzania
];

export const PROJECT_COUNT = projectsStatic.length;
