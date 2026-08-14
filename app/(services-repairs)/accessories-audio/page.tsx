import type { Metadata } from "next";
import TemporaryServicePage from "@/components/shared/TemporaryServicePage";

export const metadata: Metadata = {
  title: "Accessories & Audio | Omkar Autocare",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccessoriesAudioPage() {
  return <TemporaryServicePage title="Accessories & Audio" />;
}
