import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Brake Repair, Pads & Rotors | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function BrakeRepairPadsRotorsPage() {
  return <TemporaryServicePage title="Brake Repair, Pads & Rotors" />;
}
