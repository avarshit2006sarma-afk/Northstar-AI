export function recruiterVerdict(
  score: number,
  company: string,
  weakness: string
) {

  if (score >= 85) {
    return {
      decision: "Strong Hire",
      chance: 92,
      feedback:
        `Outstanding profile for ${company}. Your portfolio aligns well with recruiter expectations.`,
    }
  }

  if (score >= 75) {
    return {
      decision: "Likely Interview",
      chance: 78,
      feedback:
        `Your profile is competitive. Improving ${weakness} could significantly strengthen your application.`,
    }
  }

  if (score >= 65) {
    return {
      decision: "Borderline",
      chance: 58,
      feedback:
        `${weakness} is currently limiting your profile. Focus on improving it before applying.`,
    }
  }

  return {
    decision: "Needs Improvement",
    chance: 28,
    feedback:
      `Recruiters would likely reject this profile today. Prioritize improving ${weakness}.`,
  }

}