/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/stg300qLOvL
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Baskerville } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'

libre_baskerville({
  subsets: ['latin'],
  display: 'swap',
})

bricolage_grotesque({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.25rem;
}
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import SideMenu from "./side-menu"

export function DutchAuctionView() {
  return (
    
      
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Live Auctions</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Bids</DropdownMenuItem>
              <DropdownMenuItem>Wallet</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex items-center">
              <h2 className="font-semibold text-lg md:text-2xl">Current Auctions</h2>
              <Button className="ml-auto" size="sm">
                Create Auction
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Auction</span>
                </Link>
                <Image
                  alt="Auction Item"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="font-semibold line-clamp-2">Crop</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Big Crop auction from ACME-CROP-INC
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-lg font-semibold">$450</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">12h 34m remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Auction</span>
                </Link>
                <Image
                  alt="Auction Item"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="font-semibold line-clamp-2">Dutch Tulips</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Beautifully seeded Dutch Tulips in excellent condition.
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-lg font-semibold">$850</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">1d 8h remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Auction</span>
                </Link>
                <Image
                  alt="Auction Item"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="font-semibold line-clamp-2">Vintage Typewriter</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Fully functional vintage typewriter in excellent condition.
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-lg font-semibold">$150</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">3d 2h remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Auction</span>
                </Link>
                <Image
                  alt="Auction Item"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover group-hover:opacity-50 transition-opacity"
                  height={300}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="grid gap-1">
                      <h3 className="font-semibold line-clamp-2">Vintage Leather Suitcase</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        Beautifully crafted vintage leather suitcase in excellent condition.
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="text-lg font-semibold">$250</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">5d 12h remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
  )
}




