import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "About Omkar Autocare | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  return <TemporaryServicePage title="About Omkar Autocare" />;
}
