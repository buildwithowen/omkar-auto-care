import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "System Diagnosis & Repair | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SystemDiagnosisRepairPage() {
  return <TemporaryServicePage title="System Diagnosis & Repair" />;
}
