import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Services & Repairs | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ServicesRepairsPage() {
  return <TemporaryServicePage title="Services & Repairs" />;
}
