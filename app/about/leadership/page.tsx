import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, ExternalLink } from "lucide-react"

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/red-cross-south-africa-meeting.png"
          alt="Leadership Team"
          width={1600}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Leadership</h1>
          <p className="text-xl text-center max-w-3xl">
            Meet the dedicated team guiding the South African Red Cross Society in the Western Cape
          </p>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Leadership Structure</h2>
            <p className="text-lg text-gray-700">
              The South African Red Cross Society Western Cape Provincial Branch is led by a dedicated team of
              professionals and volunteers committed to our humanitarian mission. Our leadership structure includes the
              Provincial Board, Executive Management, and Branch Managers who collectively guide our strategic direction
              and operations.
            </p>
          </div>

          <Tabs defaultValue="executive" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="executive">Executive Team</TabsTrigger>
              <TabsTrigger value="board">Provincial Board</TabsTrigger>
              <TabsTrigger value="branch">Branch Managers</TabsTrigger>
            </TabsList>

            <TabsContent value="executive" className="p-6 border rounded-md bg-white">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image src="/african-woman-business-portrait.png" alt="Dr. Nomsa Mthembu" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">Dr. Nomsa Mthembu</h3>
                    <p className="text-red-600 font-medium mb-4">Provincial Director</p>
                    <p className="text-gray-700 mb-4">
                      Dr. Mthembu has led the Western Cape Provincial Branch since 2019. With over 20 years of
                      experience in humanitarian work and public health, she brings a wealth of knowledge and strategic
                      vision to the organization. She holds a PhD in Public Health from the University of Cape Town and
                      has previously worked with international humanitarian organizations across Africa.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Full Bio
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Michael van der Merwe",
                      title: "Deputy Director, Operations",
                      bio: "Oversees all operational activities including disaster response, health services, and branch operations.",
                      image: "Professional portrait of African man in business suit",
                    },
                    {
                      name: "Sarah Johnson",
                      title: "Head of Finance & Administration",
                      bio: "Manages financial planning, accounting, and administrative functions for the provincial branch.",
                      image: "Professional portrait of woman with glasses in office setting",
                    },
                    {
                      name: "Dr. Thabo Nkosi",
                      title: "Head of Health Programs",
                      bio: "Leads the development and implementation of health initiatives across the Western Cape.",
                      image: "Professional portrait of African doctor in medical coat",
                    },
                    {
                      name: "Lerato Molefe",
                      title: "Head of Disaster Management",
                      bio: "Coordinates disaster preparedness, response, and recovery operations throughout the province.",
                      image: "Professional portrait of woman in Red Cross vest",
                    },
                    {
                      name: "James Wilson",
                      title: "Head of Training & Education",
                      bio: "Oversees all training programs, curriculum development, and instructor certification.",
                      image: "Professional portrait of man teaching in classroom setting",
                    },
                    {
                      name: "Fatima Ahmed",
                      title: "Head of Fundraising & Communications",
                      bio: "Leads fundraising strategies, donor relations, and public communications efforts.",
                      image: "Professional portrait of woman in business attire with tablet",
                    },
                  ].map((leader, index) => (
                    <Card key={index}>
                      <div className="h-48 bg-gray-200 relative">
                        <Image
                          src={`/abstract-geometric-shapes.png?height=192&width=384&query=${leader.image}`}
                          alt={leader.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold">{leader.name}</h4>
                        <p className="text-red-600 text-sm font-medium mb-2">{leader.title}</p>
                        <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="board" className="p-6 border rounded-md bg-white">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image src="/distinguished-african-man.png" alt="Prof. Samuel Ndlovu" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">Prof. Samuel Ndlovu</h3>
                    <p className="text-red-600 font-medium mb-4">Provincial Board Chairperson</p>
                    <p className="text-gray-700 mb-4">
                      Prof. Ndlovu has served on the Provincial Board since 2015 and was elected Chairperson in 2020. He
                      is Professor Emeritus of Public Policy at Stellenbosch University and brings extensive experience
                      in governance, policy development, and community engagement. His leadership has been instrumental
                      in strengthening the organization's governance and strategic direction.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Full Bio
                      </Button>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Board Members</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Dr. Elizabeth Botha",
                      title: "Vice Chairperson",
                      bio: "Medical doctor and public health specialist with expertise in community health programs.",
                      image: "Professional portrait of mature woman doctor",
                    },
                    {
                      name: "Adv. John Mbeki",
                      title: "Legal Advisor",
                      bio: "Senior advocate specializing in humanitarian and non-profit law.",
                      image: "Professional portrait of African man in legal robes",
                    },
                    {
                      name: "Ms. Priya Naidoo",
                      title: "Treasurer",
                      bio: "Chartered accountant with extensive experience in non-profit financial management.",
                      image: "Professional portrait of Indian woman in business attire",
                    },
                    {
                      name: "Mr. David van Wyk",
                      title: "Board Member",
                      bio: "Business leader with expertise in corporate partnerships and strategic planning.",
                      image: "Professional portrait of businessman in suit",
                    },
                    {
                      name: "Dr. Mandisa Zulu",
                      title: "Board Member",
                      bio: "Academic and researcher specializing in disaster management and community resilience.",
                      image: "Professional portrait of African woman professor",
                    },
                    {
                      name: "Mr. Thomas Hendricks",
                      title: "Board Member",
                      bio: "Community leader and long-time Red Cross volunteer representing grassroots perspectives.",
                      image: "Professional portrait of older man in Red Cross vest",
                    },
                  ].map((member, index) => (
                    <Card key={index}>
                      <div className="h-48 bg-gray-200 relative">
                        <Image
                          src={`/abstract-geometric-shapes.png?height=192&width=384&query=${member.image}`}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="text-red-600 text-sm font-medium mb-2">{member.title}</p>
                        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="branch" className="p-6 border rounded-md bg-white">
              <div className="space-y-6">
                <p className="text-gray-700 mb-6">
                  Our seven branches across the Western Cape are led by dedicated Branch Managers who oversee local
                  operations, volunteer coordination, and community engagement. They work closely with the Provincial
                  Office to implement programs and respond to local needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Thandi Nkomo",
                      branch: "Cape Town Metro",
                      bio: "Leading our largest branch serving the greater Cape Town metropolitan area since 2018.",
                      image: "Professional portrait of African woman in Red Cross uniform",
                    },
                    {
                      name: "Johan Pretorius",
                      branch: "Stellenbosch",
                      bio: "Coordinating Red Cross activities in Stellenbosch and surrounding wine country communities.",
                      image: "Professional portrait of man in Red Cross polo shirt",
                    },
                    {
                      name: "Grace Mabaso",
                      branch: "George",
                      bio: "Managing disaster response and community programs along the Garden Route.",
                      image: "Professional portrait of middle-aged African woman smiling",
                    },
                    {
                      name: "Willem de Klerk",
                      branch: "Paarl",
                      bio: "Overseeing Red Cross operations in Paarl and the surrounding Boland region.",
                      image: "Professional portrait of older man with glasses",
                    },
                    {
                      name: "Nosipho Dlamini",
                      branch: "Worcester",
                      bio: "Leading rural outreach and agricultural community support programs.",
                      image: "Professional portrait of African woman in casual business attire",
                    },
                    {
                      name: "Abdul Kareem",
                      branch: "Beaufort West",
                      bio: "Managing drought relief and community resilience programs in the Karoo.",
                      image: "Professional portrait of man with beard in Red Cross vest",
                    },
                    {
                      name: "Lisa Thompson",
                      branch: "Knysna",
                      bio: "Coordinating coastal disaster preparedness and response along the southern Cape.",
                      image: "Professional portrait of woman with short hair smiling",
                    },
                  ].map((manager, index) => (
                    <Card key={index}>
                      <div className="h-48 bg-gray-200 relative">
                        <Image
                          src={`/abstract-geometric-shapes.png?height=192&width=384&query=${manager.image}`}
                          alt={manager.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold">{manager.name}</h4>
                        <p className="text-red-600 text-sm font-medium mb-2">Branch Manager, {manager.branch}</p>
                        <p className="text-gray-600 text-sm mb-4">{manager.bio}</p>
                        <Link href={`/branches/${manager.branch.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            View Branch
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Governance */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Governance Structure</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Provincial Governance</h3>
              <p className="text-gray-700 mb-4">
                The South African Red Cross Society Western Cape Provincial Branch operates under the governance
                framework of the South African Red Cross Society National Office, while maintaining operational autonomy
                to address the specific needs of the Western Cape province.
              </p>
              <p className="text-gray-700 mb-4">
                Our Provincial Board provides strategic direction, oversight, and governance to ensure that our
                operations align with the Fundamental Principles of the International Red Cross and Red Crescent
                Movement and meet the humanitarian needs of communities across the Western Cape.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Board Committees</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Finance and Audit Committee</h4>
                  <p className="text-gray-700">Oversees financial management, budgeting, and audit processes.</p>
                </div>
                <div>
                  <h4 className="font-bold">Programs and Services Committee</h4>
                  <p className="text-gray-700">
                    Reviews and guides the development and implementation of humanitarian programs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Governance and Ethics Committee</h4>
                  <p className="text-gray-700">Ensures adherence to governance standards and ethical practices.</p>
                </div>
                <div>
                  <h4 className="font-bold">Resource Mobilization Committee</h4>
                  <p className="text-gray-700">Guides fundraising strategies and resource development initiatives.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Accountability</h3>
              <p className="text-gray-700 mb-4">
                We are committed to transparency and accountability in all our operations. The Provincial Branch
                undergoes regular internal and external audits, and reports to both the National Society and our donors
                on program outcomes and financial management.
              </p>
              <p className="text-gray-700">
                Our Annual Reports and financial statements are made available to the public, demonstrating our
                commitment to responsible stewardship of resources entrusted to us for humanitarian action.
              </p>
              <div className="mt-6">
                <Button className="bg-red-600 hover:bg-red-700">View Annual Reports</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Leadership Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for dedicated professionals and volunteers to help lead our humanitarian mission in the
            Western Cape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              View Career Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Volunteer Leadership Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Our Leadership Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions for our leadership team? We welcome your inquiries and feedback.
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <span>+27 (0) 21 555 0000 (Provincial Office)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <span>leadership.westerncape@redcross.org.za</span>
                  </div>
                </div>
                <Button className="mt-6 bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                  Send Message to Leadership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
