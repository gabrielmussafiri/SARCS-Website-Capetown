import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, MapPin, Phone, Mail, Clock, Users, Calendar } from "lucide-react"

// This would typically come from a database or API
const branchData = {
  "cape-town-metro": {
    name: "Cape Town Metro",
    address: "5 Long Street, Cape Town, 8001",
    phone: "+27 (0) 21 555 0000",
    email: "capetown@redcross.org.za",
    hours: "Monday - Friday: 8:30 AM - 4:30 PM",
    description:
      "The Cape Town Metro branch serves the greater Cape Town metropolitan area, providing disaster relief, health services, and community support programs.",
    manager: "Sarah Johnson",
    volunteers: 1200,
    establishedYear: 1935,
    coverageArea: "Cape Town Metropolitan Area including CBD, Southern Suburbs, Northern Suburbs, and Cape Flats",
    keyPrograms: [
      "Disaster Management and Relief",
      "First Aid Training",
      "Home-Based Care",
      "Youth Development",
      "Water Safety",
    ],
    upcomingEvents: [
      {
        title: "First Aid Training Workshop",
        date: "June 15, 2025",
        location: "Red Cross Training Center, Cape Town",
      },
      {
        title: "Blood Drive",
        date: "June 22, 2025",
        location: "V&A Waterfront",
      },
      {
        title: "Volunteer Orientation",
        date: "July 5, 2025",
        location: "Cape Town Branch Office",
      },
    ],
  },
  stellenbosch: {
    name: "Stellenbosch",
    address: "45 Church Street, Stellenbosch, 7600",
    phone: "+27 (0) 21 555 1111",
    email: "stellenbosch@redcross.org.za",
    hours: "Monday - Friday: 8:30 AM - 4:30 PM",
    description:
      "The Stellenbosch branch serves the Stellenbosch municipality and surrounding areas, focusing on community health programs and disaster preparedness.",
    manager: "Michael van der Merwe",
    volunteers: 350,
    establishedYear: 1952,
    coverageArea: "Stellenbosch Municipality including Stellenbosch, Franschhoek, and Pniel",
    keyPrograms: [
      "Community Health Education",
      "First Aid Training",
      "University Student Volunteer Program",
      "Rural Outreach",
      "Disaster Preparedness",
    ],
    upcomingEvents: [
      {
        title: "Community Health Fair",
        date: "June 18, 2025",
        location: "Stellenbosch Town Hall",
      },
      {
        title: "First Aid Certification Course",
        date: "June 25-26, 2025",
        location: "Stellenbosch Branch Office",
      },
      {
        title: "Disaster Preparedness Workshop",
        date: "July 10, 2025",
        location: "Stellenbosch University",
      },
    ],
  },
  // Additional branches would be defined here
}

export default function BranchPage({ params }: { params: { branch: string } }) {
  const branch = branchData[params.branch as keyof typeof branchData] || {
    name: "Branch Not Found",
    address: "",
    phone: "",
    email: "",
    hours: "",
    description: "The requested branch information could not be found.",
    manager: "",
    volunteers: 0,
    establishedYear: 0,
    coverageArea: "",
    keyPrograms: [],
    upcomingEvents: [],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Branch Hero */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={`/placeholder.svg?height=400&width=1600&query=Red Cross ${branch.name} branch building in South Africa`}
          alt={`${branch.name} Branch`}
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{branch.name} Branch</h1>
          <p className="text-xl text-center max-w-3xl">South African Red Cross Society - Western Cape</p>
        </div>
      </section>

      {/* Branch Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">{branch.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">{branch.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-gray-600">{branch.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Contact This Branch</Button>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Branch Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About {branch.name} Branch</h2>
              <p className="text-gray-700 mb-6">{branch.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{branch.volunteers}</div>
                  <div className="text-gray-600">Active Volunteers</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{branch.establishedYear}</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{branch.keyPrograms.length}</div>
                  <div className="text-gray-600">Key Programs</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Branch Leadership</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=64&width=64&query=portrait of ${branch.manager}`}
                      alt={branch.manager}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{branch.manager}</h4>
                    <p className="text-gray-600">Branch Manager</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Coverage Area</h3>
                <p className="text-gray-700 mb-6">{branch.coverageArea}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs and Events */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="programs" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="programs">Key Programs</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="p-6 border rounded-md bg-white">
              <h3 className="text-xl font-bold mb-6">Key Programs at {branch.name} Branch</h3>
              <div className="space-y-4">
                {branch.keyPrograms.map((program, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">{program}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="p-6 border rounded-md bg-white">
              <h3 className="text-xl font-bold mb-6">Upcoming Events at {branch.name} Branch</h3>
              <div className="space-y-6">
                {branch.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start border-b pb-4 last:border-0">
                    <div className="bg-red-600 text-white p-2 rounded-md mr-4 flex-shrink-0 text-center w-12">
                      <Calendar className="h-5 w-5 mx-auto" />
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-gray-600">{event.date}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved at {branch.name} Branch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">Volunteer</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our team of dedicated volunteers at the {branch.name} Branch and make a difference in your
                  community.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Become a Volunteer</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">Attend an Event</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Participate in our upcoming events, workshops, and training sessions at the {branch.name} Branch.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">View Events Calendar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">Stay Updated</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to receive updates on our work and upcoming events at the {branch.name}{" "}
                  Branch.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
