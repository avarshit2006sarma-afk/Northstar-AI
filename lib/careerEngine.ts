import { StudentProfile } from "./ncim"
import { CompanyWeights } from "./ncim"

export function getReadiness(
  student: StudentProfile,
  weights: CompanyWeights
) {

  const score =

    student.projects * weights.projects +

    student.dsa * weights.dsa +

    student.technicalSkills * weights.technicalSkills +

    student.internship * weights.internship +

    student.academics * weights.academics +

    student.leadership * weights.leadership +

    student.professionalProfile * weights.professionalProfile

  return Math.round(score / 100)

}
export function getScoreBreakdown(
  student: StudentProfile,
  weights: CompanyWeights
) {

  return [

    {
      title: "Projects",
      value:
        (student.projects * weights.projects) / 100,
    },

    {
      title: "DSA",
      value:
        (student.dsa * weights.dsa) / 100,
    },

    {
      title: "Technical Skills",
      value:
        (student.technicalSkills *
          weights.technicalSkills) / 100,
    },

    {
      title: "Internship",
      value:
        (student.internship *
          weights.internship) / 100,
    },

    {
      title: "Academics",
      value:
        (student.academics *
          weights.academics) / 100,
    },

    {
      title: "Leadership",
      value:
        (student.leadership *
          weights.leadership) / 100,
    },

    {
      title: "Professional Profile",
      value:
        (student.professionalProfile *
          weights.professionalProfile) / 100,
    },

  ]

}
export function getCareerIdentity(student: any) {

  const builder =
    student.projects * 0.4 +
    student.technicalSkills * 0.3 +
    student.internship * 0.3;

  const researcher =
    student.academics * 0.4 +
    student.technicalSkills * 0.6;

  const leader =
    student.leadership * 0.6 +
    student.professionalProfile * 0.4;

  const innovator =
    student.projects * 0.4 +
    student.technicalSkills * 0.4 +
    student.leadership * 0.2;

  return {
    builder: Math.round(builder),
    researcher: Math.round(researcher),
    leader: Math.round(leader),
    innovator: Math.round(innovator),
  };
}
export function getPersonalitySummary(identity: any) {

  let strongest = "Builder";
  let score = identity.builder;

  if (identity.researcher > score) {
    strongest = "Researcher";
    score = identity.researcher;
  }

  if (identity.leader > score) {
    strongest = "Leader";
    score = identity.leader;
  }

  if (identity.innovator > score) {
    strongest = "Innovator";
    score = identity.innovator;
  }

  return `Your strongest engineering identity is ${strongest}. Based on your current profile, AI predicts that you naturally excel in this area while still having opportunities to grow into a more balanced engineer through projects, leadership and real-world experience.`;

}