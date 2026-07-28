# AnonymizeResume

An AI-powered resume anonymization tool built for staffing agencies.

AnonymizeResume transforms traditional resumes into privacy-safe candidate profiles by removing personally identifiable information while preserving the professional details recruiters need.

## Features

- Upload PDF resumes directly
- Server-side PDF text extraction
- AI-powered resume anonymization using Google Gemini
- Structured candidate profile generation with strict schema validation
- Automatic masking of:
  - Names
  - Emails
  - Phone numbers
  - Addresses
  - Social links
  - Company names
  - University names
- Preserves:
  - Technical skills
  - Job titles
  - Experience history
  - Dates
  - Metrics
  - Certifications
- Premium dark-mode candidate profile interface
- Copy profile output as clean recruiter-friendly text
- Fully stateless architecture (no database required)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Vercel AI SDK
- Google Gemini
- Zod
- pdf-parse

## How It Works

1. A recruiter uploads a PDF resume.
2. The server extracts the resume text.
3. Google Gemini analyzes the content.
4. Personal information is removed or anonymized.
5. The AI returns a structured candidate profile.
6. The profile is rendered as an anonymous candidate card.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>

cd anonymize