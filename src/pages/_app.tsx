import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ 
  weight: ["400", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-heading" 
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground`}>
      <Component {...pageProps} />
    </main>
  );
}
