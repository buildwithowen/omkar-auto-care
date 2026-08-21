import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Engine | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnginePage() {
  return <TemporaryServicePage title="Engine" />;
}
