"use client";

import AppLayout from "@/components/layout/AppLayout";

const opportunities = [
  {
    company: "Microsoft Explore",
    days: 58,
    readiness: 72,
    strengths: ["Resume", "Projects"],
    missing: ["DSA"],
  },
  {
    company: "Amazon SDE",
    days: 72,
    readiness: 61,
    strengths: ["Projects"],
    missing: ["Internship", "Leadership"],
  },
  {
    company: "Google STEP",
    days: 89,
    readiness: 48,
    strengths: ["Academics"],
    missing: ["DSA", "Internship", "Resume"],
  },
];

export default function OpportunityRadar() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Opportunity Radar
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        AI tracks hiring cycles and recommends your best opportunities.
      </p>

      {/* Hero */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-10 border border-blue-500/30">

        <p className="text-gray-400 text-xl">
          🔥 Best Opportunity
        </p>

        <h2 className="text-white text-5xl font-bold mt-3">
          Microsoft Explore
        </h2>

        <div className="grid grid-cols-3 mt-10">

          <div>

            <p className="text-gray-400">
              Opens In
            </p>

            <h3 className="text-white text-5xl font-bold mt-2">
              58 Days
            </h3>

          </div>

          <div>

            <p className="text-gray-400">
              Readiness
            </p>

            <h3 className="text-green-400 text-5xl font-bold mt-2">
              72%
            </h3>

          </div>

          <div>

            <p className="text-gray-400">
              Apply Confidence
            </p>

            <h3 className="text-yellow-400 text-5xl font-bold mt-2">
              ★★★★☆
            </h3>

          </div>

        </div>

      </div>

      {/* Opportunity Cards */}

      <div className="mt-12 space-y-8">

        {opportunities.map((job, index) => (

          <div
            key={index}
            className="bg-[#121A36] rounded-3xl p-8 hover:scale-[1.01] transition-all duration-300"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-white text-4xl font-bold">
                  {job.company}
                </h2>

                <p className="text-gray-400 mt-3">
                  Opens in {job.days} Days
                </p>

              </div>

              <div className="text-right">

                <p className="text-green-400 text-5xl font-bold">
                  {job.readiness}%
                </p>

                <p className="text-gray-400">
                  Match Score
                </p>

              </div>

            </div>

            <div className="w-full bg-[#0B1228] h-4 rounded-full mt-8">

              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{
                  width: `${job.readiness}%`,
                }}
              />

            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">

              <div>

                <p className="text-green-400 text-xl font-semibold">
                  ✓ Strengths
                </p>

                <div className="space-y-3 mt-4">

                  {job.strengths.map((item) => (

                    <div
                      key={item}
                      className="bg-[#0B1228] p-4 rounded-xl text-white"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              <div>

                <p className="text-red-400 text-xl font-semibold">
                  ⚠ Missing
                </p>

                <div className="space-y-3 mt-4">

                  {job.missing.map((item) => (

                    <div
                      key={item}
                      className="bg-[#0B1228] p-4 rounded-xl text-white"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* AI Insight */}

      <div className="mt-10 bg-[#121A36] rounded-3xl p-10 border border-purple-500/30">

        <h2 className="text-white text-4xl font-bold">
          🤖 AI Market Insight
        </h2>

        <p className="text-gray-300 text-2xl mt-8 leading-relaxed">
          Current hiring trends suggest that internship experience and
          strong DSA skills have the highest influence on interview
          shortlisting. Focus on practical experience over adding more
          certifications to maximize your chances.
        </p>

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Opportunities
          </p>

          <h2 className="text-white text-5xl font-bold mt-4">
            3
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Average Match
          </p>

          <h2 className="text-green-400 text-5xl font-bold mt-4">
            60%
          </h2>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Highest Match
          </p>

          <h2 className="text-blue-400 text-5xl font-bold mt-4">
            Microsoft
          </h2>

        </div>

      </div>

    </AppLayout>
  );
}