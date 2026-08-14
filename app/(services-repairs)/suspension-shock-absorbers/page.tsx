import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Suspension & Shock Absorbers | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SuspensionShockAbsorbersPage() {
  return <TemporaryServicePage title="Suspension & Shock Absorbers" />;
}
