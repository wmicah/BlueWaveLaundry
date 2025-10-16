"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "fade"
    | "scale"
    | "slideLeft"
    | "slideRight"
    | "rotate"
    | "bounce"
  duration?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollAnimationProps) {
  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
    fade: { opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    slideLeft: { x: 100, opacity: 0 },
    slideRight: { x: -100, opacity: 0 },
    rotate: { rotate: -10, opacity: 0, scale: 0.9 },
    bounce: { y: 100, opacity: 0 },
  }

  const finalVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    fade: { opacity: 1 },
    scale: { scale: 1, opacity: 1 },
    slideLeft: { x: 0, opacity: 1 },
    slideRight: { x: 0, opacity: 1 },
    rotate: { rotate: 0, opacity: 1, scale: 1 },
    bounce: { y: 0, opacity: 1 },
  }

  const transitionEasing = {
    up: "easeOut",
    down: "easeOut",
    left: "easeOut",
    right: "easeOut",
    fade: "easeOut",
    scale: "backOut",
    slideLeft: "easeOut",
    slideRight: "easeOut",
    rotate: "backOut",
    bounce: "bounceOut",
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={finalVariants[direction]}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: transitionEasing[direction],
        type: direction === "bounce" ? "spring" : "tween",
        bounce: direction === "bounce" ? 0.6 : undefined,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation for multiple children
export function StaggeredAnimation({
  children,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.6,
  className = "",
}: ScrollAnimationProps & { staggerDelay?: number }) {
  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: 60, opacity: 0 },
    right: { x: -60, opacity: 0 },
    fade: { opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    slideLeft: { x: 100, opacity: 0 },
    slideRight: { x: -100, opacity: 0 },
    rotate: { rotate: -10, opacity: 0, scale: 0.9 },
    bounce: { y: 100, opacity: 0 },
  }

  const finalVariants = {
    up: { y: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    fade: { opacity: 1 },
    scale: { scale: 1, opacity: 1 },
    slideLeft: { x: 0, opacity: 1 },
    slideRight: { x: 0, opacity: 1 },
    rotate: { rotate: 0, opacity: 1, scale: 1 },
    bounce: { y: 0, opacity: 1 },
  }

  const transitionEasing = {
    up: "easeOut",
    down: "easeOut",
    left: "easeOut",
    right: "easeOut",
    fade: "easeOut",
    scale: "backOut",
    slideLeft: "easeOut",
    slideRight: "easeOut",
    rotate: "backOut",
    bounce: "bounceOut",
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: directionVariants[direction],
              visible: {
                ...finalVariants[direction],
                transition: {
                  duration,
                  ease: transitionEasing[direction],
                  type: direction === "bounce" ? "spring" : "tween",
                  bounce: direction === "bounce" ? 0.6 : undefined,
                },
              },
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          variants={{
            hidden: directionVariants[direction],
            visible: {
              ...finalVariants[direction],
              transition: {
                duration,
                ease: transitionEasing[direction],
                type: direction === "bounce" ? "spring" : "tween",
                bounce: direction === "bounce" ? 0.6 : undefined,
              },
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}
