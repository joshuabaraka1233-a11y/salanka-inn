import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Salanka Inn & Guest House | Nairobi',description:'A comfortable stay on Eastern Bypass, Nairobi.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}