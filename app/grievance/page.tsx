import type { Metadata } from "next";
import GrievanceContent from "./GrievanceContent";

export const metadata: Metadata = {
  title: "Grievance Mechanism",
  description: "The Green Branch grievance mechanism and forms.",
};

export default function GrievancePage() {
  return <GrievanceContent />;
}
