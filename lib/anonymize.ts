import { google } from "@ai-sdk/google";
import { generateText, Output } from "ai";
import "pdf-parse/worker";
import { PDFParse } from "pdf-parse";

import { ResumeSchema, type Resume } from "./schema";
import { SYSTEM_PROMPT } from "./prompts";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function anonymizeResume(file: File): Promise<Resume> {
  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are supported.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Resume must be smaller than 10MB.");
  }

  const bytes = await file.arrayBuffer();

  const parser = new PDFParse({
    data: bytes,
  });

  let extracted;

  try {
    extracted = await parser.getText();
  } finally {
    await parser.destroy();
  }

  const rawText = extracted.text.trim();

  if (!rawText) {
    throw new Error(
      "Unable to extract text from this PDF. The file may be scanned or image-based."
    );
  }

  const { output } = await generateText({
    model: google("gemini-3.5-flash-lite"),
    temperature: 0,
    output: Output.object({
      schema: ResumeSchema,
    }),

    system: SYSTEM_PROMPT,

    prompt: rawText,
  });

  return output;
}