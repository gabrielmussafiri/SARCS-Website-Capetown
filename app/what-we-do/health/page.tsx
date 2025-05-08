import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Heart, Users } from "lucide-react"

export default function HealthServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/red-cross-south-africa-health-services.png"
          alt="Health Services"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Health Services</h1>
          <p className="text-xl text-center max-w-3xl">
            Promoting health and wellbeing in vulnerable communities across the Western Cape
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Health Services Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                The South African Red Cross Society Western Cape Provincial Branch implements a comprehensive range of health services aimed at improving the health and wellbeing of vulnerable communities across the province.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our approach focuses on preventive health education, care and support services, and health promotion activities. We work closely with communities, government health departments, and other stakeholders to address health challenges and build community resilience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#programs">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" /> Our Programs
                  </Button>
                </Link>
                <Link href="#volunteer">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> Volunteer in Health
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button className="bg-red-600 hover:bg-red-700">Support Our Work</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-south-africa-health-worker.png"
                alt="Red Cross Health Worker"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Health Programs */}
      <section id="programs" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Health Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-hiv-program.png"
                  alt="HIV/AIDS Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">HIV/AIDS Program</h3>
                <p className="text-gray-700 mb-4">
                  Our HIV/AIDS program focuses on prevention, care, and support for people living with HIV/AIDS. We work to reduce stigma and discrimination while providing essential services.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    HIV prevention education
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Voluntary counseling and testing
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Support groups for PLHIV
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-tb-program.png"
                  alt="TB Prevention Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">TB Prevention Program</h3>
                <p className="text-gray-700 mb-4">
                  Our tuberculosis prevention program aims to reduce TB transmission and improve treatment outcomes through education and support.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    TB awareness campaigns
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Treatment adherence support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Contact tracing
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-home-care.png"
                  alt="Home-Based Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Home-Based Care</h3>
                <p className="text-gray-700 mb-4">
                  Our home-based care program provides support to chronically ill patients in their homes, improving their quality of life and reducing hospital burden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Basic nursing care
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Psychosocial support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Caregiver training
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-mobile-clinic.png"
                  alt="Mobile Health Clinics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Mobile Health Clinics</h3>
                <p className="text-gray-700 mb-4">
                  Our mobile health clinics bring essential health services to underserved communities, improving access to healthcare.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Basic health screenings
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Immunizations
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Health education
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-first-aid.png"
                  alt="First Aid Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">First Aid Services</h3>
                <p className="text-gray-700 mb-4">
                  We provide first aid services at public events and emergencies, ensuring immediate medical assistance is available.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Event medical support
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Emergency first aid
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    First aid training
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/red-cross-south-africa-health-education.png"
                  alt="Health Education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">Health Education</h3>
                <p className="text-gray-700 mb-4">
                  Our health education programs empower communities with knowledge to prevent diseases and promote healthy behaviors.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Community workshops
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    School health programs
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    Health promotion campaigns
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700 mt-auto">Learn More</Button>
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
                src="/red-cross-south-africa-community-health.png"
                alt="Community Health Program"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Featured Program: Community Health</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our Community Health Program takes a holistic approach to improving health outcomes in vulnerable communities across the Western Cape. The program focuses on:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Community Health Assessments</h4>
                    <p className="text-gray-600">
                      Identifying health needs and priorities in communities
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Health Education</h4>
                    <p className="text-gray-600">
                      Empowering communities with knowledge to prevent diseases
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Basic Health Services</h4>
                    <p className="text-gray-600">
                      Providing essential health services through mobile clinics
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Community Health Volunteers</h4>
                    <p className="text-gray-600">
                      Training community members to serve as health advocates
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="bg-red-600 hover:bg-red-700">Support Our Community Health Program</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Details</h2>

          <Tabs defaultValue="hiv" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="hiv">HIV/AIDS</TabsTrigger>
              <TabsTrigger value="tb">TB Prevention</TabsTrigger>
              <TabsTrigger value="home">Home-Based Care</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Clinics</TabsTrigger>
            </TabsList>

            <TabsContent value="hiv" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">HIV/AIDS Program</h3>
                  <p className="text-gray-700 mb-4">
                    Our HIV/AIDS program focuses on prevention, care, and support for people living with HIV/AIDS. We work to reduce stigma and discrimination while providing essential services to affected individuals and communities.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      HIV prevention education and awareness campaigns
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Voluntary counseling and testing services
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Support groups for people living with HIV
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Home-based care for AIDS patients
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Prevention of mother-to-child transmission support
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-hiv-program-2.png"
                      alt="HIV/AIDS Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 10,000+ people reached through HIV education</li>
                      <li>• 5,000+ HIV tests conducted</li>
                      <li>• 2,000+ PLHIV supported through support groups</li>
                      <li>• 50+ communities engaged in HIV prevention</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tb" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">TB Prevention Program</h3>
                  <p className="text-gray-700 mb-4">
                    Our tuberculosis prevention program aims to reduce TB transmission and improve treatment outcomes through education, support, and community engagement.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      TB awareness and education campaigns
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Treatment adherence support for TB patients
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Contact tracing and screening
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      TB/HIV co-infection management
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Community-based TB care
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-tb-program-2.png"
                      alt="TB Prevention Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 8,000+ people reached through TB education</li>
                      <li>• 1,500+ TB patients supported</li>
                      <li>• 90%+ treatment adherence rate</li>
                      <li>• 30+ communities engaged in TB prevention</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="home" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Home-Based Care</h3>
                  <p className="text-gray-700 mb-4">
                    Our home-based care program provides support to chronically ill patients in their homes, improving their quality of life and reducing the burden on hospitals and healthcare facilities.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Basic nursing care for chronically ill patients
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Psychosocial support for patients and families
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Training for family caregivers
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Referrals to healthcare facilities when needed
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Palliative care for terminally ill patients
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-home-care-2.png"
                      alt="Home-Based Care"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 5,000+ patients supported through home-based care</li>
                      <li>• 1,000+ family caregivers trained</li>
                      <li>• 20,000+ home visits conducted annually</li>
                      <li>• 40+ communities served</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Mobile Health Clinics</h3>
                  <p className="text-gray-700 mb-4">
                    Our mobile health clinics bring essential health services to underserved communities, improving access to healthcare for those who face geographical, financial, or other barriers.
                  </p>
                  <h4 className="font-bold mt-4 mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Basic health screenings (blood pressure, glucose, etc.)
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Immunizations for children and adults
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Health education and counseling
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Referrals to healthcare facilities for further care
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Maternal and child health services
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-south-africa-mobile-clinic-2.png"
                      alt="Mobile Health Clinics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Impact</h4>
                    <ul className="space-y-2">
                      <li>• 10,000+ patients served annually</li>
                      <li>• 50+ remote communities reached</li>
                      <li>• 5,000+ health screenings conducted</li>
                      <li>• 2,000+ children immunized</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Health Volunteers */}
      <section id="volunteer" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

\
