import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/red-cross-historical-photo.png"
          alt="Red Cross History"
          width={1600}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our History</h1>
          <p className="text-xl text-center max-w-3xl">
            The journey of the South African Red Cross Society through the years
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">A Legacy of Humanitarian Service</h2>
            <p className="text-lg text-gray-700 mb-6">
              The South African Red Cross Society has a rich history dating back to the late 19th century. From its
              origins as a branch of the British Red Cross to its development as an independent National Society, the
              organization has continuously evolved to meet the humanitarian needs of South Africa's people.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Throughout its history, the South African Red Cross Society has responded to conflicts, disasters, and
              health crises, always guided by the Fundamental Principles of the International Red Cross and Red Crescent
              Movement.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Historical Timeline</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

              {/* 1896 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-2">1896</h3>
                    <p className="text-gray-700">
                      The South African Red Cross Society was established as a branch of the British Red Cross during the
                      Anglo-Boer War to provide medical assistance to wounded soldiers and civilians.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-1.png"
                        alt="Early Red Cross in South Africa"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1913 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-2.png"
                        alt="Red Cross during World War I"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-2">1913</h3>
                    <p className="text-gray-700">
                      The South African Red Cross Society was formally established as a branch of the British Red Cross
                      with its headquarters in Cape Town. It played a crucial role during World War I, providing medical
                      supplies, comfort packages, and support to prisoners of war.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1921 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-2">1921</h3>
                    <p className="text-gray-700">
                      The South African Red Cross Society was officially recognized as an independent National Society by
                      the International Committee of the Red Cross. This marked a significant milestone in the
                      organization's history, allowing it to develop its own identity and programs tailored to South
                      Africa's unique needs.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-3.png"
                        alt="South African Red Cross Society recognition"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1939-1945 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-4.png"
                        alt="Red Cross during World War II"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-2">1939-1945</h3>
                    <p className="text-gray-700">
                      During World War II, the South African Red Cross Society expanded its operations significantly,
                      providing medical services, blood transfusion services, and welfare support to soldiers and
                      civilians. The Society also established convalescent homes for wounded soldiers and organized
                      prisoner of war parcel services.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1960s */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-2">1960s</h3>
                    <p className="text-gray-700">
                      The Society expanded its services across South Africa, establishing provincial branches including
                      the Western Cape Provincial Branch. During this period, the organization focused on developing
                      community health programs, first aid training, and disaster preparedness initiatives.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-5.png"
                        alt="Red Cross expansion in South Africa"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1980s */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-6.png"
                        alt="Red Cross during apartheid era"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-2">1980s</h3>
                    <p className="text-gray-700">
                      During the height of apartheid, the South African Red Cross Society faced significant challenges in
                      maintaining its principles of neutrality and impartiality. Despite these challenges, the
                      organization continued to provide humanitarian services to all communities, often working in
                 continued to provide humanitarian services to all communities, often working in townships and rural areas where needs were greatest. The Society established community health programs and emergency response teams to address the humanitarian challenges of the time.
                  </div>
                </div>
              </div>

              {/* 1994 */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-2">1994</h3>
                    <p className="text-gray-700">
                      With the end of apartheid and the transition to democracy, the South African Red Cross Society
                      underwent significant transformation. The organization aligned its programs with the new
                      government's health and social welfare priorities, while maintaining its independence and
                      neutrality.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-7.png"
                        alt="Red Cross in democratic South Africa"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2000s */}
              <div className="relative mb-16">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-historical-8.png"
                        alt="Modern Red Cross operations"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-2">2000s</h3>
                    <p className="text-gray-700">
                      The Society expanded its focus to address the HIV/AIDS epidemic, developing comprehensive programs
                      for prevention, care, and support. The organization also strengthened its disaster management
                      capabilities, responding to floods, droughts, and other emergencies across the country.
                    </p>
                  </div>
                </div>
              </div>

              {/* Present Day */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-red-600"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-2">Present Day</h3>
                    <p className="text-gray-700">
                      Today, the South African Red Cross Society Western Cape Provincial Branch continues its
                      humanitarian mission through disaster management, health and care programs, first aid training, and
                      community development initiatives. The organization remains committed to alleviating human
                      suffering and building community resilience across the Western Cape province.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/red-cross-south-africa-volunteers.png"
                        alt="Red Cross today"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Leaders */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Historical Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sir John Buchanan",
                period: "1913-1921",
                role: "First President",
                description:
                  "Led the establishment of the South African Red Cross as a branch of the British Red Cross.",
              },
              {
                name: "Dr. Elizabeth Mavimbela",
                period: "1994-2002",
                role: "First Black President",
                description:
                  "Guided the organization through its transformation in post-apartheid South Africa.",
              },
              {
                name: "Prof. William Smith",
                period: "2010-2018",
                role: "Recent President",
                description:
                  "Modernized the organization's programs and strengthened its disaster response capabilities.",
              },
            ].map((leader, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{leader.role}, {leader.period}</p>
                  <p className="text-gray-700">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Archives */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Historical Archives</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            The South African Red Cross Society maintains historical archives documenting its work throughout the years.
            These archives include photographs, documents, and artifacts that tell the story of humanitarian service in
            South Africa.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">Visit Our Archives</Button>
        </div>
      </section>
    </div>
  );
}
