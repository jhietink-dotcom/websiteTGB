import type { Metadata } from "next";
import GrievanceContent from "./GrievanceContent";

export const metadata: Metadata = {
  title: "Grievance mechanism",
  description: "The Green Branch grievance mechanism and forms.",
};

export default function GrievancePage() {
  return <GrievanceContent />;
}
