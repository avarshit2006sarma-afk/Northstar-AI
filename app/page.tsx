"use client";

import { getReadiness } from "@/lib/careerEngine"
import { getScoreBreakdown } from "@/lib/careerEngine"
import AppLayout from "@/components/layout/AppLayout"
import { student } from "../constants/student"
import { generateCareerPath } from "@/lib/careerGPS"
import { generateAnalysis } from "@/lib/explainer"
import { recruiterVerdict } from "@/lib/recruiter"
import { companyMap } from "../constants/companyMap"
import { companies } from "../constants/companies"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { getRecommendations } from "@/lib/recommendations"
export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState("Microsoft")

  const router = useRouter()
  const hour = new Date().getHours()

const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 18
    ? "Good Afternoon"
    : "Good Evening"

const currentWeights =
  companyMap[selectedCompany as keyof typeof companyMap]

const companyScore = getReadiness(
  student,
  currentWeights
)
const scoreBreakdown = getScoreBreakdown(
  student,
  currentWeights
)
const weakestArea = generateAnalysis(
  student,
  currentWeights
)
const recruiter = recruiterVerdict(
  companyScore,
  selectedCompany,
  weakestArea.title
)
const recommendations = getRecommendations(student)

const topRecommendation = recommendations[0]
const roadmap = generateCareerPath(student)
const potentialScore = companyScore + topRecommendation.gain
  return (
    <AppLayout>

        <h1 className="text-white text-6xl font-bold">
          {greeting}, Varshit.
        </h1>

        <p className="text-gray-400 mt-2 text-xl">
          You're closer to {selectedCompany} than you think.
        </p>
        <div className="flex gap-3 mt-6">

  {companies.map((company) => (

    <button
      key={company}
      onClick={() => setSelectedCompany(company)}
      className={`px-5 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
        selectedCompany === company
          ? "bg-blue-500 text-white"
          : "bg-[#121A36] text-gray-400 hover:text-white"
      }`}
    >
      {company}
    </button>

  ))}

</div>
        <div className="mt-8 rounded-3xl border border-blue-500/60 bg-[#121A36] overflow-hidden shadow-xl shadow-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20">

  <div className="grid grid-cols-3 px-8 py-6">

    <div>
      <p className="text-gray-400 text-lg">
        Dream Company
      </p>

      <h2 className="text-white text-6xl font-bold mt-2">
        {selectedCompany}
      </h2>
    </div>

    <div className="text-center">
  <p className="text-gray-400 text-lg">
    Current {selectedCompany} Readiness
  </p>

  <h2 className="text-white text-5xl font-bold mt-2">
    {Math.round(companyScore)}%
  </h2>

  <p className="text-green-400 text-lg mt-2">
    Potential → {Math.round(potentialScore)}%
  </p>
  <div className="w-full bg-[#0B1228] h-3 rounded-full mt-6">

  <div
    className="bg-blue-500 h-3 rounded-full transition-all duration-700"
    style={{ width: `${companyScore}%` }}
  />

</div>

</div>

    <div className="text-right">
      <p className="text-gray-400 text-lg">
        This Week
      </p>

      <h2 className="text-white text-6xl font-bold mt-2">
        +4
      </h2>
    </div>

  </div>

  <div className="border-t border-gray-700 px-8 py-5 flex justify-between">

    <h3 className="text-white text-4xl font-bold">
      Highest Impact Upgrade
    </h3>

    <h3
  onClick={() => router.push("/ai-coach")}
  className="text-white text-4xl font-bold cursor-pointer hover:text-blue-400 transition-all"
>
  {topRecommendation.task}
</h3>

  </div>

</div>
<div className="grid grid-cols-2 gap-6 mt-8">

  {/* Today's Mission */}

  <div className="bg-[#121A36] rounded-3xl p-8">

    <h2 className="text-gray-300 text-3xl">
      🎯 Today's Mission
    </h2>

    <h3 className="text-white text-4xl font-bold mt-8">
      {topRecommendation.task}
    </h3>

    <p className="text-gray-400 mt-4">
      Highest impact improvement for your profile.
    </p>

    <p className="text-green-400 text-3xl font-bold mt-8">
  +{topRecommendation.gain}% {selectedCompany} Readiness
</p>

<div className="mt-6 space-y-2">

  <p className="text-gray-400">
    ⏱ Estimated Time
  </p>

  <p className="text-green-400 font-bold text-xl">
  4 Weeks
</p>

  <p className="text-gray-400 mt-3">
    🔥 Priority
  </p>

  <p className="text-red-400 font-bold text-xl">
  🔥 High
</p>

</div>

<button
  onClick={() => router.push("/ai-coach")}
  className="mt-8 bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-2xl text-white transition-all duration-300 hover:scale-105"
>
  Improve Now →
</button>

  </div>

  {/* AI Analysis */}

  <div className="bg-[#121A36] rounded-3xl p-8">

    <h2 className="text-white text-3xl font-bold">
      🧠 AI Analysis
    </h2>

    <p className="text-gray-400 mt-6">
      Biggest Weakness
    </p>

    <h3 className="text-red-400 text-5xl font-bold mt-2">
      {weakestArea.title}
    </h3>

    <p className="text-gray-400 mt-8">
      Current Score
    </p>

    <p className="text-white text-3xl">
      {weakestArea.score}/100
    </p>
    <div className="w-full bg-[#0B1228] rounded-full h-3 mt-4">

  <div
    className="bg-red-500 h-3 rounded-full"
    style={{ width: `${weakestArea.score}%` }}
  />

</div>

    <p className="text-gray-400 mt-8">
      Company Weight
    </p>

    <p className="text-white text-3xl">
      {weakestArea.weight}%
    </p>

  </div>

</div>

{/* Upcoming Opportunities */}

<div className="bg-[#121A36] rounded-3xl p-8 mt-8">

  <h2 className="text-white text-3xl font-bold">
    🚀 Upcoming Opportunities
  </h2>
  <div className="mt-8 space-y-5">

  <div className="flex justify-between border-b border-gray-700 pb-3">

    <span className="text-gray-300">
      Microsoft Explore
    </span>

    <span className="text-white font-bold">
      58 Days
    </span>

  </div>

  <div className="flex justify-between border-b border-gray-700 pb-3">

    <span className="text-gray-300">
      Amazon SDE
    </span>

    <span className="text-white font-bold">
      72 Days
    </span>

  </div>

  <div className="flex justify-between">

    <span className="text-gray-300">
      Google STEP
    </span>

    <span className="text-white font-bold">
      89 Days
    </span>

  </div>
  </div>

</div>
<div className="mt-14">

  <h2 className="text-white text-3xl font-bold mb-6">
    ⚡ Quick Access
  </h2>

  <div className="grid grid-cols-3 gap-6">

    <button
      onClick={() => router.push("/career-identity")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">🏗</p>
      <p className="text-white text-xl font-bold mt-3">
        Career Identity
      </p>
    </button>

    <button
      onClick={() => router.push("/recruiter")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">🎤</p>
      <p className="text-white text-xl font-bold mt-3">
        Recruiter Simulator
      </p>
    </button>

    <button
      onClick={() => router.push("/career-gps")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">🧭</p>
      <p className="text-white text-xl font-bold mt-3">
        Career GPS
      </p>
    </button>

    <button
      onClick={() => router.push("/opportunity-radar")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">🎯</p>
      <p className="text-white text-xl font-bold mt-3">
        Opportunity Radar
      </p>
    </button>

    <button
      onClick={() => router.push("/ai-coach")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">🤖</p>
      <p className="text-white text-xl font-bold mt-3">
        AI Coach
      </p>
    </button>

    <button
      onClick={() => router.push("/progress")}
      className="bg-[#121A36] rounded-2xl p-6 h-36 hover:bg-blue-500 transition-all duration-300 hover:scale-105 text-left"
    >
      <p className="text-4xl">📈</p>
      <p className="text-white text-xl font-bold mt-3">
        Progress
      </p>
    </button>

  </div>

</div>

   </AppLayout>
  );
}