import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MantineProvider , Text } from "@mantine/core";
import "@mantine/core/styles.css";

import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab14",
  description: "Food Review Mockup UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          {children}
          <Text ta="center" my="sm" c="dimmed">
            <Footer year="2024" name="Karn Prasai" id="660610742"/>
          </Text>
          
        </MantineProvider>
        
      </body>
    </html>
  );
}
