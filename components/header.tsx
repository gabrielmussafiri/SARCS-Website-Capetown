"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/emergency" className="hover:underline">
              Emergency: 0800 RED CROSS (733 27677)
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/contact" className="hidden md:inline hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/donate" className="text-sm font-medium hover:underline">
              Donate
            </Link>
            <Link href="/volunteer" className="text-sm font-medium hover:underline">
              Volunteer
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-6">
              <Image
                src="/redcross_logo.webp"
                alt="South African Red Cross Society"
                width={200}
                height={60}
                priority
                className="h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/about"
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-700 p-6 no-underline outline-none focus:shadow-md"
                            >
                              <div className="mt-4 mb-2 text-lg font-medium text-white">
                                Western Cape Provincial Branch
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Learn about our history, mission, and impact in the Western Cape province.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <Link
                            href="/about/history"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Our History</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              The story of Red Cross in South Africa
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/leadership"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Leadership</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Meet our provincial leadership team
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/principles"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Our Principles</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              The fundamental principles that guide our work
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <Link
                            href="/what-we-do/disaster-relief"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Disaster Relief</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Emergency response and recovery support
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/what-we-do/health"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Health Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Community health programs and support
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/what-we-do/blood"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Blood Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              Blood donation and collection programs
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/training"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Training & Education</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              First aid and disaster preparedness training
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Our Branches</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <Link
                            href="/branches/cape-town-metro"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Cape Town Metro</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">5 Long Street, Cape Town</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/branches/stellenbosch"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Stellenbosch</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                              45 Church Street, Stellenbosch
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/branches/george"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">George</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">12 York Street, George</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/branches/paarl"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                          >
                            <div className="text-sm font-medium leading-none">Paarl</div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-500">78 Main Road, Paarl</p>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/branches/view-all"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 text-red-600"
                          >
                            <div className="text-sm font-medium leading-none">View All Branches</div>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/news" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="absolute right-0 top-0 flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 border rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button onClick={() => setSearchOpen(false)} className="ml-2 text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="text-gray-500 hover:text-gray-700">
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Donate Button */}
            <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700">Donate Now</Button>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="/" className="text-lg font-medium py-2 border-b">
                      Home
                    </Link>
                    <Link href="/about" className="text-lg font-medium py-2 border-b">
                      About Us
                    </Link>
                    <Link href="/what-we-do" className="text-lg font-medium py-2 border-b">
                      What We Do
                    </Link>
                    <Link href="/branches" className="text-lg font-medium py-2 border-b">
                      Our Branches
                    </Link>
                    <Link href="/news" className="text-lg font-medium py-2 border-b">
                      News
                    </Link>
                    <Link href="/contact" className="text-lg font-medium py-2 border-b">
                      Contact
                    </Link>
                    <Button className="mt-4 bg-red-600 hover:bg-red-700">Donate Now</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
