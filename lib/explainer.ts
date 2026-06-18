export function generateAnalysis(student: any, companyWeights: any) {

  const scores = [
    {
      title: "Projects",
      score: student.projects,
      weight: companyWeights.projects,
      impact: (100 - student.projects) * companyWeights.projects,
    },
    {
      title: "DSA",
      score: student.dsa,
      weight: companyWeights.dsa,
      impact: (100 - student.dsa) * companyWeights.dsa,
    },
    {
      title: "Technical Skills",
      score: student.technicalSkills,
      weight: companyWeights.technicalSkills,
      impact: (100 - student.technicalSkills) * companyWeights.technicalSkills,
    },
    {
      title: "Internship",
      score: student.internship,
      weight: companyWeights.internship,
      impact: (100 - student.internship) * companyWeights.internship,
    },
    {
      title: "Academics",
      score: student.academics,
      weight: companyWeights.academics,
      impact: (100 - student.academics) * companyWeights.academics,
    },
    {
      title: "Leadership",
      score: student.leadership,
      weight: companyWeights.leadership,
      impact: (100 - student.leadership) * companyWeights.leadership,
    },
    {
      title: "Professional Profile",
      score: student.professionalProfile,
      weight: companyWeights.professionalProfile,
      impact: (100 - student.professionalProfile) * companyWeights.professionalProfile,
    },
  ]

  scores.sort((a, b) => b.impact - a.impact)

  return scores[0]
}