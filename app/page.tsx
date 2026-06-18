"use client";

import AppLayout from "@/components/layout/AppLayout"
import Link from "next/link"
import { generateCareerPath } from "@/lib/careerGPS"
import { generateAnalysis } from "@/lib/explainer"
import { recruiterVerdict } from "@/lib/recruiter"
import { companyMap } from "../constants/companyMap"
import { companies } from "../constants/companies"
import { useState } from "react"
import { calculateCompanyReadiness } from "@/lib/ncim"
import { getRecommendations } from "@/lib/recommendations"
import { microsoftWeights } from "../constants/companyWeights"
export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState("Microsoft")
  const student = {
  projects: 85,
  dsa: 70,
  technicalSkills: 80,
  internship: 40,
  academics: 90,
  leadership: 60,
  professionalProfile: 75,
}

const currentWeights =
  companyMap[selectedCompany as keyof typeof companyMap]

const companyScore = calculateCompanyReadiness(
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
          Good Evening, Varshit.
        </h1>

        <p className="text-gray-400 mt-2 text-xl">
          You're closer to {selectedCompany} than you think.
        </p>
        <div className="flex gap-3 mt-6">

  {companies.map((company) => (

    <button
      key={company}
      onClick={() => setSelectedCompany(company)}
      className={`px-5 py-2 rounded-xl transition-all duration-300 ${
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

    <h3 className="text-white text-4xl font-bold">
      {topRecommendation.task}
    </h3>

  </div>

</div>
<div className="grid grid-cols-2 gap-6 mt-8">

  <div className="bg-[#121A36] rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

    <h2 className="text-gray-300 text-3xl text-center">
      Career Identity
    </h2>

    <div className="mt-8 space-y-8">

      <div>
        <p className="text-white text-3xl font-bold">Builder</p>
        <p className="text-white text-2xl">84</p>
      </div>

      <div>
        <p className="text-white text-3xl font-bold">Researcher</p>
        <p className="text-white text-2xl">61</p>
      </div>

      <div>
        <p className="text-white text-3xl font-bold">Leader</p>
        <p className="text-white text-2xl">58</p>
      </div>

    </div>

  </div>

  <div className="bg-[#121A36] rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

    <h2 className="text-gray-300 text-3xl">
      🎯 Today's Mission
    </h2>

    <h3 className="text-white text-4xl font-bold mt-8">
      {topRecommendation.task}
    </h3>

    <p className="text-white text-xl mt-4">
      Highest impact improvement for your profile
    </p>

    <p className="text-gray-400 text-xl mt-8">
      Expected Readiness Gain
    </p>

    <p className="text-white text-3xl font-bold mt-2">
      +{topRecommendation.gain}% {selectedCompany} Readiness
    </p>

    <button className="mt-8 bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40">
      Improve Now
    </button>

  </div>
  <div className="bg-[#121A36] rounded-3xl p-8 mt-8">

  <h2 className="text-3xl text-white font-bold">
    🧠 AI Analysis
  </h2>

  <p className="text-gray-400 mt-6">
    Biggest Weakness
  </p>

  <h3 className="text-5xl font-bold text-red-400 mt-2">
    {weakestArea.title}
  </h3>

  <p className="text-gray-400 mt-8">
    Current Score
  </p>

  <p className="text-white text-3xl">
    {weakestArea.score}/100
  </p>

  <p className="text-gray-400 mt-8">
    Company Weight
  </p>

  <p className="text-white text-3xl">
    {weakestArea.weight}%
  </p>

  <div className="mt-8 border-t border-gray-700 pt-6">

    <p className="text-green-400 text-xl">
      Improving this area will have the highest impact on your readiness score.
    </p>

  </div>

</div>

</div>
<div className="grid grid-cols-2 gap-6 mt-8">

  <div className="bg-[#121A36] rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

    <h2 className="text-gray-300 text-3xl text-center">
  {selectedCompany} Recruiter
</h2>

<div className="mt-8 space-y-4">

  <p className="text-gray-400">
    Decision
  </p>

  <p className="text-white text-4xl font-bold">
    {recruiter.decision}
  </p>

  <p className="text-gray-400 mt-6">
    Interview Chance
  </p>

  <p className="text-white text-3xl">
    {recruiter.chance}%
  </p>

  <p className="text-gray-400 mt-6">
    Recruiter Feedback
  </p>

  <p className="text-white text-xl leading-relaxed">
    {recruiter.feedback}
  </p>

</div>

  </div>

  <div className="bg-[#121A36] rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

    <h2 className="text-gray-300 text-3xl text-center">
      Upcoming Opportunities
    </h2>

    <div className="mt-8 space-y-6">

      <div>
        <p className="text-gray-400">Microsoft Explore</p>
        <p className="text-white text-3xl font-bold">58 Days</p>
      </div>

      <hr className="border-gray-700" />

      <div>
        <p className="text-gray-400">Amazon SDE</p>
        <p className="text-white text-3xl font-bold">72 Days</p>
      </div>

      <hr className="border-gray-700" />

      <div>
        <p className="text-gray-400">Google STEP</p>
        <p className="text-white text-3xl font-bold">89 Days</p>
      </div>

    </div>

  </div>

</div>
<div className="bg-[#121A36] rounded-3xl p-8 mt-8">

  <h2 className="text-white text-4xl font-bold">
    🧭 Career GPS
  </h2>

  <p className="text-gray-400 mt-2">
    AI-generated roadmap to maximize your career readiness
  </p>

  <div className="mt-8 space-y-6">

    {roadmap.map((step: any, index: number) => (

      <div
        key={index}
        className="flex justify-between items-center border-b border-gray-700 pb-5"
      >

        <div>

          <p className="text-white text-2xl font-semibold">
            {index + 1}. {step.task}
          </p>

        </div>

        <div>

          <p className="text-green-400 text-2xl font-bold">
            +{step.gain}%
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

    </AppLayout>
  )
}