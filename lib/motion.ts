"use client"

import { type MotionValue, useTransform, motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

// Fade in animation for elements when they come into view
export const useFadeIn = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return {
    ref,
    animate: controls,
    initial: "hidden",
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
  }
}

// Staggered fade in for multiple child elements
export const useStaggeredFadeIn = (staggerChildren = 0.1) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return {
    ref,
    animate: controls,
    initial: "hidden",
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
        },
      },
    },
  }
}

// Child item animation for staggered animations
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

// Slide in animation from left or right
export const useSlideIn = (direction = "left") => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return {
    ref,
    animate: controls,
    initial: "hidden",
    variants: {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -50 : 50,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
      },
    },
  }
}

// Scale up animation
export const useScaleUp = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return {
    ref,
    animate: controls,
    initial: "hidden",
    variants: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      },
    },
  }
}

// Parallax effect for background images
export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

// Export motion components
export { motion }
