import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Hero */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1600&query=Red Cross volunteers at help desk in South Africa"
          alt="Contact Us"
          width={1600}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl">
            Get in touch with the South African Red Cross Society Western Cape Provincial Branch
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="donation">Donations</SelectItem>
                      <SelectItem value="training">Training & Courses</SelectItem>
                      <SelectItem value="emergency">Emergency Assistance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} required />
                </div>

                <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Provincial Headquarters</h3>
                        <p className="text-gray-600">5 Long Street, Cape Town, 8001, Western Cape, South Africa</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">+27 (0) 21 555 0000</p>
                        <p className="text-gray-600 font-medium mt-1">Emergency Hotline:</p>
                        <p className="text-red-600 font-bold">0800 RED CROSS (733 27677)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">info.westerncape@redcross.org.za</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:30 AM - 4:30 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Find a Branch Near You</h3>
                <p className="text-gray-700 mb-4">
                  We have 7 branches across the Western Cape Province. Find the one closest to you.
                </p>
                <Link href="/branches">
                  <Button variant="outline" className="w-full">
                    View All Branches
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Our Location</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=map of Cape Town South Africa"
              alt="Map of Red Cross Western Cape Provincial Headquarters"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
                <h3 className="font-bold mb-2">South African Red Cross Society</h3>
                <p className="text-gray-600">Western Cape Provincial Headquarters</p>
                <p className="text-gray-600">5 Long Street, Cape Town, 8001</p>
                <Button className="mt-4 bg-red-600 hover:bg-red-700">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How can I volunteer with the Red Cross?</h3>
                <p className="text-gray-700">
                  You can volunteer by contacting your nearest branch or filling out our volunteer application form
                  online. We offer various volunteer opportunities based on your skills and interests.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How can I donate to the Red Cross?</h3>
                <p className="text-gray-700">
                  You can make monetary donations online, via EFT, or in person at any of our branches. We also accept
                  donations of goods and services depending on current needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What first aid courses do you offer?</h3>
                <p className="text-gray-700">
                  We offer a range of first aid courses from basic first aid to advanced certification. Courses are
                  available for individuals, groups, and organizations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do I request emergency assistance?</h3>
                <p className="text-gray-700">
                  For emergency assistance, please call our emergency hotline at 0800 RED CROSS (733 27677). This line
                  is available 24/7 for disaster and emergency situations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
