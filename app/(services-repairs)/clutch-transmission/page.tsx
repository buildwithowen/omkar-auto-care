import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Clutch & Transmission | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ClutchTransmissionPage() {
  return <TemporaryServicePage title="Clutch & Transmission" />;
}
