"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Slide {
  image: string
  title: string
  subtitle: string
  cta: {
    primary: {
      text: string
      link: string
    }
    secondary: {
      text: string
      link: string
    }
  }
}

export default function HeroSlider() {
  const slides: Slide[] = [
    {
      image: "/south-africa-disaster-relief.png",
      title: "South African Red Cross Society",
      subtitle: "Western Cape Provincial Branch",
      cta: {
        primary: {
          text: "Donate Now",
          link: "/donate",
        },
        secondary: {
          text: "Volunteer",
          link: "/volunteer",
        },
      },
    },
    {
      image: "/red-cross-first-aid-south-africa.png",
      title: "First Aid Training & Certification",
      subtitle: "Learn life-saving skills with our certified trainers",
      cta: {
        primary: {
          text: "View Courses",
          link: "/training",
        },
        secondary: {
          text: "Learn More",
          link: "/what-we-do",
        },
      },
    },
    {
      image: "/disaster-response-south-africa.png",
      title: "Disaster Response & Relief",
      subtitle: "Always ready to respond to emergencies across Western Cape",
      cta: {
        primary: {
          text: "Support Our Work",
          link: "/donate",
        },
        secondary: {
          text: "Our Impact",
          link: "/what-we-do/disaster-relief",
        },
      },
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  useEffect(() => {
    setLoading(false)
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              width={1600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-center mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-center mb-2 max-w-3xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-center mb-8 italic"
              >
                "Always Needed, Always There"
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href={slides[currentSlide].cta.primary.link}>{slides[currentSlide].cta.primary.text}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white"
                >
                  <Link href={slides[currentSlide].cta.secondary.link}>{slides[currentSlide].cta.secondary.text}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
