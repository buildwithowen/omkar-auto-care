import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Shaft, Axle & Wheel Bearing | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ShaftAxleOrWheelBearingPage() {
  return <TemporaryServicePage title="Shaft, Axle & Wheel Bearing" />;
}
