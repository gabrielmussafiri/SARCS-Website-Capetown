import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Gift, Calendar, CreditCard, Landmark, Smartphone } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Donate Hero */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1600&query=Red Cross volunteers helping children in South Africa"
          alt="Donate to Red Cross"
          width={1600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Donate Today</h1>
          <p className="text-xl text-center max-w-3xl mb-8">
            Your donation helps us respond to emergencies and support vulnerable communities across Western Cape
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Donate Now
          </Button>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Give</h2>

          <Tabs defaultValue="once" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="once">One-Time Donation</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
              <TabsTrigger value="other">Other Ways to Give</TabsTrigger>
            </TabsList>

            <TabsContent value="once" className="p-6 border rounded-md">
              <h3 className="text-xl font-bold mb-6">Make a One-Time Donation</h3>

              <form className="space-y-6">
                <div className="space-y-4">
                  <Label>Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-16 text-lg">
                      R100
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R250
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R500
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R1000
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Label htmlFor="custom-amount">Custom Amount:</Label>
                    <Input id="custom-amount" type="number" placeholder="Enter amount" className="max-w-[200px]" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" /> Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eft" id="eft" />
                      <Label htmlFor="eft" className="flex items-center">
                        <Landmark className="h-5 w-5 mr-2" /> EFT/Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Label htmlFor="mobile" className="flex items-center">
                        <Smartphone className="h-5 w-5 mr-2" /> Mobile Payment
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700">Proceed to Payment</Button>
              </form>
            </TabsContent>

            <TabsContent value="monthly" className="p-6 border rounded-md">
              <h3 className="text-xl font-bold mb-6">Become a Monthly Donor</h3>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  By becoming a monthly donor, you provide consistent support that helps us plan and implement long-term
                  programs to assist vulnerable communities.
                </p>
                <div className="flex items-center p-4 bg-red-50 rounded-md">
                  <Heart className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-sm">
                    Monthly donors receive regular updates on how their contributions are making a difference.
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-4">
                  <Label>Select Monthly Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-16 text-lg">
                      R50/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R100/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R200/mo
                    </Button>
                    <Button variant="outline" className="h-16 text-lg">
                      R500/mo
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Label htmlFor="custom-monthly">Custom Amount:</Label>
                    <Input id="custom-monthly" type="number" placeholder="Enter amount" className="max-w-[200px]" />
                  </div>
                </div>

                <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700">Become a Monthly Donor</Button>
              </form>
            </TabsContent>

            <TabsContent value="other" className="p-6 border rounded-md">
              <h3 className="text-xl font-bold mb-6">Other Ways to Support Our Work</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Gift className="h-6 w-6 text-red-600 mr-3" />
                      <h4 className="text-lg font-bold">In-Kind Donations</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Donate goods such as clothing, blankets, non-perishable food items, and medical supplies.
                    </p>
                    <Link href="/donate/in-kind">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-red-600 mr-3" />
                      <h4 className="text-lg font-bold">Legacy Giving</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Leave a lasting impact by including the Red Cross in your will or estate planning.
                    </p>
                    <Link href="/donate/legacy">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Landmark className="h-6 w-6 text-red-600 mr-3" />
                      <h4 className="text-lg font-bold">Corporate Partnerships</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Partner with us through corporate donations, sponsorships, or employee giving programs.
                    </p>
                    <Link href="/donate/corporate">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="h-6 w-6 text-red-600 mr-3" />
                      <h4 className="text-lg font-bold">Fundraise for Us</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Create your own fundraising campaign or event to support our humanitarian work.
                    </p>
                    <Link href="/donate/fundraise">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Donation Makes a Difference</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="h-48 bg-gray-200 relative">
                <Image src="/red-cross-south-africa-relief.png" alt="Disaster Relief" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">R100 Provides</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency blankets for a family</li>
                  <li>• Clean water for 10 people for a week</li>
                  <li>• Basic first aid supplies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 relative">
                <Image src="/red-cross-south-africa-health.png" alt="Health Services" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">R500 Provides</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Food parcels for 5 families</li>
                  <li>• First aid training for a community volunteer</li>
                  <li>• Medical supplies for a mobile clinic</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src="/placeholder.svg?height=192&width=384&query=Red Cross community support in South Africa"
                  alt="Community Support"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">R1000 Provides</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency shelter for a displaced family</li>
                  <li>• Community disaster preparedness training</li>
                  <li>• Support for 10 vulnerable children</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Donor Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&query=portrait of African woman"
                      alt="Sarah M."
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "I've been a monthly donor for three years now. It gives me peace of mind knowing that I'm
                    contributing to an organization that responds quickly when disasters strike in our communities."
                  </p>
                  <p className="font-bold">Sarah M., Cape Town</p>
                  <p className="text-sm text-gray-500">Monthly Donor since 2022</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&query=portrait of African man"
                      alt="David T."
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "After my company partnered with the Red Cross for a corporate giving program, I saw firsthand the
                    impact they make. Their transparency and effectiveness in using donations impressed me."
                  </p>
                  <p className="font-bold">David T., Stellenbosch</p>
                  <p className="text-sm text-gray-500">Corporate Partner</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-700">
                  Yes, the South African Red Cross Society is a registered non-profit organization. Donations are
                  tax-deductible and we provide receipts for tax purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How is my donation used?</h3>
                <p className="text-gray-700">
                  Your donation supports our humanitarian work across the Western Cape, including disaster relief,
                  health services, first aid training, and community support programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Can I specify how my donation is used?</h3>
                <p className="text-gray-700">
                  Yes, you can designate your donation for specific programs or disaster relief efforts. Please indicate
                  your preference when making your donation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">How do I cancel or modify my monthly donation?</h3>
                <p className="text-gray-700">
                  You can cancel or modify your monthly donation at any time by contacting our donor services team at
                  donations.westerncape@redcross.org.za or by calling +27 (0) 21 555 0000.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support enables us to respond to emergencies and help vulnerable communities across the Western Cape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Become a Monthly Donor
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
