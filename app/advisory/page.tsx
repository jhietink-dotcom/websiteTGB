import type { Metadata } from "next";
import AdvisoryContent from "./AdvisoryContent";

export const metadata: Metadata = {
  title: { absolute: "Carbon Advisory Services | For Corporates, Developers & FLAG Companies | The Green Branch" },
  description:
    "Carbon advisory for corporates, project developers and landowners, and FLAG companies — from a team that has built, certified, and sold its own nature-based removal projects.",
};

export default function AdvisoryPage() {
  return <AdvisoryContent />;
}
