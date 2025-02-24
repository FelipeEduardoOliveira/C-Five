import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/Components/Header';
import { Footer } from '@/Components/Footer';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'C-five',
  description: 'C-five, bringing advertising and technology together.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header>
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>

        <div className="fixed bottom-4 right-7 flex flex-col gap-8">
          <a
            href="https://api.whatsapp.com/send?phone=5511949227115&text=Ola%20%F0%9F%98%84,%20como%20podemos%20de%20ajudar%20hoje%20%3F!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all "
          >
            <Image
              src="/icons/whatsappIcon.png"
              alt="Instagram icone"
              className="w-11 md:w-14"
              width={44}
              height={44}
            />
          </a>
          <a
            href="https://www.instagram.com/cfive_publicity/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all"
          >
            <Image
              src="/icons/instagramIcon.png"
              alt="Instagram icone"
              className="w-11 md:w-14"
              width={44}
              height={44}
            />
          </a>
        </div>
      </body>
    </html>
  );
}
