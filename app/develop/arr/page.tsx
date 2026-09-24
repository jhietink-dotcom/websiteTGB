import type { Metadata } from "next";
import ArrContent from "./ArrContent";

export const metadata: Metadata = {
  title: "Reforestation (ARR)",
  description:
    "We develop afforestation, reforestation and revegetation projects through a structured, stage-gated process — reducing risk before capital scales.",
};

export default function ArrPage() {
  return <ArrContent />;
}
