import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, MapPin, Users, History, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/red-cross-south-africa-team.png"
          alt="About South African Red Cross Society"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center max-w-3xl">
            The South African Red Cross Society Western Cape Provincial Branch
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                The South African Red Cross Society Western Cape Provincial Branch is dedicated to preventing and
                alleviating human suffering in the face of emergencies by mobilizing the power of humanity through our
                network of volunteers, staff, and partners.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As part of the International Red Cross and Red Crescent Movement, we are guided by the Fundamental
                Principles of humanity, impartiality, neutrality, independence, voluntary service, unity, and
                universality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about/history">
                  <Button variant="outline" className="flex items-center gap-2">
                    <History className="h-4 w-4" /> Our History
                  </Button>
                </Link>
                <Link href="/about/principles">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" /> Our Principles
                  </Button>
                </Link>
                <Link href="/about/leadership">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> Our Leadership
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-south-africa-volunteers.png"
                alt="Red Cross Volunteers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Snapshot */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-red-600"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">1896</h3>
                      <p className="text-gray-700">
                        The South African Red Cross Society was established as a branch of the British Red Cross.
                      </p>
                    </div>
                    <div className="md:pl-12"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-red-600"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12"></div>
                    <div className="md:pl-12">
                      <h3 className="text-xl font-bold mb-2">1921</h3>
                      <p className="text-gray-700">
                        The South African Red Cross Society was officially recognized as an independent National
                        Society.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-red-600"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold mb-2">1960s</h3>
                      <p className="text-gray-700">
                        Expansion of services across South Africa, including the establishment of the Western Cape
                        Provincial Branch.
                      </p>
                    </div>
                    <div className="md:pl-12"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-red-600"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12"></div>
                    <div className="md:pl-12">
                      <h3 className="text-xl font-bold mb-2">1994 - Present</h3>
                      <p className="text-gray-700">
                        Transformation and growth to address the humanitarian needs of a democratic South Africa,
                        focusing on disaster management, health services, and community development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/about/history">
                <Button className="bg-red-600 hover:bg-red-700">Read Our Full History</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>

          <Tabs defaultValue="disaster" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="disaster">Disaster Relief</TabsTrigger>
              <TabsTrigger value="health">Health Services</TabsTrigger>
              <TabsTrigger value="training">Training & Education</TabsTrigger>
            </TabsList>

            <TabsContent value="disaster" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Disaster Relief & Response</h3>
                  <p className="text-gray-700 mb-4">
                    We respond to emergencies across the Western Cape, providing immediate relief and long-term recovery
                    support to affected communities.
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
                  <Link href="/what-we-do/disaster-relief" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
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

            <TabsContent value="health" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Health Services</h3>
                  <p className="text-gray-700 mb-4">
                    We provide essential health services to vulnerable communities through various programs and
                    initiatives.
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
                  <Link href="/what-we-do/health" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
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

            <TabsContent value="training" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Training & Education</h3>
                  <p className="text-gray-700 mb-4">
                    We offer comprehensive training programs to empower individuals and communities with life-saving
                    skills and knowledge.
                  </p>
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
                  <Link href="/training" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
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
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Branches</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              The South African Red Cross Society Western Cape Provincial Branch operates through 7 branches across the
              province, each serving their local communities with dedicated staff and volunteers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Cape Town Metro", address: "5 Long Street, Cape Town" },
                { name: "Stellenbosch", address: "45 Church Street, Stellenbosch" },
                { name: "George", address: "12 York Street, George" },
                { name: "Paarl", address: "78 Main Road, Paarl" },
                { name: "Worcester", address: "23 High Street, Worcester" },
                { name: "Beaufort West", address: "56 Bird Street, Beaufort West" },
              ].map((branch, index) => (
                <Card key={index}>
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
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/branches">
                <Button className="bg-red-600 hover:bg-red-700">View All Branches</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            There are many ways to get involved with the South African Red Cross Society and make a difference in your
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Become a Volunteer
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Annual Reports & Financials</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are committed to transparency and accountability. View our annual reports and financial statements to
              see how we use our resources to fulfill our humanitarian mission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[2024, 2023, 2022].map((year) => (
                <Card key={year}>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-2">{year} Annual Report</h3>
                    <Button variant="outline" className="w-full">
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
