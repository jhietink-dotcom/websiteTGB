import type { Metadata } from "next";
import BiocharContent from "./BiocharContent";

export const metadata: Metadata = {
  title: "Biochar",
  description:
    "We co-develop industrial biochar projects with agribusinesses and industrial partners who hold substantial biomass residues — turning that residue into durable carbon removal.",
};

export default function BiocharPage() {
  return <BiocharContent />;
}
