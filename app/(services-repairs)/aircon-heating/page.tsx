import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Air Conditioning & Heating | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AirconHeatingPage() {
  return <TemporaryServicePage title="Air Conditioning & Heating" />;
}
