import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Heart, Shield, Users, Droplet, HandHeart, Clock, MapPin } from "lucide-react"
import HeroSlider from "@/components/hero-slider"
import { motion } from "@/lib/motion"
import { useFadeIn, useStaggeredFadeIn, childVariants, useSlideIn, useScaleUp } from "@/lib/motion"
import PartnersMarquee from "@/components/partners-marquee"

export default function Home() {
  // Animation hooks
  const missionAnimation = useFadeIn()
  const statsAnimation = useScaleUp()
  const servicesAnimation = useStaggeredFadeIn(0.1)
  const branchesAnimation = useStaggeredFadeIn(0.05)
  const whatWeDoAnimation = useFadeIn()
  const getInvolvedAnimation = useStaggeredFadeIn(0.1)
  const newsAnimation = useSlideIn("right")
  const newsletterAnimation = useFadeIn()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Replace with Slider */}
      <HeroSlider />

      {/* Emergency Appeal Banner */}
      <motion.section
        className="bg-red-600 text-white py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="mr-2 h-6 w-6" />
              <span className="font-bold text-lg">Emergency Appeal: Drought Relief in Western Cape</span>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Support Now
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center mb-12" {...missionAnimation}>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              The South African Red Cross Society Western Cape Provincial Branch works to prevent and alleviate human
              suffering in the face of emergencies by mobilizing the power of humanity through our network of 7 branches
              across the province.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-t-4 border-t-red-600 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Humanitarian Services</h3>
                  </div>
                  <p className="text-gray-600">
                    Providing emergency relief, healthcare, and support to vulnerable communities across the Western
                    Cape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-t-4 border-t-red-600 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Disaster Response</h3>
                  </div>
                  <p className="text-gray-600">
                    Responding rapidly to disasters with trained teams, supplies, and support for affected communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-t-4 border-t-red-600 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Community Resilience</h3>
                  </div>
                  <p className="text-gray-600">
                    Building stronger communities through education, training, and preparedness programs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...branchesAnimation}>
            Our 7 Branches Across Western Cape
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            {...branchesAnimation}
          >
            {[
              { name: "Cape Town Metro", address: "5 Long Street, Cape Town" },
              { name: "Stellenbosch", address: "45 Church Street, Stellenbosch" },
              { name: "George", address: "12 York Street, George" },
              { name: "Paarl", address: "78 Main Road, Paarl" },
              { name: "Worcester", address: "23 High Street, Worcester" },
              { name: "Beaufort West", address: "56 Bird Street, Beaufort West" },
              { name: "Knysna", address: "34 Main Road, Knysna" },
            ].map((branch, index) => (
              <motion.div key={index} variants={childVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 bg-gray-200 relative">
                    <Image
                      src={`/aid-organization-office.png?height=160&width=320&query=Red Cross branch office in ${branch.name}`}
                      alt={`${branch.name} Branch`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">{branch.name} Branch</h3>
                    <div className="flex items-start mb-3">
                      <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                    <Link
                      href={`/branches/${branch.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center"
                    >
                      View Branch <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...whatWeDoAnimation}>
            What We Do
          </motion.h2>

          <motion.div {...whatWeDoAnimation}>
            <Tabs defaultValue="disaster" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="disaster">Disaster Relief</TabsTrigger>
                <TabsTrigger value="health">Health Services</TabsTrigger>
                <TabsTrigger value="blood">Blood Services</TabsTrigger>
                <TabsTrigger value="training">Training</TabsTrigger>
              </TabsList>

              <TabsContent value="disaster" className="p-4 border rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Disaster Relief & Response</h3>
                    <p className="text-gray-700 mb-4">
                      Our teams respond to emergencies across the Western Cape, providing immediate relief through:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Emergency shelter and supplies
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Food and clean water distribution
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Medical assistance and first aid
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Psychological support
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/red-cross-south-africa-relief.png"
                      alt="Disaster relief efforts"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="health" className="p-4 border rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Health Services</h3>
                    <p className="text-gray-700 mb-4">
                      We provide essential health services to vulnerable communities through:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Mobile health clinics
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        HIV/AIDS awareness and support
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Tuberculosis prevention programs
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Community health education
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/red-cross-south-africa-health.png"
                      alt="Health services"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="blood" className="p-4 border rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Blood Services</h3>
                    <p className="text-gray-700 mb-4">
                      We work closely with the South African National Blood Service to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Organize blood donation drives
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Raise awareness about blood donation
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Support blood collection facilities
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Recruit and retain blood donors
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/red-cross-blood-donation-south-africa.png"
                      alt="Blood donation services"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="training" className="p-4 border rounded-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Training & Education</h3>
                    <p className="text-gray-700 mb-4">We offer comprehensive training programs including:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        First Aid certification courses
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Disaster preparedness training
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Water safety and lifesaving skills
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        Community resilience workshops
                      </li>
                    </ul>
                    <Link href="/training">
                      <Button className="mt-4 bg-red-600 hover:bg-red-700">Learn More About Our Training</Button>
                    </Link>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/red-cross-first-aid-south-africa.png"
                      alt="Training programs"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...statsAnimation}>
            Our Impact in Western Cape
          </motion.h2>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" {...statsAnimation}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">25K+</div>
              <p className="text-lg">People Assisted in Disasters</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15K+</div>
              <p className="text-lg">First Aid Trainees</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">5K+</div>
              <p className="text-lg">Active Volunteers</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-lg">Community Programs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-12" {...getInvolvedAnimation}>
            Get Involved
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" {...getInvolvedAnimation}>
            <motion.div variants={childVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/red-cross-south-africa-donation.png"
                    alt="Donate to Red Cross"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <HandHeart className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Donate</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your donation helps us respond to emergencies and support vulnerable communities across Western
                    Cape.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Donate Now</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={childVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/red-cross-south-africa-volunteering.png"
                    alt="Volunteer with Red Cross"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Volunteer</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join our team of dedicated volunteers making a difference in communities across Western Cape.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Become a Volunteer</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={childVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/blood-donation-red-cross-south-africa.png"
                    alt="Donate Blood"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Droplet className="h-6 w-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold">Give Blood</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Donate blood and help save lives. Find a donation center or blood drive near you.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Find Donation Center</Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersMarquee />

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="flex flex-col md:flex-row justify-between items-center mb-12" {...newsAnimation}>
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link href="/news" className="text-red-600 hover:text-red-700 font-medium flex items-center">
              View All News <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" {...newsAnimation}>
            {[
              {
                title: "Drought Relief Efforts Expanded in Rural Areas",
                date: "May 2, 2025",
                excerpt:
                  "The Western Cape Red Cross is expanding its drought relief efforts to reach more rural communities affected by water shortages.",
              },
              {
                title: "New First Aid Training Center Opens in Cape Town",
                date: "April 15, 2025",
                excerpt:
                  "A state-of-the-art training facility has opened in Cape Town to enhance our first aid and disaster response training capabilities.",
              },
              {
                title: "Volunteer Recognition Ceremony Celebrates Service",
                date: "March 28, 2025",
                excerpt:
                  "Over 200 volunteers were recognized for their outstanding service to communities across the Western Cape province.",
              },
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src={`/red-cross-symbol.png?height=192&width=384&query=Red Cross ${news.title}`}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link href="/news/1" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" {...newsletterAnimation}>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive updates on our work, upcoming events, and ways to get involved.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                required
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
