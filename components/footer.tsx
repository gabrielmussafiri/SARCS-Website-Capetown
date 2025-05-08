import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Image
              src="/redcross_logo.webp"
              alt="South African Red Cross Society"
              width={200}
              height={60}
              className="mb-4 h-auto"
            />
            <p className="text-gray-400 mb-4">
              The South African Red Cross Society Western Cape Provincial Branch is committed to preventing and
              alleviating human suffering in the face of emergencies.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-400 hover:text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-400 hover:text-white">
                  Training & Education
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-gray-400 hover:text-white">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white">
                  Ways to Donate
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Branches */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Branches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/branches/cape-town-metro" className="text-gray-400 hover:text-white">
                  Cape Town Metro
                </Link>
              </li>
              <li>
                <Link href="/branches/stellenbosch" className="text-gray-400 hover:text-white">
                  Stellenbosch
                </Link>
              </li>
              <li>
                <Link href="/branches/george" className="text-gray-400 hover:text-white">
                  George
                </Link>
              </li>
              <li>
                <Link href="/branches/paarl" className="text-gray-400 hover:text-white">
                  Paarl
                </Link>
              </li>
              <li>
                <Link href="/branches/worcester" className="text-gray-400 hover:text-white">
                  Worcester
                </Link>
              </li>
              <li>
                <Link href="/branches/beaufort-west" className="text-gray-400 hover:text-white">
                  Beaufort West
                </Link>
              </li>
              <li>
                <Link href="/branches/knysna" className="text-gray-400 hover:text-white">
                  Knysna
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">5 Long Street, Cape Town, 8001, Western Cape, South Africa</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+27 (0) 21 555 0000</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info.westerncape@redcross.org.za</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Emergency Hotline</h4>
              <p className="text-red-500 font-bold">0800 RED CROSS (733 27677)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} South African Red Cross Society. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
