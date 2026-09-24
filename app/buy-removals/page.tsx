import type { Metadata } from "next";
import BuyRemovalsContent from "./BuyRemovalsContent";

export const metadata: Metadata = {
  title: { absolute: "Buy Carbon Credits | Verified Nature-Based Removals | The Green Branch" },
  description:
    "Buy verified nature-based carbon credits from certified reforestation and biochar projects. Built for SBTi targets, net zero commitments, and climate programs. VCS + CCB certified.",
};

export default function BuyCarbonCreditsPage() {
  return <BuyRemovalsContent />;
}
