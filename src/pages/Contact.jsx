import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails"
import ContactForm from "../components/core/ContactUsPage/ContactForm"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading .word", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      })
      gsap.from(".contact-details, .contact-form", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out",
      })
      gsap.utils.toArray(".contact-reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      <div className="aurora-blob top-20 -left-20 h-80 w-80 bg-yellow-50/15" />
      <div className="aurora-blob top-40 -right-20 h-96 w-96 bg-blue-100/20" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto mt-16 w-11/12 max-w-maxContent text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-yellow-25">
          Get in touch
        </div>
        <h1 className="contact-heading mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <span className="word inline-block">Let's</span>{" "}
          <span className="word inline-block">talk</span>{" "}
          <span className="word inline-block">about</span>{" "}
          <span className="word inline-block font-serif-display italic text-gradient-cool">
            your goals
          </span>
        </h1>
      </div>

      <div className="relative mx-auto mt-14 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="contact-details lg:w-[40%]">
          <ContactDetails />
        </div>
        <div className="contact-form lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="contact-reveal mt-8 text-center font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Reviews from{" "}
          <span className="font-serif-display italic text-gradient-cool">
            other learners
          </span>
        </h2>
        <div className="contact-reveal w-full">
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
