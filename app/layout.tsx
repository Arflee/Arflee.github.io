import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import BackgroundCanvas from "@/components/backgroundCanvas";
import PerlinBackground from "@/components/perlinBackground";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "flex flex-col min-h-screen text-foreground bg-background font-sans antialiased ml-8 mr-8",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <BackgroundCanvas>
            <PerlinBackground />
          </BackgroundCanvas>
          <main className="flex grow mt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
