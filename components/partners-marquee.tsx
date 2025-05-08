"use client"

import Image from "next/image"
import { motion } from "@/lib/motion"

// Define the partner logo type
type Partner = {
  name: string
  logo: string
}

// Sample partner data
const partners: Partner[] = [
  { name: "UNICEF", logo: "/partners/unicef-logo.png?query=UNICEF logo" },
  { name: "World Health Organization", logo: "/partners/who-logo.png?query=WHO logo" },
  { name: "Doctors Without Borders", logo: "/partners/msf-logo.png?query=Doctors Without Borders logo" },
  { name: "Save the Children", logo: "/partners/save-the-children-logo.png?query=Save the Children logo" },
  { name: "Oxfam", logo: "/partners/oxfam-logo.png?query=Oxfam logo" },
  { name: "CARE International", logo: "/partners/care-logo.png?query=CARE International logo" },
  { name: "World Food Programme", logo: "/partners/wfp-logo.png?query=World Food Programme logo" },
  { name: "UN Refugee Agency", logo: "/partners/unhcr-logo.png?query=UNHCR logo" },
]

export default function PartnersMarquee() {
  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="container mx-auto px-4 mb-8">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners
        </motion.h2>
      </div>

      <div className="relative">
        {/* First marquee row */}
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div key={`partner-1-${index}`} className="flex-shrink-0 mx-8 w-[150px] h-[80px] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-white rounded-md shadow-sm p-4 transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second marquee row (reversed direction) */}
        <div className="flex animate-marquee-reverse mt-8">
          {[...duplicatedPartners].reverse().map((partner, index) => (
            <div key={`partner-2-${index}`} className="flex-shrink-0 mx-8 w-[150px] h-[80px] relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-white rounded-md shadow-sm p-4 transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
