import { Metadata } from "next";
import { LayoutProvider } from "../layout/context/layoutcontext";
import Layout from "../layout/layout";

import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "../styles/layout/layout.scss";
import "../styles/demo/Demos.scss";

export const metadata: Metadata = {
  title: "Sakai by PrimeReact | Free Admin Template for NextJS",
  description:
    "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Sakai by PrimeReact | Free Admin Template for NextJS",
    url: "https://www.primefaces.org/sakai-react",
    description:
      "The ultimate collection of design-agnostic, flexible and accessible React UI Components.",
    images: ["https://www.primefaces.org/static/social/sakai-nextjs.png"],
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          id="theme-css"
          href={`/themes/lara-light-indigo/theme.css`}
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <LayoutProvider>
          <Layout>{children}</Layout>
        </LayoutProvider>
      </body>
    </html>
  );
}