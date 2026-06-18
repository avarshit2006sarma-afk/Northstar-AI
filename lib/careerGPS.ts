export function generateCareerPath(student: any) {
  const roadmap = []

  if (student.internship < 70) {
    roadmap.push({
      task: "Complete a Software Internship",
      gain: 8,
    })
  }

  if (student.projects < 80) {
    roadmap.push({
      task: "Build a Full Stack Project",
      gain: 5,
    })
  }

  if (student.dsa < 85) {
    roadmap.push({
      task: "Solve 100 LeetCode Problems",
      gain: 6,
    })
  }

  if (student.technicalSkills < 85) {
    roadmap.push({
      task: "Master React + Node.js",
      gain: 4,
    })
  }

  if (student.professionalProfile < 85) {
    roadmap.push({
      task: "Improve LinkedIn & Resume",
      gain: 3,
    })
  }

  return roadmap
}