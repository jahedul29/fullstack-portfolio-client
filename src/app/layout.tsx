import dataFetchingTags from "@/constants/dataFetchingTags";
import { getData } from "@/helpers/data-fetching/data-fetching";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const { data: ownerData, isLoading: isOwnerDataLoading } = await getData(
    "/owners/getOwner",
    10,
    [dataFetchingTags.owners]
  );

  return {
    title: ownerData?.name,
    description: ownerData?.aboutOwner,
    icons: {
      icon: ownerData?.photoUrl,
      apple: ownerData?.photoUrl,
    },
    openGraph: {
      type: "website",
      url: typeof window !== "undefined" ? window.location.href : "",
      title: ownerData?.name,
      description: ownerData?.aboutOwner,
      siteName: "My Website",
      images: [
        {
          url: ownerData?.photoUrl,
        },
      ],
    },
    twitter: {
      card: ownerData?.aboutOwner,
      title: ownerData?.name,
      description: ownerData?.aboutOwner,
      images: [
        {
          url: ownerData?.photoUrl,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
