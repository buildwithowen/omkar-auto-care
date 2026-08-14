import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Shocks & Struts Replacement | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ShocksStrutsReplacementPage() {
  return <TemporaryServicePage title="Shocks & Struts Replacement" />;
}
