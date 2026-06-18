import { StudentProfile } from "./ncim"

export function getRecommendations(student: StudentProfile) {
  const recommendations = []

  if (student.internship < 60) {
    recommendations.push({
      task: "Complete an Internship",
      gain: 8,
    })
  }

  if (student.projects < 90) {
    recommendations.push({
      task: "Build One More Production Project",
      gain: 6,
    })
  }

  if (student.dsa < 80) {
    recommendations.push({
      task: "Solve 150 DSA Problems",
      gain: 5,
    })
  }

  if (student.professionalProfile < 80) {
    recommendations.push({
      task: "Improve LinkedIn & GitHub",
      gain: 3,
    })
  }

  return recommendations.sort((a, b) => b.gain - a.gain)
}