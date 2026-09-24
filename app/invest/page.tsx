import type { Metadata } from "next";
import InvestContent from "./InvestContent";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Two ways to invest in carbon removal at the foundation of the market: the land that grows the forests, and the facilities that produce durable carbon. Qualified investors only.",
};

export default function InvestPage() {
  return <InvestContent />;
}
