// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Baskerville } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import SideMenu from '@/components/component/side-menu'
import TopMenu from '@/components/component/top-menu'

const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_baskerville',
  weight: '400'
})
const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage_grotesque',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={libre_baskerville.variable + ' ' + bricolage_grotesque.variable}>
        <div className="grid min-h-screen w-full grid-cols-[280px_1fr] overflow-hidden">
          <SideMenu />
          <TopMenu/>
          {children}
        </div>
      </body>
    </html>
  )
}