import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Exhaust & Emission Systems | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ExhaustEmissionSystemsPage() {
  return <TemporaryServicePage title="Exhaust & Emission Systems" />;
}
