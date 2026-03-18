import { getAllAuthors } from "@/lib/wordpress";
import { ArchiveList } from "@/components/archive-list";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import type { Author } from "@/lib/wordpress.d";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "SF6 Gas Experts",
  description: "Meet our team of SF6 gas experts and industry professionals",
  keywords: ["SF6 gas experts", "SF6 industry professionals", "SF6 technology specialists", "SF6 gas consultants"],
  alternates: {
    canonical: "/posts/authors",
  },
  openGraph: {
    type: "website",
    title: "SF6 Gas Experts",
    description: "Meet our team of SF6 gas experts and industry professionals",
  },
};

export default async function Page() {
  const authors = await getAllAuthors();

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
            <BreadcrumbPage>SF6 Gas Experts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ArchiveList<Author>
        title="All Authors"
        items={authors}
        getItemHref={(a) => `/posts/?author=${a.id}`}
        getItemLabel={(a) => a.name}
        emptyMessage="No authors available yet."
      />
    </div>
  );
}
