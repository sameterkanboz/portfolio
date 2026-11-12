import { Shell, metadataFor } from "@/components/shell";
import { tr } from "@/content/tr";

export const metadata = metadataFor(tr);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="tr">{children}</Shell>;
}
