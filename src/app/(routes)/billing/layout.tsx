import { TopMenu } from '@/components/TopMenu';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopMenu />
      {children}
    </div>
  );
}
