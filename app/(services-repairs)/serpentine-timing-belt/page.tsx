import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Serpentine & Timing Belt | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SerpentineTimingBeltPage() {
  return <TemporaryServicePage title="Serpentine & Timing Belt" />;
}
