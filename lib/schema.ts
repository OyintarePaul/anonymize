import { z } from "zod";

export const ResumeSchema = z.object({
  alias: z.string(),
  targetRole: z.string(),
  locationRegion: z.string(),
  executiveSummary: z.string(),

  coreSkills: z.array(z.string()),

  experience: z.array(
    z.object({
      role: z.string(),
      maskedCompany: z.string(),
      duration: z.string(),
      bulletPoints: z.array(z.string()),
    })
  ),

  educationAndCertifications: z.array(z.string()),
});

export type Resume = z.infer<typeof ResumeSchema>;