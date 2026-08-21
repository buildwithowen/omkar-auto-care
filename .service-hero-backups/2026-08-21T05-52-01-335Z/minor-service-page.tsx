import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Minor Service | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MinorServicePage() {
  return <TemporaryServicePage title="Minor Service" />;
}
