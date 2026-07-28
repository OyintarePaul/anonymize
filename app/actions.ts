"use server";

import { anonymizeResume } from "@/lib/anonymize";
import type { Resume } from "@/lib/schema";

type ActionState = {
  success: boolean;
  data?: Resume;
  error?: string;
};

export async function anonymizeResumeAction(
  _previousState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return {
        success: false,
        error: "Please upload a PDF resume.",
      };
    }

    const result = await anonymizeResume(file);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to anonymize resume.",
    };
  }
}