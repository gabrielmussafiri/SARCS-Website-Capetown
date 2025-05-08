import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Heart, Shield, BookOpen, Droplet } from "lucide-react"

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/red-cross-south-africa-what-we-do.png"
          alt="What We Do"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">What We Do</h1>
          <p className="text-xl text-center max-w-3xl">
            Our humanitarian programs and services across the Western Cape
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Humanitarian Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              The South African Red Cross Society Western Cape Provincial Branch implements a wide range of humanitarian
              programs and services designed to prevent and alleviate human suffering, build community resilience, and
              promote health and well-being.
            </p>
            <p className="text-lg text-gray-700">
              Our work spans disaster management, health services, first aid training, and community development,
              reaching vulnerable communities across the Western Cape province.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image src="/red-cross-south-africa-relief.png" alt="Disaster Relief" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Disaster Management</h3>
                <p className="text-gray-700 mb-4">
                  We prepare for, respond to, and help communities recover from disasters and emergencies.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Emergency response
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Disaster preparedness
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Recovery support
                  </li>
                </ul>
                <Link href="/what-we-do/disaster-relief" className="mt-auto">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image src="/red-cross-south-africa-health.png" alt="Health Services" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Health Services</h3>
                <p className="text-gray-700 mb-4">
                  We provide essential health services and education to vulnerable communities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community health programs
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    HIV/AIDS support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Home-based care
                  </li>
                </ul>
                <Link href="/what-we-do/health" className="mt-auto">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-first-aid-south-africa.png"
                  alt="Training & Education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Training & Education</h3>
                <p className="text-gray-700 mb-4">
                  We empower individuals and communities with life-saving skills and knowledge.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    First aid training
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Disaster preparedness
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community education
                  </li>
                </ul>
                <Link href="/training" className="mt-auto">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-blood-donation-south-africa.png"
                  alt="Blood Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Droplet className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Blood Services</h3>
                <p className="text-gray-700 mb-4">
                  We support blood donation and collection efforts to ensure a stable blood supply.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Blood donation drives
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Donor recruitment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Public awareness
                  </li>
                </ul>
                <Link href="/what-we-do/blood" className="mt-auto">
                  <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-south-africa-drought-relief.png"
                alt="Drought Relief Program"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Featured Program: Drought Relief</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Western Cape has experienced severe drought conditions in recent years, affecting communities across
                the province. Our Drought Relief Program provides essential support to affected communities, including:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Water Distribution</h4>
                    <p className="text-gray-600">
                      Providing clean drinking water to communities facing water shortages
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Water Storage Solutions</h4>
                    <p className="text-gray-600">
                      Distributing water tanks and containers to help communities store water
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Water Conservation Education</h4>
                    <p className="text-gray-600">
                      Teaching communities about water conservation techniques and practices
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Support for Farmers</h4>
                    <p className="text-gray-600">
                      Providing assistance to small-scale farmers affected by drought conditions
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="bg-red-600 hover:bg-red-700">Support Our Drought Relief Efforts</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Details</h2>

          <Tabs defaultValue="disaster" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="disaster">Disaster Management</TabsTrigger>
              <TabsTrigger value="health">Health Services</TabsTrigger>
              <TabsTrigger value="training">Training & Education</TabsTrigger>
              <TabsTrigger value="blood">Blood Services</TabsTrigger>
            </TabsList>

            <TabsContent value="disaster" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Disaster Management</h3>
                  <p className="text-gray-700 mb-4">
                    Our disaster management program focuses on the entire disaster cycle: preparedness, response,
                    recovery, and mitigation. We work with communities, government agencies, and other stakeholders to
                    build resilience and reduce the impact of disasters.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Emergency response teams deployment
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Shelter management during disasters
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Relief supplies distribution
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Community disaster preparedness training
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Early warning systems support
                    </li>
                  </ul>
                  <Link href="/what-we-do/disaster-relief" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-disaster-response.png"
                      alt="Disaster Response"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Recent Responses</h4>
                    <ul className="space-y-2">
                      <li>• Cape Town Informal Settlement Fires (2024)</li>
                      <li>• Western Cape Floods (2023)</li>
                      <li>• Drought Relief Operations (2022-Present)</li>
                      <li>• COVID-19 Response (2020-2022)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="health" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Health Services</h3>
                  <p className="text-gray-700 mb-4">
                    Our health services program aims to improve the health and wellbeing of vulnerable communities
                    through preventive health education, care and support services, and health promotion activities.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      HIV/AIDS awareness and support programs
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Tuberculosis prevention and treatment support
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Home-based care for chronically ill patients
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Mobile health clinics in underserved areas
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Health education and promotion campaigns
                    </li>
                  </ul>
                  <Link href="/what-we-do/health" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-health-services.png"
                      alt="Health Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 15,000+ people reached through health education</li>
                      <li>• 5,000+ patients supported through home-based care</li>
                      <li>• 10,000+ people served by mobile health clinics</li>
                      <li>• 20+ communities with improved health outcomes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="training" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Training & Education</h3>
                  <p className="text-gray-700 mb-4">
                    Our training and education program empowers individuals and communities with life-saving skills,
                    disaster preparedness knowledge, and health awareness through comprehensive training courses and
                    workshops.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      First Aid certification courses (Levels 1-3)
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Disaster preparedness training for communities
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Water safety and drowning prevention courses
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Corporate first aid and safety training
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Youth peer education programs
                    </li>
                  </ul>
                  <Link href="/training" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-first-aid-training.png"
                      alt="Training Programs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Training Statistics</h4>
                    <ul className="space-y-2">
                      <li>• 15,000+ individuals trained in first aid</li>
                      <li>• 500+ communities prepared for disasters</li>
                      <li>• 1,000+ corporate employees trained annually</li>
                      <li>• 200+ certified first aid instructors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="blood" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Blood Services</h3>
                  <p className="text-gray-700 mb-4">
                    We work in partnership with the South African National Blood Service (SANBS) to promote blood
                    donation and ensure a stable blood supply for medical facilities across the Western Cape.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Blood donation awareness campaigns
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Organization of blood donation drives
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Donor recruitment and retention programs
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Support for blood collection facilities
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Education on the importance of blood donation
                    </li>
                  </ul>
                  <Link href="/what-we-do/blood" className="mt-4 inline-block">
                    <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-blood-donation-drive.png"
                      alt="Blood Donation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Blood Donation Impact</h4>
                    <ul className="space-y-2">
                      <li>• 10,000+ blood donors recruited annually</li>
                      <li>• 100+ blood donation drives organized</li>
                      <li>• 30,000+ lives potentially saved through donations</li>
                      <li>• 50+ partnerships with schools and businesses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">25K+</div>
              <p className="text-lg font-medium">People Assisted in Disasters</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">15K+</div>
              <p className="text-lg font-medium">First Aid Trainees</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5K+</div>
              <p className="text-lg font-medium">Active Volunteers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-lg font-medium">Community Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Community Voices</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "When our community was devastated by floods, the Red Cross was there immediately with emergency
                    supplies, shelter, and support. They stayed with us through the recovery process and helped us
                    rebuild our lives."
                  </p>
                  <p className="font-bold">Nomsa M.</p>
                  <p className="text-sm text-gray-500">Community Leader, Khayelitsha</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The first aid training I received from the Red Cross saved a life. When my colleague collapsed at
                    work, I knew exactly what to do until the ambulance arrived. This knowledge is invaluable."
                  </p>
                  <p className="font-bold">Johan P.</p>
                  <p className="text-sm text-gray-500">First Aid Trainee, Stellenbosch</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The Red Cross health program in our community has made a tremendous difference. Their regular
                    health education sessions and mobile clinics have improved the overall health and wellbeing of our
                    residents."
                  </p>
                  <p className="font-bold">Grace N.</p>
                  <p className="text-sm text-gray-500">Community Health Worker, George</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            There are many ways you can support our humanitarian mission and make a difference in your community.
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
