"use client";

import AppLayout from "@/components/layout/AppLayout";
import { recruiterVerdict } from "@/lib/recruiter";

export default function RecruiterPage() {
  const recruiter = recruiterVerdict(
    58,
    "Microsoft",
    "Internship"
  );

  return (
    <AppLayout>
      <section className="flex-1 p-12 overflow-y-auto">

        <h1 className="text-white text-6xl font-bold">
          Recruiter Simulator
        </h1>

        <p className="text-gray-400 text-xl mt-2">
          See your profile through a recruiter's perspective.
        </p>

        {/* Verdict Card */}

        <div className="mt-8 rounded-3xl border border-blue-500/60 bg-[#121A36] p-10 flex justify-between items-center">

          <div>

            <p className="text-gray-400 text-2xl">
              Recruiter Verdict
            </p>

            <h2 className="text-yellow-400 text-7xl font-bold mt-3">
              {recruiter.decision}
            </h2>

            <p className="text-gray-300 text-2xl mt-5">
              Your profile is promising but needs improvement.
            </p>

          </div>

          <div className="text-right">

            <p className="text-gray-400 text-2xl">
              Interview Chance
            </p>

            <h2 className="text-white text-7xl font-bold mt-3">
              {recruiter.chance}%
            </h2>

          </div>

        </div>
        <div className="mt-8 bg-[#121A36] rounded-3xl p-8 border border-green-500/30">

  <h2 className="text-white text-4xl font-bold">
    🎯 Recruiter Scorecard
  </h2>

  <div className="grid grid-cols-4 gap-6 mt-8">

    <div>
      <p className="text-gray-400">Resume</p>
      <h2 className="text-green-400 text-4xl font-bold mt-2">82</h2>
    </div>

    <div>
      <p className="text-gray-400">Projects</p>
      <h2 className="text-blue-400 text-4xl font-bold mt-2">88</h2>
    </div>

    <div>
      <p className="text-gray-400">DSA</p>
      <h2 className="text-yellow-400 text-4xl font-bold mt-2">71</h2>
    </div>

    <div>
      <p className="text-gray-400">Culture Fit</p>
      <h2 className="text-purple-400 text-4xl font-bold mt-2">91</h2>
    </div>

  </div>

</div>

        {/* AI Feedback */}

        <div className="mt-8 bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            🤖 AI Recruiter Feedback
          </h2>
          <p className="text-cyan-400 mt-3">
  Generated from your profile using our recruiter simulation engine.
</p>

          <p className="text-gray-400 mt-3 text-lg">
            Based on your profile and current hiring trends, here is what a recruiter would think.
          </p>

          <div className="mt-8 bg-[#0E1530] rounded-2xl p-8 border border-gray-700">

            <p className="text-white text-2xl leading-10">
              {recruiter.feedback}
            </p>

          </div>

        </div>

        {/* Strengths vs Concerns */}

        <div className="grid grid-cols-2 gap-6 mt-8">

          <div className="bg-[#121A36] rounded-3xl p-8">

            <h2 className="text-green-400 text-3xl font-bold">
              ✅ Strengths
            </h2>

            <div className="mt-6 space-y-4">

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                Strong Academic Performance
              </div>

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                Good Technical Skills
              </div>

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                Active Project Portfolio
              </div>
              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
  Strong Learning Consistency
</div>

            </div>

          </div>

          <div className="bg-[#121A36] rounded-3xl p-8">

            <h2 className="text-red-400 text-3xl font-bold">
              ⚠️ Concerns
            </h2>

            <div className="mt-6 space-y-4">

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                No Internship Experience
              </div>

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                DSA Needs Improvement
              </div>

              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
                Leadership Exposure is Limited
              </div>
              <div className="bg-[#0E1530] rounded-xl p-4 text-white text-xl">
  Backend Development Experience Missing
</div>

            </div>

          </div>

        </div>

        {/* Hiring Probability */}
        <div className="mt-8 bg-[#121A36] rounded-3xl p-8 border border-yellow-500/30">

  <h2 className="text-white text-4xl font-bold">
    💡 Recruiter's Recommendation
  </h2>

  <p className="text-gray-300 text-2xl mt-8 leading-10">

    If this candidate completes one software internship and strengthens
    backend development skills, they would become highly competitive
    for Microsoft internship and new graduate hiring pipelines.

  </p>

</div>

        <div className="mt-8 bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            📊 Hiring Probability
          </h2>

          <div className="mt-8">

            <div className="w-full h-5 bg-[#0E1530] rounded-full overflow-hidden">

              <div
  className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full transition-all duration-700"
                style={{ width: `${recruiter.chance}%` }}
              />

            </div>

            <div className="flex justify-between mt-4 text-gray-400 text-lg">

              <span>Rejected</span>

              <span>Borderline</span>

              <span>Interview</span>

              <span>Selected</span>

            </div>

          </div>

        </div>

      </section>
    </AppLayout>
  );
}