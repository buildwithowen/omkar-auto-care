import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Brake Systems | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function BrakeSystemsPage() {
  return <TemporaryServicePage title="Brake Systems" />;
}
