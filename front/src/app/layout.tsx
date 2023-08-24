import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Providers } from "@/redux/provider";
import Logo from "@public/logo.svg";
import localFont from "next/font/local";

const notoSansKr = localFont({
  src: [
    {
      path: "./NotoSansKR-Medium.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Suspense fallback={<Loading />}>
        <body className={`${inter.className} ${notoSansKr.className}`}>
          <div className=" bg-white min-h-screen flex  justify-center relative">
            <Logo className=" absolute right-16 top-24" />
            <Providers>{children}</Providers>
          </div>
        </body>
      </Suspense>
    </html>
  );
}
