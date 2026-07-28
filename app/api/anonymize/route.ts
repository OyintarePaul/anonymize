import { NextRequest, NextResponse } from "next/server";
import { PDFParse } from "pdf-parse";
import { generateText, Output } from "ai";
import { google } from "@ai-sdk/google";

import { ResumeSchema } from "@/lib/schema";
import { SYSTEM_PROMPT } from "@/lib/prompts";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                {
                    error: "PDF file is required.",
                },
                {
                    status: 400,
                }
            );
        }

        const MAX_FILE_SIZE = 10 * 1024 * 1024;

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                {
                    error: "Resume must be smaller than 10MB.",
                },
                {
                    status: 400,
                }
            );
        }

        const bytes = await file.arrayBuffer();

        const parser = new PDFParse({
            data: bytes
        })

        let rawResume;

        try {
            rawResume = await parser.getText()
            if (!rawResume.text.trim()) {
                return NextResponse.json(
                    {
                        error: "Unable to extract text from this PDF.",
                    },
                    {
                        status: 400,
                    }
                );
            }
        } finally {
            await parser.destroy()
        }

        const { output } = await generateText({
            model: google("gemini-2.5-flash"),
            temperature: 0,
            output: Output.object({ schema: ResumeSchema, }),
            system: SYSTEM_PROMPT,
            prompt: rawResume.text,
        });

        return NextResponse.json(output);
    } catch (error) {
        console.error(error);

        const message =
            error instanceof Error
                ? error.message
                : "Failed to anonymize resume.";

        return NextResponse.json(
            {
                error: message,
            },
            {
                status: 500,
            }
        );
    }
}