"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import type { Resume } from "@/lib/schema";

type Props = {
  data: Resume;
};

export default function CopyButton({ data }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const textToCopy = `
CANDIDATE PROFILE: ${data.alias}
ROLE: ${data.targetRole}
LOCATION: ${data.locationRegion}

EXECUTIVE SUMMARY
${data.executiveSummary}

CORE SKILLS
${data.coreSkills.join(", ")}

EXPERIENCE
${data.experience
  .map(
    (exp) => `
${exp.role} | ${exp.maskedCompany} (${exp.duration})
${exp.bulletPoints.map((bullet) => `  ${bullet}`).join("\n")}
`
  )
  .join("\n")}

EDUCATION & CERTIFICATIONS
${data.educationAndCertifications
  .map((edu) => edu)
  .join("\n")}
`.trim();

    await navigator.clipboard.writeText(textToCopy);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-zinc-700
        bg-zinc-900
        px-4
        py-2
        text-sm
        text-zinc-200
        transition
        hover:border-emerald-400
        hover:text-emerald-400
      "
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-400" />
          Copied to Clipboard!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Profile
        </>
      )}
    </button>
  );
}