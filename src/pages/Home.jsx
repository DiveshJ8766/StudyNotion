import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaArrowRight } from "react-icons/fa"
import { HiOutlineSparkles, HiOutlinePlay } from "react-icons/hi"
import { Link } from "react-router-dom"

import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-pill", { y: 30, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title .word",
          { y: 60, opacity: 0, duration: 0.8, stagger: 0.08 },
          "-=0.3"
        )
        .from(
          ".hero-sub",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .from(
          ".hero-video",
          { y: 40, opacity: 0, scale: 0.96, duration: 0.9 },
          "-=0.4"
        )
        .from(
          ".hero-stat",
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.5"
        )

      // Floating blobs
      gsap.to(".blob-a", {
        x: 40,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(".blob-b", {
        x: -50,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
      gsap.to(".blob-c", {
        x: 30,
        y: 20,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Section reveals
      gsap.utils.toArray(".reveal").forEach((el) => {
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

      // Parallax video
      const vid = document.querySelector(".hero-video")
      if (vid) {
        gsap.to(vid, {
          y: -60,
          scrollTrigger: {
            trigger: vid,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Aurora blobs */}
        <div className="aurora-blob blob-a top-[-6rem] left-[-4rem] h-96 w-96 bg-yellow-50/30" />
        <div className="aurora-blob blob-b top-40 right-[-6rem] h-[28rem] w-[28rem] bg-blue-100/25" />
        <div className="aurora-blob blob-c bottom-0 left-1/3 h-80 w-80 bg-caribbeangreen-100/20" />

        {/* Grid backdrop */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 pb-24 pt-16 text-white">
          {/* Pill */}
          <Link to={"/signup"} className="hero-pill">
            <div className="group mx-auto w-fit rounded-full border border-white/10 bg-white/5 p-1 font-medium text-richblack-100 backdrop-blur-md transition-all duration-300 hover:border-yellow-50/50 hover:bg-white/10">
              <div className="flex items-center gap-2 rounded-full px-6 py-[6px] text-sm">
                <HiOutlineSparkles className="text-yellow-25" />
                <p>Become an Instructor</p>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Heading */}
          <h1 className="hero-title text-center font-display text-[42px] font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[96px]">
            <span className="word inline-block">Empower</span>{" "}
            <span className="word inline-block">your</span>{" "}
            <span className="word inline-block font-serif-display italic font-normal text-gradient-primary">
              future
            </span>
            <br />
            <span className="word inline-block">with</span>{" "}
            <span className="word inline-block font-serif-display italic font-normal text-gradient-cool">
              coding
            </span>{" "}
            <span className="word inline-block">skills.</span>
          </h1>

          {/* Sub */}
          <p className="hero-sub max-w-2xl text-center font-grotesk text-base leading-relaxed text-richblack-200 md:text-lg">
            Learn at your own pace, from anywhere in the world. Hands-on
            projects, curated quizzes and personalised feedback from
            industry-leading instructors.
          </p>

          {/* CTA */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <div className="hero-cta">
              <Link to="/signup">
                <button className="group inline-flex items-center gap-2 rounded-full bg-yellow-50 px-6 py-3 font-display font-bold text-richblack-900 shadow-[0_10px_40px_-10px_rgba(255,214,10,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_-10px_rgba(255,214,10,0.9)]">
                  Start Learning
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
            <div className="hero-cta">
              <Link to="/login">
                <button className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-display font-semibold text-richblack-5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10">
                  <HiOutlinePlay />
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid w-full max-w-3xl grid-cols-3 gap-4">
            {[
              { k: "10k+", v: "Active Learners" },
              { k: "500+", v: "Expert Courses" },
              { k: "4.9/5", v: "Learner Rating" },
            ].map((s, i) => (
              <div
                key={i}
                className="hero-stat glass rounded-2xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-gradient-primary md:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-richblack-300">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="hero-video relative mx-3 my-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-20px_rgba(31,162,255,0.35)]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-50/10 via-transparent to-blue-100/10" />
            <video className="w-full" muted loop autoPlay playsInline>
              <source src={Banner} type="video/mp4" />
            </video>
          </div>

          {/* Code Section 1 */}
          <div className="reveal w-full">
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="font-display text-4xl font-semibold tracking-tight">
                  Unlock your
                  <HighlightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
          </div>

          {/* Code Section 2 */}
          <div className="reveal w-full">
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] font-display text-4xl font-semibold tracking-tight lg:w-[50%]">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroundGradient={<div className="codeblock2 absolute"></div>}
            />
          </div>

          <div className="reveal w-full">
            <ExploreMore />
          </div>
        </div>
      </section>

      {/* SECTION 2 - Skills in demand */}
      <section className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-wrap justify-center gap-5 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          <div className="reveal mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="font-display text-4xl font-semibold tracking-tight lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px] leading-relaxed">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          <div className="reveal w-full">
            <TimelineSection />
          </div>

          <div className="reveal w-full">
            <LearningLanguageSection />
          </div>
        </div>
      </section>

      {/* SECTION 3 - Instructor + reviews */}
      <section className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <div className="reveal w-full">
          <InstructorSection />
        </div>

        <h2 className="reveal mt-8 text-center font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Reviews from{" "}
          <span className="font-serif-display italic text-gradient-cool">
            other learners
          </span>
        </h2>
        <div className="reveal w-full">
          <ReviewSlider />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
