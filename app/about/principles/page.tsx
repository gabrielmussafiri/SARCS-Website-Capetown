import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Scale, Globe, Shield, Users, Divide, Sun } from "lucide-react"

export default function PrinciplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/red-cross-principles-banner.png"
          alt="Red Cross Principles"
          width={1600}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Principles</h1>
          <p className="text-xl text-center max-w-3xl">The Fundamental Principles that guide our humanitarian work</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Seven Fundamental Principles</h2>
            <p className="text-lg text-gray-700 mb-6">
              The South African Red Cross Society, as part of the International Red Cross and Red Crescent Movement, is
              guided by seven Fundamental Principles. These principles, adopted in 1965, ensure that our humanitarian
              work is carried out with integrity, effectiveness, and in accordance with our mission.
            </p>
            <p className="text-lg text-gray-700">
              These principles unite Red Cross and Red Crescent National Societies, the International Committee of the
              Red Cross, and the International Federation of Red Cross and Red Crescent Societies, creating a global
              humanitarian network committed to preventing and alleviating human suffering.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Humanity */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Heart className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Humanity</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  The International Red Cross and Red Crescent Movement, born of a desire to bring assistance without
                  discrimination to the wounded on the battlefield, endeavors, in its international and national
                  capacity, to prevent and alleviate human suffering wherever it may be found.
                </p>
                <p className="text-gray-700">
                  Its purpose is to protect life and health and to ensure respect for the human being. It promotes
                  mutual understanding, friendship, cooperation and lasting peace amongst all peoples.
                </p>
              </CardContent>
            </Card>

            {/* Impartiality */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Scale className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Impartiality</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  It makes no discrimination as to nationality, race, religious beliefs, class or political opinions. It
                  endeavors to relieve the suffering of individuals, being guided solely by their needs, and to give
                  priority to the most urgent cases of distress.
                </p>
                <p className="text-gray-700">
                  We provide aid based on need alone, without favoritism or prejudice toward any group or individual.
                </p>
              </CardContent>
            </Card>

            {/* Neutrality */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Shield className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Neutrality</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  In order to continue to enjoy the confidence of all, the Movement may not take sides in hostilities or
                  engage at any time in controversies of a political, racial, religious or ideological nature.
                </p>
                <p className="text-gray-700">
                  We maintain neutrality in conflicts to ensure we can access and assist all people in need, regardless
                  of which side they may be on.
                </p>
              </CardContent>
            </Card>

            {/* Independence */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Divide className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Independence</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  The Movement is independent. The National Societies, while auxiliaries in the humanitarian services of
                  their governments and subject to the laws of their respective countries, must always maintain their
                  autonomy so that they may be able at all times to act in accordance with the principles of the
                  Movement.
                </p>
                <p className="text-gray-700">
                  We maintain autonomy from governments and other entities to ensure we can act according to our
                  principles at all times.
                </p>
              </CardContent>
            </Card>

            {/* Voluntary Service */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Users className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Voluntary Service</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  It is a voluntary relief movement not prompted in any manner by desire for gain.
                </p>
                <p className="text-gray-700">
                  Our work is carried out by volunteers motivated by commitment rather than desire for personal gain.
                  The spirit of voluntary service is at the heart of all our activities.
                </p>
              </CardContent>
            </Card>

            {/* Unity */}
            <Card className="overflow-hidden">
              <div className="bg-red-600 p-4 flex items-center">
                <Globe className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Unity</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  There can be only one Red Cross or one Red Crescent Society in any one country. It must be open to
                  all. It must carry on its humanitarian work throughout its territory.
                </p>
                <p className="text-gray-700">
                  The South African Red Cross Society is the only National Society in South Africa, open to all citizens
                  and carrying out humanitarian work throughout the country.
                </p>
              </CardContent>
            </Card>

            {/* Universality */}
            <Card className="overflow-hidden md:col-span-2">
              <div className="bg-red-600 p-4 flex items-center">
                <Sun className="h-6 w-6 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Universality</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  The International Red Cross and Red Crescent Movement, in which all Societies have equal status and
                  share equal responsibilities and duties in helping each other, is worldwide.
                </p>
                <p className="text-gray-700">
                  We are part of a global network where all National Societies have equal status and responsibilities.
                  The Movement's humanitarian work extends to all corners of the world, transcending national
                  boundaries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principles in Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Principles in Action</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/red-cross-principles-humanity.png" alt="Humanity in Action" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Humanity</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-principles-impartiality.png"
                alt="Impartiality in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Impartiality</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-principles-neutrality.png"
                alt="Neutrality in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Neutrality</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-principles-independence.png"
                alt="Independence in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Independence</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-principles-voluntary.png"
                alt="Voluntary Service in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Voluntary Service</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/red-cross-principles-unity-universality.png"
                alt="Unity and Universality in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-xl font-bold text-white">Unity & Universality</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
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
              className="mx-auto mb-6"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <p className="text-2xl italic mb-6">
              "The Fundamental Principles are not abstract concepts but practical tools that guide our actions every
              day. They ensure that our humanitarian work is carried out with integrity, effectiveness, and in
              accordance with our mission to alleviate human suffering."
            </p>
            <p className="font-bold">Dr. Nomsa Mthembu, Provincial Director</p>
          </div>
        </div>
      </section>
    </div>
  )
}
