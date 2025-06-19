import {ThemeProvider} from "@/components/theme-provider";
import {websiteMetadata} from "@/lib/data";
import "@/styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import GroqChatbot from "../components/chatbot";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Open Graph tags (used by LinkedIn) */}
                <meta property="og:title" content="Ayoub Bakkali's AI Portfolio" />
                <meta property="og:description" content="Explore my portfolio and interact with an integrated chatbot!" />
                <meta property="og:image" content="https://portfolio-bakkali.vercel.app/portfolio-bakkali/Thumbnail.png" />
                <meta property="og:url" content="https://portfolio-bakkali.vercel.app/portfolio-bakkali" />
                <meta property="og:type" content="website" />
                <title>Ayoub Bakkali Portfolio</title>
            </head>
            <body className={inter.className}>
                <GroqChatbot/>

                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Analytics/>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
