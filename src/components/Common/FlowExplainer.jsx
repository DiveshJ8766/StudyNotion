import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import gsap from "gsap"
import {
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlinePlay,
  HiOutlinePause,
} from "react-icons/hi"
import {
  FiX,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiVideo,
  FiEdit3,
  FiBarChart2,
  FiLayers,
  FiStar,
  FiLock,
  FiCreditCard,
  FiUpload,
  FiList,
} from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"

import signupImg from "../../assets/Images/signup.webp"
import loginImg from "../../assets/Images/login.webp"
import bannerHero from "../../assets/Images/aboutus1.webp"
import bannerLearn from "../../assets/Images/aboutus3.webp"
import progressImg from "../../assets/Images/Know_your_progress.png"
import compareImg from "../../assets/Images/Compare_with_others.png"

/* ------------------------- Reusable UI atoms ---------------------------- */

function BrowserFrame({ label = "studynotion.com", children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-richblack-900/90 shadow-[0_40px_120px_-20px_rgba(31,162,255,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-richblack-800/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-pink-200/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-50/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-caribbeangreen-100/80" />
        <div className="mx-auto flex items-center gap-2 rounded-full border border-white/5 bg-richblack-900/60 px-3 py-1 text-[10px] text-richblack-300">
          <FiLock className="text-[10px]" /> {label}
        </div>
        <div className="w-10" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

function MiniNav({ active = "Home" }) {
  const links = ["Home", "Catalog", "About", "Contact"]
  return (
    <div className="flex items-center justify-between border-b border-white/5 bg-richblack-900/80 px-5 py-3 backdrop-blur">
      <div className="font-display text-sm font-bold text-yellow-25">
        Study<span className="text-white">Notion</span>
      </div>
      <div className="hidden gap-5 text-[10px] text-richblack-200 md:flex">
        {links.map((l) => (
          <span
            key={l}
            className={l === active ? "text-yellow-25" : ""}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-white/10 px-2 py-[2px] text-[9px] text-richblack-200">
          Log in
        </span>
        <span className="rounded-full bg-yellow-50 px-2 py-[2px] text-[9px] font-bold text-richblack-900">
          Sign up
        </span>
      </div>
    </div>
  )
}

function Pill({ children, tone = "yellow" }) {
  const tones = {
    yellow: "border-yellow-50/40 bg-yellow-50/10 text-yellow-25",
    blue: "border-blue-100/40 bg-blue-100/10 text-blue-25",
    green: "border-caribbeangreen-100/40 bg-caribbeangreen-100/10 text-caribbeangreen-25",
    pink: "border-pink-200/40 bg-pink-200/10 text-pink-25",
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-[3px] text-[10px] uppercase tracking-widest ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

/* --------------------------- Screen mocks ------------------------------- */

function ScreenSignup({ role = "Student" }) {
  const src = role === "Student" ? signupImg : loginImg
  return (
    <div>
      <MiniNav active="Sign up" />
      <div className="grid gap-4 p-5 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Pill tone="yellow">Step · Auth</Pill>
          <h4 className="font-display text-xl font-bold leading-tight text-white">
            Join the world of{" "}
            <span className="text-gradient-primary">Coding</span>
          </h4>
          <p className="text-[11px] leading-relaxed text-richblack-300">
            Build skills for today, tomorrow, and beyond. Create your account —
            it takes less than a minute.
          </p>
          <div className="mt-1 flex gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-[10px]">
            <span
              className={`flex-1 rounded-full py-1 text-center ${
                role === "Student"
                  ? "bg-yellow-50 text-richblack-900 font-bold"
                  : "text-richblack-200"
              }`}
            >
              Student
            </span>
            <span
              className={`flex-1 rounded-full py-1 text-center ${
                role === "Instructor"
                  ? "bg-yellow-50 text-richblack-900 font-bold"
                  : "text-richblack-200"
              }`}
            >
              Instructor
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <MockInput label="First Name" value="Alex" />
            <MockInput label="Last Name" value="Rivera" />
          </div>
          <MockInput label="Email address" value="you@studynotion.com" />
          <div className="grid grid-cols-2 gap-2">
            <MockInput label="Password" value="••••••••" />
            <MockInput label="Confirm Password" value="••••••••" />
          </div>
          <button className="mt-1 rounded-lg bg-yellow-50 py-2 text-[11px] font-bold text-richblack-900">
            Create Account
          </button>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <img src={src} alt="signup preview" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

function ScreenHome() {
  return (
    <div>
      <MiniNav active="Home" />
      <div className="relative overflow-hidden p-6">
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-yellow-50/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100/20 blur-3xl" />
        <div className="mx-auto flex flex-col items-center gap-3 text-center">
          <Pill tone="yellow">
            <HiOutlineSparkles /> Become an Instructor
          </Pill>
          <h4 className="font-display text-2xl font-bold leading-[1.05] text-white md:text-3xl">
            Empower Your Future with{" "}
            <span className="font-serif-display italic text-gradient-cool">
              coding skills
            </span>
          </h4>
          <p className="max-w-md text-[11px] leading-relaxed text-richblack-300">
            Learn at your own pace with hands-on projects and mentor feedback.
          </p>
          <div className="mt-1 flex gap-2">
            <span className="rounded-full bg-yellow-50 px-3 py-1 text-[10px] font-bold text-richblack-900">
              Start Learning →
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] text-white">
              ▶ Book a Demo
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 self-stretch">
            {[
              ["10k+", "Learners"],
              ["500+", "Courses"],
              ["4.9/5", "Rating"],
            ].map(([k, v]) => (
              <div
                key={v}
                className="glass rounded-lg p-2 text-center"
              >
                <div className="text-gradient-primary font-display text-sm font-bold">
                  {k}
                </div>
                <div className="text-[8px] uppercase tracking-widest text-richblack-300">
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 h-24 w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src={bannerHero}
              alt="hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenCatalog() {
  const cats = ["Web Dev", "Python", "AI/ML", "Android", "Design", "Data"]
  const cards = [
    { t: "React from Zero", a: "Alex R.", p: "$29", r: 4.9 },
    { t: "Python Mastery", a: "Priya S.", p: "$39", r: 4.8 },
    { t: "System Design 101", a: "Kenji M.", p: "$49", r: 4.9 },
  ]
  return (
    <div>
      <MiniNav active="Catalog" />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-richblack-800/70 px-3 py-2 text-[11px] text-richblack-200">
          <FiSearch />
          <span>Search for “web development”</span>
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {cats.map((c, i) => (
            <span
              key={c}
              className={`rounded-full border px-2 py-[3px] text-[10px] ${
                i === 0
                  ? "border-yellow-50/50 bg-yellow-50/10 text-yellow-25"
                  : "border-white/10 bg-white/5 text-richblack-200"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {cards.map((c) => (
            <div
              key={c.t}
              className="overflow-hidden rounded-xl border border-white/10 bg-richblack-800/60"
            >
              <div className="h-14 bg-gradient-to-br from-yellow-50/40 via-blue-100/30 to-caribbeangreen-100/30" />
              <div className="p-2">
                <div className="font-display text-[10px] font-bold text-white">
                  {c.t}
                </div>
                <div className="text-[8px] text-richblack-300">by {c.a}</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="flex items-center gap-0.5 text-[8px] text-yellow-25">
                    <AiFillStar /> {c.r}
                  </span>
                  <span className="text-[9px] font-bold text-caribbeangreen-100">
                    {c.p}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenCourseDetails() {
  return (
    <div>
      <MiniNav active="Catalog" />
      <div className="grid gap-3 p-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Pill tone="blue">Web Development</Pill>
          <h4 className="mt-2 font-display text-lg font-bold leading-tight text-white">
            Full-Stack React & Node — from{" "}
            <span className="font-serif-display italic text-gradient-cool">
              zero to production
            </span>
          </h4>
          <p className="mt-1 text-[10px] text-richblack-300">
            Learn to design, ship and scale real-world apps with modern tooling.
          </p>
          <div className="mt-2 flex items-center gap-2 text-[10px] text-richblack-200">
            <span className="text-yellow-25">★ 4.9</span>
            <span>· 12,340 learners</span>
            <span>· 18 hours</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              "Section 1 · Intro & setup",
              "Section 2 · React fundamentals",
              "Section 3 · State & Redux",
              "Section 4 · Node & Express APIs",
              "Section 5 · Deploy to production",
            ].map((s, i) => (
              <div
                key={s}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-richblack-800/60 px-2 py-1.5 text-[10px] text-richblack-100"
              >
                <span>{s}</span>
                <span className="text-[9px] text-richblack-400">
                  {6 + i} lectures
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
          <div className="h-16 rounded-lg bg-gradient-to-br from-yellow-50/40 via-pink-200/30 to-blue-100/40" />
          <div className="mt-2 font-display text-lg font-bold text-white">
            $49
          </div>
          <div className="text-[9px] line-through text-richblack-400">$99</div>
          <button className="mt-2 w-full rounded-lg bg-yellow-50 py-1.5 text-[10px] font-bold text-richblack-900">
            Buy Now
          </button>
          <button className="mt-1 w-full rounded-lg border border-white/10 py-1.5 text-[10px] text-white">
            Add to Cart
          </button>
          <div className="mt-2 space-y-1 text-[9px] text-richblack-200">
            <div>✓ 8 hours on-demand video</div>
            <div>✓ Downloadable resources</div>
            <div>✓ Certificate of completion</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenCart() {
  return (
    <div>
      <MiniNav active="Cart" />
      <div className="grid gap-3 p-5 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-richblack-300">
            Your cart · 2 items
          </div>
          {[
            { t: "React from Zero", a: "Alex R.", p: 29 },
            { t: "System Design 101", a: "Kenji M.", p: 49 },
          ].map((c) => (
            <div
              key={c.t}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-richblack-800/60 p-2"
            >
              <div className="h-10 w-14 shrink-0 rounded bg-gradient-to-br from-yellow-50/40 to-blue-100/40" />
              <div className="flex-1">
                <div className="font-display text-[11px] font-bold text-white">
                  {c.t}
                </div>
                <div className="text-[9px] text-richblack-300">by {c.a}</div>
              </div>
              <div className="text-[11px] font-bold text-caribbeangreen-100">
                ${c.p}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
          <div className="font-display text-[11px] font-bold text-white">
            Order Summary
          </div>
          <div className="mt-2 space-y-1 text-[10px] text-richblack-200">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$78</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-caribbeangreen-100">-$8</span>
            </div>
            <div className="mt-1 flex justify-between border-t border-white/10 pt-1 font-bold text-white">
              <span>Total</span>
              <span>$70</span>
            </div>
          </div>
          <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg bg-yellow-50 py-1.5 text-[10px] font-bold text-richblack-900">
            <FiCreditCard /> Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  )
}

function ScreenPlayer() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="grid grid-cols-[1fr_180px] gap-2 p-3">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black">
          <img
            src={bannerLearn}
            alt="video"
            className="h-40 w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-richblack-900">
              ▶
            </div>
          </div>
          <div className="absolute inset-x-3 bottom-2 flex items-center gap-2">
            <div className="h-1 flex-1 rounded-full bg-white/20">
              <div className="h-1 w-1/3 rounded-full bg-yellow-50" />
            </div>
            <span className="text-[9px] text-white">12:04 / 34:20</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="text-[9px] uppercase tracking-widest text-richblack-300">
            Course content
          </div>
          {[
            "1. Introduction",
            "2. JSX basics ✓",
            "3. Components",
            "4. State",
            "5. Effects",
          ].map((s, i) => (
            <div
              key={s}
              className={`rounded-lg border px-2 py-1.5 text-[9px] ${
                i === 2
                  ? "border-yellow-50/50 bg-yellow-50/10 text-yellow-25"
                  : "border-white/5 bg-richblack-800/50 text-richblack-100"
              }`}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenReview() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <Pill tone="pink">
          <FiStar /> Leave a review
        </Pill>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          How was{" "}
          <span className="font-serif-display italic text-gradient-cool">
            React from Zero?
          </span>
        </h4>
        <div className="mt-3 flex items-center gap-1 text-2xl text-yellow-50">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className={i < 5 ? "" : "text-white/20"} />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/10 bg-richblack-800/60 p-3">
          <div className="text-[10px] text-richblack-200">
            "Cleanest React course I've done — projects felt real and the
            instructor is fast to answer. Shipping my portfolio this weekend."
          </div>
          <div className="mt-2 flex justify-end gap-2">
            <button className="rounded-lg border border-white/10 px-2 py-1 text-[10px] text-white">
              Cancel
            </button>
            <button className="rounded-lg bg-yellow-50 px-2 py-1 text-[10px] font-bold text-richblack-900">
              Submit review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenInstructorDashboard() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-richblack-300">
              Hi, Instructor
            </div>
            <h4 className="font-display text-lg font-bold text-white">
              Let's teach something great today.
            </h4>
          </div>
          <button className="rounded-full bg-yellow-50 px-3 py-1 text-[10px] font-bold text-richblack-900">
            + Add Course
          </button>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Total students", "1,204"],
            ["Total income", "$8,340"],
            ["Avg. rating", "4.8"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-white/10 bg-richblack-800/60 p-2"
            >
              <div className="text-[9px] uppercase tracking-widest text-richblack-300">
                {k}
              </div>
              <div className="font-display text-lg font-bold text-white">
                {v}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
            <div className="text-[10px] text-richblack-200">
              Enrollments · last 7 days
            </div>
            <img
              src={progressImg}
              alt="chart"
              className="mt-1 h-16 w-full object-contain"
            />
          </div>
          <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
            <div className="text-[10px] text-richblack-200">
              Top course
            </div>
            <div className="mt-1 font-display text-[11px] font-bold text-white">
              React from Zero
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white/10">
              <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-yellow-50 to-caribbeangreen-100" />
            </div>
            <div className="mt-1 text-[9px] text-richblack-300">
              74% of monthly revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenAddCourse() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2">
          {["Course info", "Course builder", "Publish"].map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <div
                className={`grid h-5 w-5 place-items-center rounded-full text-[9px] font-bold ${
                  i === 0
                    ? "bg-yellow-50 text-richblack-900"
                    : "bg-white/10 text-white"
                }`}
              >
                {i + 1}
              </div>
              <span className="text-[10px] text-richblack-200">{s}</span>
              {i < 2 && <span className="text-white/10">—</span>}
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <MockInput label="Course title" value="Full-Stack React & Node" />
            <MockInput
              label="Short description"
              value="Ship production apps fast."
            />
            <div className="grid grid-cols-2 gap-2">
              <MockInput label="Price ($)" value="49" />
              <MockInput label="Category" value="Web Development" />
            </div>
            <MockInput label="Tags" value="react, node, javascript" />
          </div>
          <div className="rounded-xl border border-dashed border-white/15 bg-richblack-800/40 p-3">
            <div className="grid h-24 place-items-center rounded-lg border border-white/10 bg-richblack-900/40">
              <div className="text-center text-[10px] text-richblack-300">
                <FiUpload className="mx-auto mb-1 text-lg" /> Upload thumbnail
              </div>
            </div>
            <div className="mt-2 text-[10px] text-richblack-300">
              Recommended 1280×720
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenBuilder() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <div className="mb-2 text-[10px] uppercase tracking-widest text-richblack-300">
          Course builder
        </div>
        {[
          { s: "Section 1 · Getting started", n: 4 },
          { s: "Section 2 · Components", n: 6 },
          { s: "Section 3 · State management", n: 5 },
        ].map((sec, i) => (
          <div
            key={sec.s}
            className="mb-2 overflow-hidden rounded-xl border border-white/10 bg-richblack-800/60"
          >
            <div className="flex items-center justify-between bg-white/5 px-3 py-2">
              <span className="font-display text-[11px] font-bold text-white">
                {sec.s}
              </span>
              <span className="text-[9px] text-richblack-200">
                {sec.n} lectures
              </span>
            </div>
            {i === 0 && (
              <div className="divide-y divide-white/5 text-[10px]">
                {[
                  "Intro video · 04:12",
                  "Setting up the environment · 07:33",
                  "Your first component · 09:07",
                  "Recap & quiz · 03:55",
                ].map((r) => (
                  <div
                    key={r}
                    className="flex items-center justify-between px-3 py-1.5 text-richblack-200"
                  >
                    <span className="flex items-center gap-1">
                      <FiVideo /> {r}
                    </span>
                    <FiEdit3 className="text-richblack-400" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="w-full rounded-lg border border-dashed border-white/20 py-2 text-[10px] text-richblack-200">
          + Add a new section
        </button>
      </div>
    </div>
  )
}

function ScreenMyCourses() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <div className="font-display text-[12px] font-bold text-white">
            My Courses
          </div>
          <button className="rounded-full bg-yellow-50 px-3 py-1 text-[10px] font-bold text-richblack-900">
            + Add Course
          </button>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="grid grid-cols-[1.6fr_1fr_1fr_0.6fr] gap-2 border-b border-white/5 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-widest text-richblack-300">
            <span>Course</span>
            <span>Status</span>
            <span>Students</span>
            <span>Rating</span>
          </div>
          {[
            ["React from Zero", "Published", "1,203", "4.9"],
            ["System Design 101", "Draft", "—", "—"],
            ["Node in Depth", "Published", "846", "4.8"],
          ].map(([t, s, st, r]) => (
            <div
              key={t}
              className="grid grid-cols-[1.6fr_1fr_1fr_0.6fr] items-center gap-2 border-b border-white/5 bg-richblack-800/40 px-3 py-2 text-[10px] text-white last:border-b-0"
            >
              <span>{t}</span>
              <span
                className={
                  s === "Published"
                    ? "text-caribbeangreen-100"
                    : "text-yellow-25"
                }
              >
                {s}
              </span>
              <span className="text-richblack-200">{st}</span>
              <span className="text-yellow-25">★ {r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenGrow() {
  return (
    <div>
      <MiniNav active="Dashboard" />
      <div className="p-5">
        <Pill tone="green">
          <FiBarChart2 /> Insights
        </Pill>
        <h4 className="mt-2 font-display text-lg font-bold text-white">
          You're{" "}
          <span className="font-serif-display italic text-gradient-cool">
            growing fast
          </span>
        </h4>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
            <div className="text-[10px] text-richblack-300">
              Enrollments trend
            </div>
            <img
              src={compareImg}
              alt="chart"
              className="mt-1 h-16 w-full object-contain"
            />
          </div>
          <div className="rounded-xl border border-white/10 bg-richblack-800/60 p-3">
            <div className="text-[10px] text-richblack-300">
              Latest reviews
            </div>
            <div className="mt-1 space-y-1 text-[10px] text-richblack-100">
              <div>“Actually shipped a project” — Priya</div>
              <div>“Best React course, hands down.” — Ken</div>
              <div>“Loved the challenges.” — Ana</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockInput({ label, value }) {
  return (
    <label className="block">
      <span className="mb-0.5 block text-[9px] uppercase tracking-widest text-richblack-300">
        {label}
      </span>
      <div className="rounded-md border border-white/10 bg-richblack-800/60 px-2 py-1.5 text-[10px] text-richblack-100">
        {value}
      </div>
    </label>
  )
}

/* ---------------------------- Flow content ------------------------------ */

const STUDENT = [
  {
    tag: "Landing",
    tone: "yellow",
    icon: <HiOutlineSparkles />,
    title: "Land on the Homepage",
    caption:
      "You arrive at StudyNotion — a bold hero, aurora blobs, animated stats and a live product video. One tap on Sign up starts your journey.",
    bullets: [
      "GSAP-powered kinetic hero",
      "Trust stats + product demo video",
      "Quick CTA to onboarding",
    ],
    Screen: ScreenHome,
    label: "studynotion.com",
  },
  {
    tag: "Auth",
    tone: "yellow",
    icon: <FiUser />,
    title: "Sign up as a Student",
    caption:
      "Land on StudyNotion, tap Sign up, pick the Student role and verify your email with the OTP flow. You're in.",
    bullets: [
      "Role toggle · Student or Instructor",
      "OTP-based email verification",
      "Redux-managed auth session",
    ],
    Screen: () => <ScreenSignup role="Student" />,
    label: "studynotion.com/signup",
  },
  {
    tag: "Discover",
    tone: "blue",
    icon: <FiSearch />,
    title: "Explore the Catalog",
    caption:
      "Browse handpicked categories with search, filters and gorgeous course cards. Everything is one tap away.",
    bullets: [
      "Category filters · Web, AI, Android…",
      "Ratings, price and duration on every card",
      "Powered by real backend data",
    ],
    Screen: ScreenCatalog,
    label: "studynotion.com/catalog/web-development",
  },
  {
    tag: "Course Page",
    tone: "blue",
    icon: <FiLayers />,
    title: "Open a Course",
    caption:
      "Deep dive into syllabus, instructor bio, previews and pricing — with a sticky enroll card that follows as you scroll.",
    bullets: [
      "Curriculum accordion with lecture counts",
      "Real-time reviews & ratings",
      "Add to Cart or Buy Now — instantly",
    ],
    Screen: ScreenCourseDetails,
    label: "studynotion.com/courses/react-from-zero",
  },
  {
    tag: "Payments",
    tone: "green",
    icon: <FiShoppingCart />,
    title: "Cart & Razorpay Checkout",
    caption:
      "Add multiple courses to your cart or wishlist. Checkout via Razorpay — courses auto-enroll on payment success.",
    bullets: [
      "Cart + wishlist syncing",
      "Razorpay integration",
      "Automatic enrollment + email receipt",
    ],
    Screen: ScreenCart,
    label: "studynotion.com/dashboard/cart",
  },
  {
    tag: "Learn",
    tone: "yellow",
    icon: <FiVideo />,
    title: "Learn from your Dashboard",
    caption:
      "Watch videos, track progress lecture-by-lecture, and continue right where you left off. Built for focus.",
    bullets: [
      "Video-react player with sub-section navigation",
      "Progress persisted per user",
      "Mark complete → live progress bars",
    ],
    Screen: ScreenPlayer,
    label: "view-course/react-from-zero/section/1/sub-section/2",
  },
  {
    tag: "Community",
    tone: "pink",
    icon: <FiStar />,
    title: "Rate & Review",
    caption:
      "Drop a star rating and a short review. Your feedback helps future learners pick the right course.",
    bullets: [
      "5-star rating + review body",
      "Reviews power course ranking",
      "Edit profile & settings any time",
    ],
    Screen: ScreenReview,
    label: "studynotion.com/dashboard/my-profile",
  },
]

const INSTRUCTOR = [
  {
    tag: "Auth",
    tone: "yellow",
    icon: <FiUser />,
    title: "Sign up as an Instructor",
    caption:
      "Pick the Instructor role during sign-up, add a bio and avatar — you're ready to teach.",
    bullets: [
      "Role-aware onboarding",
      "Profile with expertise + socials",
      "Instant switch to instructor dashboard",
    ],
    Screen: () => <ScreenSignup role="Instructor" />,
    label: "studynotion.com/signup",
  },
  {
    tag: "Insights",
    tone: "green",
    icon: <FiBarChart2 />,
    title: "Instructor Dashboard",
    caption:
      "See total students, income and top course at a glance with Chart.js-powered insights.",
    bullets: [
      "KPI tiles · students, income, rating",
      "Enrollment trend chart",
      "Top course revenue share",
    ],
    Screen: ScreenInstructorDashboard,
    label: "studynotion.com/dashboard/instructor",
  },
  {
    tag: "Authoring",
    tone: "blue",
    icon: <FiEdit3 />,
    title: "Add a Course · Step 1",
    caption:
      "Fill in course info — title, description, price, category, tags and a thumbnail via Cloudinary.",
    bullets: [
      "Three-step wizard",
      "Cloudinary uploads",
      "Draft + Publish states",
    ],
    Screen: ScreenAddCourse,
    label: "studynotion.com/dashboard/add-course",
  },
  {
    tag: "Content",
    tone: "blue",
    icon: <FiVideo />,
    title: "Course Builder · Step 2",
    caption:
      "Organise your course into sections and sub-sections (lectures) with video, description and quizzes.",
    bullets: [
      "Sections + sub-sections",
      "Video hosting via Cloudinary",
      "Reorder & edit lectures",
    ],
    Screen: ScreenBuilder,
    label: "studynotion.com/dashboard/add-course",
  },
  {
    tag: "Manage",
    tone: "yellow",
    icon: <FiList />,
    title: "My Courses",
    caption:
      "Manage all your courses from a single table — edit, toggle draft/published, or delete.",
    bullets: [
      "Published + Draft badges",
      "Student counts & ratings",
      "Edit or delete in one click",
    ],
    Screen: ScreenMyCourses,
    label: "studynotion.com/dashboard/my-courses",
  },
  {
    tag: "Grow",
    tone: "green",
    icon: <FiBarChart2 />,
    title: "Track & Grow",
    caption:
      "Watch reviews flow in, enrollments climb, and iterate on the courses that convert best.",
    bullets: [
      "Live reviews stream",
      "Enrollment trend chart",
      "Iterate on winning courses",
    ],
    Screen: ScreenGrow,
    label: "studynotion.com/dashboard/instructor",
  },
]

/* --------------------------- Main component ----------------------------- */

export default function FlowExplainer() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState("student")
  const [idx, setIdx] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const steps = useMemo(
    () => (tab === "student" ? STUDENT : INSTRUCTOR),
    [tab]
  )

  const panelRef = useRef(null)
  const overlayRef = useRef(null)
  const btnRef = useRef(null)
  const stageRef = useRef(null)
  const copyRef = useRef(null)

  /* floating trigger */
  useEffect(() => {
    if (!btnRef.current) return
    gsap.fromTo(
      btnRef.current,
      { y: 40, opacity: 0, scale: 0.7 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.6)",
        delay: 1.2,
      }
    )
    const t = gsap.to(btnRef.current, {
      y: -6,
      repeat: -1,
      yoyo: true,
      duration: 2.2,
      ease: "sine.inOut",
    })
    return () => t.kill()
  }, [])

  /* open/close */
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      )
      gsap.fromTo(
        panelRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" }
      )
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  /* transition between steps */
  useEffect(() => {
    if (!open) return
    if (stageRef.current) {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      )
    }
    if (copyRef.current) {
      gsap.fromTo(
        copyRef.current.querySelectorAll(".copy-item"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
        }
      )
    }
  }, [idx, tab, open])

  /* autoplay */
  useEffect(() => {
    if (!open || !autoplay) return
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % steps.length)
    }, 5200)
    return () => clearTimeout(t)
  }, [idx, autoplay, open, steps.length])

  /* keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight")
        setIdx((i) => (i + 1) % steps.length)
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + steps.length) % steps.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, steps.length])

  const step = steps[idx]
  const Screen = step.Screen

  const switchTab = useCallback((t) => {
    setTab(t)
    setIdx(0)
  }, [])

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen(true)}
        aria-label="See the full project flow"
        className="fixed bottom-6 right-6 z-[80] flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 px-5 py-3 font-display text-sm font-bold text-richblack-900 shadow-[0_10px_40px_-10px_rgba(255,214,10,0.7)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(255,214,10,0.9)]"
      >
        <HiOutlineSparkles className="text-lg" />
        See the Flow
      </button>

      {open &&
        createPortal(
          <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <div
              ref={panelRef}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="glass-strong relative flex max-h-[92vh] w-full max-w-[1200px] flex-col overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* ambient blobs */}
              <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-yellow-50/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-100/15 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4 border-b border-white/5 p-5 md:p-6">
                <div>
                  <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-yellow-25">
                    <HiOutlineSparkles /> Project walkthrough
                  </div>
                  <h2 className="font-display text-2xl font-bold leading-tight text-richblack-5 md:text-3xl">
                    How{" "}
                    <span className="font-serif-display italic text-gradient-primary">
                      StudyNotion
                    </span>{" "}
                    works — end to end
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoplay((a) => !a)}
                    className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-richblack-100 transition hover:bg-white/10"
                    aria-label="Toggle autoplay"
                  >
                    {autoplay ? <HiOutlinePause /> : <HiOutlinePlay />}
                    {autoplay ? "Pause" : "Autoplay"}
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-richblack-100 transition hover:bg-white/10 hover:text-white"
                    aria-label="Close"
                  >
                    <FiX />
                  </button>
                </div>
              </div>

              {/* Tab switch */}
              <div className="relative flex items-center gap-2 border-b border-white/5 px-5 pt-3 md:px-6">
                <TabButton
                  active={tab === "student"}
                  onClick={() => switchTab("student")}
                  icon={<HiOutlineAcademicCap />}
                  label="Student journey"
                />
                <TabButton
                  active={tab === "instructor"}
                  onClick={() => switchTab("instructor")}
                  icon={<HiOutlineUserGroup />}
                  label="Instructor journey"
                />
                <div className="ml-auto text-[11px] text-richblack-300">
                  {String(idx + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </div>
              </div>

              {/* Body */}
              <div className="relative grid flex-1 overflow-hidden md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                {/* Copy */}
                <div
                  ref={copyRef}
                  className="flex flex-col justify-between overflow-y-auto p-5 md:p-8"
                >
                  <div className="space-y-4">
                    <div className="copy-item flex items-center gap-3">
                      <div className="font-serif-display text-6xl font-bold leading-none text-gradient-primary md:text-7xl">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <Pill tone={step.tone}>
                          <span className="text-sm">{step.icon}</span> {step.tag}
                        </Pill>
                        <div className="mt-1 text-[10px] uppercase tracking-widest text-richblack-400">
                          {tab === "student" ? "Student" : "Instructor"} · Step {idx + 1}
                        </div>
                      </div>
                    </div>
                    <h3 className="copy-item font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="copy-item max-w-md text-sm leading-relaxed text-richblack-200 md:text-base">
                      {step.caption}
                    </p>
                    <ul className="copy-item space-y-2 pt-1">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-richblack-100"
                        >
                          <FiCheckCircle className="mt-0.5 shrink-0 text-caribbeangreen-100" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step nav */}
                  <div className="copy-item mt-6 flex items-center gap-3">
                    <button
                      onClick={() =>
                        setIdx((i) => (i - 1 + steps.length) % steps.length)
                      }
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                      aria-label="Previous step"
                    >
                      <FiArrowLeft />
                    </button>
                    <button
                      onClick={() => setIdx((i) => (i + 1) % steps.length)}
                      className="group inline-flex items-center gap-2 rounded-full bg-yellow-50 px-5 py-2.5 font-display text-sm font-bold text-richblack-900 shadow-[0_10px_30px_-10px_rgba(255,214,10,0.7)] transition hover:scale-[1.03]"
                    >
                      Next step
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <div className="ml-auto flex gap-1.5">
                      {steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIdx(i)}
                          aria-label={`Go to step ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === idx
                              ? "w-8 bg-yellow-50"
                              : "w-3 bg-white/15 hover:bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage */}
                <div className="relative flex items-center justify-center overflow-hidden border-t border-white/5 bg-gradient-to-br from-richblack-900 via-richblack-800/50 to-richblack-900 p-5 md:border-l md:border-t-0 md:p-8">
                  <div className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-yellow-50/10 blur-3xl" />
                  <div className="pointer-events-none absolute bottom-10 -left-16 h-40 w-40 rounded-full bg-caribbeangreen-100/10 blur-3xl" />
                  <div
                    ref={stageRef}
                    className="w-full max-w-2xl"
                    key={`${tab}-${idx}`}
                  >
                    <BrowserFrame label={step.label}>
                      <Screen />
                    </BrowserFrame>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-richblack-300">
                      <span className="inline-flex items-center gap-1">
                        <HiOutlineSparkles className="text-yellow-25" />{" "}
                        Interactive preview
                      </span>
                      <span>← → to navigate · Esc to close</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 rounded-t-xl px-4 py-2.5 font-display text-sm font-semibold transition-all ${
        active ? "text-yellow-25" : "text-richblack-200 hover:text-richblack-5"
      }`}
    >
      <span className="text-base">{icon}</span>
      {label}
      {active && (
        <span className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-yellow-50 via-yellow-100 to-caribbeangreen-100" />
      )}
    </button>
  )
}
