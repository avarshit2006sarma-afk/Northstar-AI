// =========================
// Northstar Career Intelligence Model (NCIM)
// =========================

export interface StudentProfile {
  projects: number
  dsa: number
  technicalSkills: number
  internship: number
  academics: number
  leadership: number
  professionalProfile: number
}

export interface CompanyWeights {
  projects: number
  dsa: number
  technicalSkills: number
  internship: number
  academics: number
  leadership: number
  professionalProfile: number
}

export function calculateCompanyReadiness(
  student: StudentProfile,
  weights: CompanyWeights
) {
  return (
    (student.projects * weights.projects +
      student.dsa * weights.dsa +
      student.technicalSkills * weights.technicalSkills +
      student.internship * weights.internship +
      student.academics * weights.academics +
      student.leadership * weights.leadership +
      student.professionalProfile * weights.professionalProfile) /
    100
  )
}