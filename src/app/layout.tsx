import { Shell, metadataFor } from "@/components/shell";
import { en } from "@/content/en";

export const metadata = metadataFor(en);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
