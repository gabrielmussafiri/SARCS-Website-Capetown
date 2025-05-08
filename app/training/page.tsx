"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Award, Users, BookOpen, Shield, Heart, Phone, Mail } from "lucide-react"
import { CourseReservationForm } from "@/components/course-reservation-form"

export default function TrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string
    date: string
    location: string
  } | null>(null)

  const [isReservationOpen, setIsReservationOpen] = useState(false)

  const handleReservationClick = (course: { title: string; date: string; location: string }) => {
    setSelectedCourse(course)
    setIsReservationOpen(true)
  }

  const closeReservationForm = () => {
    setIsReservationOpen(false)
  }

  const upcomingCourses = [
    {
      title: "Level 1 First Aid",
      date: "June 15-16, 2025",
      location: "Cape Town Branch",
      price: "R850",
      spaces: "8 spaces left",
    },
    {
      title: "Disaster Preparedness",
      date: "June 22-24, 2025",
      location: "Stellenbosch Branch",
      price: "R1,200",
      spaces: "12 spaces left",
    },
    {
      title: "Basic First Aid",
      date: "July 5, 2025",
      location: "George Branch",
      price: "R450",
      spaces: "15 spaces left",
    },
    {
      title: "Level 2 First Aid",
      date: "July 12-14, 2025",
      location: "Cape Town Branch",
      price: "R1,500",
      spaces: "6 spaces left",
    },
    {
      title: "Water Safety Workshop",
      date: "July 19, 2025",
      location: "Knysna Branch",
      price: "R350",
      spaces: "20 spaces left",
    },
    {
      title: "First Aid Instructor Course",
      date: "August 2-6, 2025",
      location: "Cape Town Branch",
      price: "R3,500",
      spaces: "4 spaces left",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/red-cross-first-aid-south-africa.png"
          alt="Red Cross Training and Education"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Training & Education</h1>
          <p className="text-xl text-center max-w-3xl">
            Empowering communities through knowledge and skills development
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Training Programs</h2>
              <p className="text-lg text-gray-700 mb-6">
                The South African Red Cross Society Western Cape Provincial Branch offers a comprehensive range of
                training programs designed to build resilience and preparedness in communities across the province.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our courses are delivered by qualified instructors with extensive experience in their fields. Whether
                you're an individual looking to learn life-saving skills, a business seeking to train your staff, or a
                community organization wanting to build local capacity, we have programs to meet your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200 px-3 py-1 text-sm">
                  Internationally Recognized Certifications
                </Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200 px-3 py-1 text-sm">
                  Experienced Instructors
                </Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200 px-3 py-1 text-sm">
                  Practical Hands-on Training
                </Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200 px-3 py-1 text-sm">
                  Customizable Programs
                </Badge>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
              <Image src="/first-aid-class.png" alt="Red Cross Training Session" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Course Categories</h2>

          <Tabs defaultValue="first-aid" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="first-aid">First Aid</TabsTrigger>
              <TabsTrigger value="disaster">Disaster Management</TabsTrigger>
              <TabsTrigger value="community">Community Education</TabsTrigger>
              <TabsTrigger value="specialized">Specialized Training</TabsTrigger>
            </TabsList>

            <TabsContent value="first-aid" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">First Aid Training</h3>
                  <p className="text-gray-700 mb-6">
                    Our First Aid courses teach essential life-saving skills that can make the difference between life
                    and death in emergency situations. From basic first aid to advanced certification, we offer courses
                    for all skill levels.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Basic First Aid</h4>
                        <p className="text-gray-600">Learn essential skills to respond to common emergencies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Level 1 First Aid (Beginner)</h4>
                        <p className="text-gray-600">
                          Comprehensive introduction to first aid principles and practices
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Level 2 First Aid (Intermediate)</h4>
                        <p className="text-gray-600">Advanced techniques for managing complex emergencies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Level 3 First Aid (Advanced)</h4>
                        <p className="text-gray-600">Professional-level emergency response training</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/first-aid-cpr-training.png" alt="First Aid Training" fill className="object-cover" />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Featured Course: Level 1 First Aid</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-red-600 mr-2" />
                        <span>Duration: 2 days (16 hours)</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="h-4 w-4 text-red-600 mr-2" />
                        <span>Certification: Valid for 3 years</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-600 mr-2" />
                        <span>Location: All 7 branches across Western Cape</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-4 bg-red-600 hover:bg-red-700"
                      onClick={() =>
                        handleReservationClick({
                          title: "Level 1 First Aid",
                          date: "Next available date",
                          location: "Choose your preferred branch",
                        })
                      }
                    >
                      Make Reservation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="disaster" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Disaster Management Training</h3>
                  <p className="text-gray-700 mb-6">
                    Our disaster management courses prepare individuals and communities to effectively respond to and
                    recover from disasters. These programs focus on preparedness, response, and recovery strategies.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Community Disaster Preparedness</h4>
                        <p className="text-gray-600">Learn how to prepare your community for potential disasters</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Disaster Response Team Training</h4>
                        <p className="text-gray-600">Specialized training for emergency response team members</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Disaster Assessment</h4>
                        <p className="text-gray-600">Learn to evaluate disaster impacts and community needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Psychosocial Support in Disasters</h4>
                        <p className="text-gray-600">
                          Providing emotional and psychological support to affected communities
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/disaster-response-south-africa.png"
                      alt="Disaster Management Training"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Featured Course: Community Disaster Preparedness</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-red-600 mr-2" />
                        <span>Duration: 3 days (24 hours)</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-4 w-4 text-red-600 mr-2" />
                        <span>Target: Community leaders, volunteers, and residents</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-600 mr-2" />
                        <span>Location: All 7 branches or on-site at communities</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-4 bg-red-600 hover:bg-red-700"
                      onClick={() =>
                        handleReservationClick({
                          title: "Community Disaster Preparedness",
                          date: "Next available date",
                          location: "Choose your preferred branch",
                        })
                      }
                    >
                      Make Reservation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Community Education Programs</h3>
                  <p className="text-gray-700 mb-6">
                    Our community education programs focus on building resilience and promoting health and safety
                    awareness in communities across the Western Cape.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Health Promotion</h4>
                        <p className="text-gray-600">Education on disease prevention and healthy living</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Water Safety</h4>
                        <p className="text-gray-600">Drowning prevention and water safety awareness</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Fire Safety</h4>
                        <p className="text-gray-600">Prevention and response to residential fires</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Youth Peer Education</h4>
                        <p className="text-gray-600">
                          Training young people to educate their peers on health and safety
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/red-cross-health-education-south-africa.png"
                      alt="Community Education"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Featured Program: Health Promotion Workshops</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-red-600 mr-2" />
                        <span>Duration: Flexible (2-4 hours per session)</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-4 w-4 text-red-600 mr-2" />
                        <span>Target: Schools, community centers, workplaces</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-600 mr-2" />
                        <span>Location: On-site at requesting organizations</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-4 bg-red-600 hover:bg-red-700"
                      onClick={() =>
                        handleReservationClick({
                          title: "Health Promotion Workshop",
                          date: "To be scheduled",
                          location: "At your organization",
                        })
                      }
                    >
                      Request a Workshop
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specialized" className="p-6 border rounded-md bg-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Specialized Training Programs</h3>
                  <p className="text-gray-700 mb-6">
                    Our specialized training programs cater to specific sectors and needs, providing targeted skills
                    development for various contexts.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Workplace First Aid</h4>
                        <p className="text-gray-600">Customized first aid training for workplace settings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Event Medical Support</h4>
                        <p className="text-gray-600">Training for providing medical support at public events</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">First Aid for Childcare Providers</h4>
                        <p className="text-gray-600">Specialized training for those working with children</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">First Aid Instructor Training</h4>
                        <p className="text-gray-600">Train-the-trainer program for first aid instructors</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src="/workplace-first-aid-south-africa.png" alt="Specialized Training" fill className="object-cover" />
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Featured Course: Workplace First Aid</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="h-4 w-4 text-red-600 mr-2" />
                        <span>Duration: 1-2 days (customizable)</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-4 w-4 text-red-600 mr-2" />
                        <span>Target: Businesses, organizations, and institutions</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-600 mr-2" />
                        <span>Location: On-site at your workplace or at our training centers</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full mt-4 bg-red-600 hover:bg-red-700"
                      onClick={() =>
                        handleReservationClick({
                          title: "Workplace First Aid",
                          date: "To be scheduled",
                          location: "At your workplace or our training center",
                        })
                      }
                    >
                      Request Corporate Training
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Courses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-red-600 text-white p-3">
                  <h3 className="font-bold text-lg">{course.title}</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-red-600 mr-3" />
                      <span>{course.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-red-600 mr-3" />
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-lg">{course.price}</span>
                      <span className="text-green-600 text-sm ml-auto">{course.spaces}</span>
                    </div>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() =>
                        handleReservationClick({
                          title: course.title,
                          date: course.date,
                          location: course.location,
                        })
                      }
                    >
                      Make Reservation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/training/calendar">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                View Full Course Calendar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
              <Image src="/corporate-first-aid-south-africa.png" alt="Corporate Training" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Corporate & Group Training</h2>
              <p className="text-gray-700 mb-6">
                We offer customized training solutions for businesses, schools, community organizations, and government
                agencies. Our corporate training programs can be tailored to meet your specific needs and delivered at
                your location or at one of our training centers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">For Businesses</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Workplace first aid compliance</li>
                    <li>• Health and safety training</li>
                    <li>• Emergency response planning</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">For Schools</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Teacher first aid training</li>
                    <li>• Student safety workshops</li>
                    <li>• School emergency planning</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">For Communities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Community disaster preparedness</li>
                    <li>• Health education programs</li>
                    <li>• Volunteer capacity building</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">For Government</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Disaster management training</li>
                    <li>• Emergency services collaboration</li>
                    <li>• Public health initiatives</li>
                  </ul>
                </div>
              </div>
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() =>
                  handleReservationClick({
                    title: "Corporate Training Request",
                    date: "To be scheduled",
                    location: "At your location or our training center",
                  })
                }
              >
                Request Corporate Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Trainees Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The First Aid Level 1 course was incredibly practical and hands-on. I now feel confident that I could help in an emergency situation.",
                name: "Thabo M.",
                role: "School Teacher, Cape Town",
              },
              {
                quote:
                  "Our company arranged workplace first aid training with Red Cross, and the instructors were knowledgeable and made the content relevant to our specific work environment.",
                name: "Sarah J.",
                role: "HR Manager, Stellenbosch",
              },
              {
                quote:
                  "The disaster preparedness training has transformed how our community approaches emergency planning. We're much better prepared now.",
                name: "David N.",
                role: "Community Leader, George",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
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
                    <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What certifications do I receive after completing a course?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Upon successful completion of our courses, you will receive an official South African Red Cross
                  Society certificate. For First Aid courses, these certificates are valid for 3 years and are
                  recognized nationally. Some of our advanced courses also carry international recognition through the
                  International Federation of Red Cross and Red Crescent Societies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Do I need any prior experience to take a First Aid course?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  No prior experience is required for our Basic and Level 1 First Aid courses. These are designed for
                  beginners and provide all the foundational knowledge you need. For Level 2 and 3 courses, completion
                  of the previous level or equivalent experience is required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Can you provide training at our location?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Yes, we offer on-site training for businesses, schools, and community organizations. This can be
                  arranged for groups of 8 or more participants. We bring all necessary training equipment and materials
                  to your location. Please contact us for more information about on-site training options and pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How do I register for a course?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  You can register for courses by clicking the "Make Reservation" button on any course. This will open a
                  form that you can fill out with your details. Your reservation request will be sent to our training
                  department, who will contact you to confirm your booking and provide payment instructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Cancellations made more than 7 days before the course start date are eligible for a full refund or
                  transfer to another course date. Cancellations made within 7 days of the course start date are
                  eligible for a transfer to another course date but not a refund. No-shows without prior notification
                  are not eligible for refunds or transfers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn Life-Saving Skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join one of our upcoming training courses and gain the knowledge and confidence to respond effectively in
            emergency situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() =>
                handleReservationClick({
                  title: "General Course Inquiry",
                  date: "To be determined",
                  location: "To be determined",
                })
              }
            >
              Make a Reservation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              onClick={() =>
                handleReservationClick({
                  title: "Group Training Request",
                  date: "To be scheduled",
                  location: "To be determined",
                })
              }
            >
              Request Group Training
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Our Training Department</h2>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our training programs? Our training team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600">+27 (0) 21 555 0000</p>
                <p className="text-gray-600">Ext: 123</p>
              </div>
              <div>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">trainingadmin.wc@redcross.org.za</p>
              </div>
              <div>
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">8:30 AM - 4:30 PM</p>
              </div>
            </div>
            <Button
              className="mt-8 bg-red-600 hover:bg-red-700"
              onClick={() =>
                handleReservationClick({
                  title: "Training Department Inquiry",
                  date: "N/A",
                  location: "N/A",
                })
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Form Dialog */}
      {selectedCourse && (
        <CourseReservationForm
          isOpen={isReservationOpen}
          onClose={closeReservationForm}
          courseTitle={selectedCourse.title}
          courseDate={selectedCourse.date}
          courseLocation={selectedCourse.location}
        />
      )}
    </div>
  )
}
