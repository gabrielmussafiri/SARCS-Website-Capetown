import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, AlertTriangle, Shield, Clock, Users } from "lucide-react"

export default function DisasterReliefPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/red-cross-south-africa-disaster.png"
          alt="Disaster Relief"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Disaster Relief</h1>
          <p className="text-xl text-center max-w-3xl">
            Responding to emergencies and building community resilience across the Western Cape
          </p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <AlertTriangle className="mr-2 h-6 w-6" />
              <span className="font-bold text-lg">Current Emergency: Drought Relief in Western Cape</span>
            </div>
            <Link href="/donate">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Support Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Disaster Management Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                The South African Red Cross Society Western Cape Provincial Branch takes a comprehensive approach to
                disaster management, focusing on the entire disaster cycle: preparedness, response, recovery, and
                mitigation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our disaster management teams work closely with government agencies, community organizations, and other
                stakeholders to build community resilience and provide effective emergency response when disasters
                strike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#current-operations">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Current Operations
                  </Button>
                </Link>
                <Link href="#volunteer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> Join Our Response Teams
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button className="bg-red-600 hover:bg-red-700">Support Our Work</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-south-africa-disaster-team.png"
                alt="Disaster Response Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Cycle */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Disaster Management Cycle</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="bg-red-600 p-4 flex items-center">
                <Shield className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Preparedness</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  We help communities prepare for potential disasters through training, planning, and capacity building.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community disaster preparedness training
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Emergency response team training
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Early warning systems development
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Stockpiling of emergency supplies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="bg-red-600 p-4 flex items-center">
                <Shield className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Response</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  When disasters strike, we mobilize quickly to provide immediate relief and assistance to affected
                  communities.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Emergency shelter and supplies
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    First aid and medical support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Food and clean water distribution
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Psychosocial support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="bg-red-600 p-4 flex items-center">
                <Shield className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Recovery</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  We support communities in rebuilding their lives and livelihoods after disasters.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Long-term shelter solutions
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Livelihood recovery support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community infrastructure rehabilitation
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Continued psychosocial support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="bg-red-600 p-4 flex items-center">
                <Shield className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Mitigation</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  We work to reduce the impact of future disasters through risk reduction and community resilience
                  building.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Risk assessment and mapping
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community-based risk reduction
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Advocacy for disaster risk reduction
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Climate change adaptation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Operations */}
      <section id="current-operations" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Operations</h2>

          <Tabs defaultValue="drought" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="drought">Drought Relief</TabsTrigger>
              <TabsTrigger value="fires">Informal Settlement Fires</TabsTrigger>
              <TabsTrigger value="floods">Flood Response</TabsTrigger>
            </TabsList>

            <TabsContent value="drought" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Drought Relief Operations</h3>
                  <p className="text-gray-700 mb-4">
                    The Western Cape has experienced severe drought conditions in recent years, affecting communities
                    across the province. Our drought relief operations provide essential support to affected
                    communities.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Current Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Water distribution in affected communities
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Installation of water storage tanks
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Water conservation education
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Support for small-scale farmers
                    </li>
                  </ul>
                  <Link href="/donate" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Support Drought Relief</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-drought-relief.png"
                      alt="Drought Relief"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 50,000+ liters of water distributed</li>
                      <li>• 100+ water storage tanks installed</li>
                      <li>• 20+ communities supported</li>
                      <li>• 500+ farmers assisted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fires" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Informal Settlement Fire Response</h3>
                  <p className="text-gray-700 mb-4">
                    Fires in informal settlements are a frequent occurrence in the Western Cape, often resulting in
                    significant loss of homes and possessions. Our fire response teams provide immediate relief and
                    support to affected families.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Current Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Emergency shelter provision
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Distribution of relief items
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      First aid and health support
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Fire safety education
                    </li>
                  </ul>
                  <Link href="/donate" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Support Fire Response</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-fire-response.png"
                      alt="Fire Response"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 1,000+ families assisted after fires</li>
                      <li>• 5,000+ relief items distributed</li>
                      <li>• 30+ informal settlements reached</li>
                      <li>• 10,000+ people educated on fire safety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="floods" className="p-6 border rounded-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Flood Response Operations</h3>
                  <p className="text-gray-700 mb-4">
                    Seasonal flooding affects many communities in the Western Cape, particularly in low-lying areas. Our
                    flood response teams provide emergency assistance and support recovery efforts.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Current Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Evacuation assistance
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Emergency shelter management
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Distribution of relief supplies
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Water and sanitation support
                    </li>
                  </ul>
                  <Link href="/donate" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Support Flood Response</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-flood-response.png"
                      alt="Flood Response"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 2,000+ people evacuated safely</li>
                      <li>• 15+ emergency shelters managed</li>
                      <li>• 10,000+ relief items distributed</li>
                      <li>• 25+ communities supported</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Disaster Response Teams */}
      <section id="volunteer" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-south-africa-disaster-volunteers.png"
                alt="Disaster Response Volunteers"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Disaster Response Teams</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our disaster response teams are made up of trained volunteers who are ready to respond to emergencies at
                a moment's notice. These dedicated individuals play a crucial role in our disaster management
                operations.
              </p>
              <h3 className="text-xl font-bold mb-4">As a Disaster Response Volunteer, you will:</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Receive Comprehensive Training</h4>
                    <p className="text-gray-600">
                      Learn essential skills in disaster response, first aid, and emergency management
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Respond to Emergencies</h4>
                    <p className="text-gray-600">Provide immediate assistance to communities affected by disasters</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Support Community Preparedness</h4>
                    <p className="text-gray-600">
                      Help communities prepare for and mitigate the impact of potential disasters
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Be Part of a Global Network</h4>
                    <p className="text-gray-600">
                      Join the worldwide Red Cross and Red Crescent Movement in humanitarian action
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/volunteer">
                <Button className="bg-red-600 hover:bg-red-700">Become a Disaster Response Volunteer</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Responses */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Disaster Responses</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-fire-response-2.png"
                  alt="Cape Town Informal Settlement Fires"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1">2024</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Cape Town Informal Settlement Fires</h3>
                <p className="text-gray-700 mb-4">
                  Responded to multiple fires in informal settlements across Cape Town, providing emergency shelter,
                  relief items, and support to affected families.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Impact:</strong> Assisted 500+ families, distributed 2,000+ relief items
                </div>
                <Link href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-flood-response-2.png"
                  alt="Western Cape Floods"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1">2023</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Western Cape Floods</h3>
                <p className="text-gray-700 mb-4">
                  Responded to severe flooding in multiple areas of the Western Cape, providing evacuation assistance,
                  emergency shelter, and relief supplies.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Impact:</strong> Evacuated 1,000+ people, managed 10 emergency shelters
                </div>
                <Link href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-drought-response.png"
                  alt="Drought Relief Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1">2022-Present</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Drought Relief Operations</h3>
                <p className="text-gray-700 mb-4">
                  Ongoing response to drought conditions across the Western Cape, providing water distribution, storage
                  solutions, and support to affected communities.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Impact:</strong> Supported 20+ communities, distributed 50,000+ liters of water
                </div>
                <Link href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Preparedness Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Family Emergency Plan</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Create a family emergency plan to ensure everyone knows what to do in case of a disaster.
                </p>
                <Button variant="outline" className="w-full">
                  Download Template
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Emergency Kit Checklist</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Prepare an emergency kit with essential items to sustain your family for at least 72 hours.
                </p>
                <Button variant="outline" className="w-full">
                  Download Checklist
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Hazard Information</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Learn about common hazards in the Western Cape and how to prepare for and respond to them.
                </p>
                <Button variant="outline" className="w-full">
                  View Hazard Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/training">
              <Button className="bg-red-600 hover:bg-red-700">Attend a Preparedness Workshop</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Disaster Relief Efforts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support enables us to respond quickly and effectively to emergencies and help communities recover and
            rebuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
