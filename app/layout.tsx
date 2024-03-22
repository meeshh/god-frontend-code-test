import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

import "./globals.css";
import Nav from "../components/Nav";

export const generateMetadata = async (): Promise<Metadata> => {
  const siteName = "Volvo Cars | Swedish luxury automobile marque";
  const title = "Volvo Cars | Swedish luxury automobile marque";
  const description =
    "Volvo Cars is a Swedish luxury automobile marque. It is headquartered in Torslanda in Gothenburg, Sweden. The company manufactures and markets sport utility vehicles, station wagons, sedans and compact executive sedans. The Volvo Group was founded in 1927 as a subsidiary of the ball bearing manufacturer SKF. When AB Volvo bought the car manufacturer in 1999, the sales of the Volvo Group increased significantly. The company was sold to Geely Holding Group in 2010. Volvo Cars has been majority-owned since 2010 by the Geely Holding Group, a Chinese multinational automotive manufacturing company. Both AB Volvo and Volvo Cars share the Volvo logo, and cooperate in running the Volvo Museum in Sweden.";

  return {
    applicationName: siteName,
    description,
    generator: "Next.js",
    keywords: ["Volvo", "Volvo Cars", "Volvo Museum", "Geely Holding Group"],
    title,
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en" className="bg-primary" data-color-mode="dark">
      <body>
        <Nav />
        <div className="container py-24">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
