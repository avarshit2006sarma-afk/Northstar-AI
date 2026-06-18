"use client";

import AppLayout from "@/components/layout/AppLayout";

export default function Progress() {
  return (
    <AppLayout>

      <h1 className="text-white text-6xl font-bold">
        Progress
      </h1>

      <p className="text-gray-400 text-xl mt-2">
        Track your journey towards your dream company.
      </p>

      {/* Top Stats */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Overall Readiness
          </p>

          <h2 className="text-green-400 text-6xl font-bold mt-3">
            72%
          </h2>

          <p className="text-green-400 mt-2">
            +8% this month
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Weekly Streak
          </p>

          <h2 className="text-white text-6xl font-bold mt-3">
            🔥18
          </h2>

          <p className="text-green-400 mt-2">
            Keep going!
          </p>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <p className="text-gray-400">
            Tasks Completed
          </p>

          <h2 className="text-blue-400 text-6xl font-bold mt-3">
            43/50
          </h2>

          <p className="text-gray-400 mt-2">
            86% Complete
          </p>

        </div>

      </div>

      {/* Timeline */}

      <div className="bg-[#121A36] rounded-3xl p-8 mt-8">

        <h2 className="text-white text-4xl font-bold">
          📈 Career Growth Timeline
        </h2>

        <div className="space-y-6 mt-8">

          <div>
            <p className="text-white">January</p>
            <div className="w-40 h-3 bg-blue-500 rounded-full mt-2"></div>
          </div>

          <div>
            <p className="text-white">February</p>
            <div className="w-64 h-3 bg-blue-500 rounded-full mt-2"></div>
          </div>

          <div>
            <p className="text-white">March</p>
            <div className="w-80 h-3 bg-blue-500 rounded-full mt-2"></div>
          </div>

          <div>
            <p className="text-white">April</p>
            <div className="w-full h-3 bg-blue-500 rounded-full mt-2"></div>
          </div>

        </div>

      </div>

      {/* Achievements */}

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            🏆 Achievements
          </h2>

          <div className="space-y-4 mt-8">

            <div className="bg-[#0D1430] rounded-xl p-4 text-white">🥇 First Project</div>
            <div className="bg-[#0D1430] rounded-xl p-4 text-white">⚡ 50 LeetCode Problems</div>
            <div className="bg-[#0D1430] rounded-xl p-4 text-white">📄 Resume Ready</div>
            <div className="bg-[#0D1430] rounded-xl p-4 text-white">🚀 Builder Badge</div>

          </div>

        </div>

        <div className="bg-[#121A36] rounded-3xl p-8">

          <h2 className="text-white text-4xl font-bold">
            📊 Weekly Consistency
          </h2>

          <div className="w-full bg-[#0D1430] rounded-full h-5 mt-10">

            <div className="bg-blue-500 h-5 rounded-full w-[82%]"></div>

          </div>

          <h2 className="text-green-400 text-6xl font-bold mt-8">
            82%
          </h2>

          <p className="text-gray-400 mt-2">
            Excellent discipline this week.
          </p>

        </div>

      </div>
      {/* Milestones */}

<div className="grid grid-cols-2 gap-8 mt-8">

  <div className="bg-[#121A36] rounded-3xl p-8">

    <h2 className="text-white text-4xl font-bold">
      🏁 Milestones
    </h2>

    <div className="space-y-4 mt-8">

      <div className="bg-[#09112d] p-4 rounded-xl text-green-400">
        ✅ Resume Complete
      </div>

      <div className="bg-[#09112d] p-4 rounded-xl text-green-400">
        ✅ Portfolio Ready
      </div>

      <div className="bg-[#09112d] p-4 rounded-xl text-yellow-400">
        🟡 Internship Pending
      </div>

      <div className="bg-[#09112d] p-4 rounded-xl text-gray-400">
        ⬜ FAANG Referral
      </div>

      <div className="bg-[#09112d] p-4 rounded-xl text-gray-400">
        ⬜ Offer Letter
      </div>

    </div>

  </div>

  <div className="bg-[#121A36] rounded-3xl p-8 border border-purple-500/40">

    <h2 className="text-white text-4xl font-bold">
      🤖 AI Prediction
    </h2>

    <p className="text-gray-300 text-xl mt-8 leading-10">

      At your current pace,

      you are projected to reach

      <span className="text-green-400 font-bold">
        {" "}89% Hiring Readiness
      </span>

      by August 2026.

      <br /><br />

      Maintain your current streak for

      12 more weeks to maximize

      interview success.

    </p>

  </div>

</div>
{/* AI Summary */}

<div className="bg-[#121A36] rounded-3xl p-8 mt-8 border border-blue-500/30">

<h2 className="text-white text-4xl font-bold">

🤖 Progress Summary

</h2>

<p className="text-gray-300 text-xl mt-8 leading-10">

You have improved your hiring readiness

by <span className="text-green-400 font-bold">18%</span>

over the last three months.

<br /><br />

Your strongest growth came from

projects and consistency.

<br /><br />

Next highest impact activity:

<span className="text-blue-400 font-bold">

 Complete an Internship.

</span>

</p>

</div>

    </AppLayout>
  );
}