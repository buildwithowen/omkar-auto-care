import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FaqPage() {
  return <TemporaryServicePage title="Frequently Asked Questions" />;
}
