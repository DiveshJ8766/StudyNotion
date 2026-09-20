import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-title .word", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      })
      gsap.from(".about-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        ease: "power3.out",
      })
      gsap.from(".about-banner img", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.6,
        ease: "power3.out",
      })

      gsap.utils.toArray(".about-reveal").forEach((el) => {
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
      <section className="relative bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-700">
        <div className="aurora-blob top-10 left-10 h-72 w-72 bg-yellow-50/20" />
        <div className="aurora-blob top-40 right-10 h-96 w-96 bg-blue-100/20" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="about-hero-title mx-auto py-24 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:w-[75%] lg:text-6xl">
            <span className="word inline-block">Driving</span>{" "}
            <span className="word inline-block">Innovation</span>{" "}
            <span className="word inline-block">in</span>{" "}
            <span className="word inline-block">Online</span>{" "}
            <span className="word inline-block">Education</span>{" "}
            <span className="word inline-block">for</span>{" "}
            <span className="word inline-block">a</span>{" "}
            <span className="word inline-block font-serif-display italic text-gradient-cool">
              Brighter Future
            </span>
            <p className="about-hero-sub mx-auto mt-6 text-center text-base font-medium leading-relaxed text-richblack-300 lg:w-[95%] lg:text-lg">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="about-banner absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" className="rounded-2xl" />
            <img src={BannerImage2} alt="" className="rounded-2xl" />
            <img src={BannerImage3} alt="" className="rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="about-reveal border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="about-reveal">
        <StatsComponenet />
      </div>
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <div className="about-reveal">
          <LearningGrid />
        </div>
        <div className="about-reveal">
          <ContactFormSection />
        </div>
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h2 className="about-reveal mt-8 text-center font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Reviews from{" "}
          <span className="font-serif-display italic text-gradient-cool">
            other learners
          </span>
        </h2>
        <div className="about-reveal w-full">
          <ReviewSlider />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
