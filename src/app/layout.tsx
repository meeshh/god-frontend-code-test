import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

// import { headers } from 'next/headers';
// import './globals.css';

export const generateMetadata = async (): Promise<Metadata> => {
  //   const host = headers().get('host');
  //   const baseURL = `${protocol}://${host ?? vercelURL}`;
  const siteName = `Professional Résumé`;
  const title = `Résumé`;
  const description = `Professional résumé .`;

  return {
    // metadataBase: new URL(baseURL),
    applicationName: siteName,
    description,
    generator: "Next.js",
    keywords: ["resume", "next.js", "pdf", "CV", "smart resume", "open ai"],
    title,
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  // @ts-ignore
  themeColor: colors[accentColor][`${accentColor}9`],
  width: "device-width",
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-slate-900 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
