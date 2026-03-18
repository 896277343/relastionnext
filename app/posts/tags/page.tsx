import { getAllTags } from "@/lib/wordpress";
import { ArchiveList } from "@/components/archive-list";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import type { Tag } from "@/lib/wordpress.d";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "SF6 Gas Tags",
  description: "Browse all tags related to SF6 gas equipment, technology, and industry topics",
  keywords: ["SF6 gas tags", "SF6 equipment tags", "SF6 technology tags", "SF6 industry tags"],
  alternates: {
    canonical: "/posts/tags",
  },
  openGraph: {
    type: "website",
    title: "SF6 Gas Tags",
    description: "Browse all tags related to SF6 gas equipment, technology, and industry topics",
  },
};

export default async function Page() {
  const tags = await getAllTags();

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">SF6 Gas News & Insights</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>SF6 Gas Tags</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ArchiveList<Tag>
        title="All Tags"
        items={tags}
        getItemHref={(t) => `/posts/?tag=${t.id}`}
        getItemLabel={(t) => t.name}
        emptyMessage="No tags available yet."
      />
    </div>
  );
}
