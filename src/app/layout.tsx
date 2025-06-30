import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
const siteurl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.deveshpatel.me";

export const metadata: Metadata = {
  title: "Devesh Patel - Portfolio",
  description:
    "Devesh Patel, a Computer Science Undergrad based in India who loves to build things for the web.",
  keywords: [
    "Devesh Patel",
    "SRM",
    "SRM University",
    "Hack the box",
    "HackTheBox",
    "Portfolio",
    "Web Developer",
    "Computer Science",
    "India",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Open Source Contributor",
    "Tech Enthusiast",
    "Web Design",
    "Web Development",
    "Programming",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "HTML",
    "CSS",
    "Web Applications",
    "Web Technologies",
  ],
  authors: [{ name: "Devesh Patel", url: "www.deveshpatel.me" }],
  openGraph: {
    title: "Devesh Patel - Portfolio",
    description:
      "Devesh Patel, a Computer Science Undergrad based in India who loves to build things for the web.",
    url: "https://www.deveshpatel.me",
    locale: "en_US",
    siteName: "Devesh Patel - Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.deveshpatel.me/Screenshot.png",
        width: 3410,
        height: 2072,
        alt: "Devesh Patel - Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: `${siteurl}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
          <div
            style={{
              flex: "none",
              height: "100%",
              left: "calc(50.00000000000002% - 100% / 2)",
              pointerEvents: "none",
              position: "fixed",
              top: "0",
              width: "100%",
              zIndex: "4",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
