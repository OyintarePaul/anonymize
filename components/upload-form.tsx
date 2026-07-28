"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { UploadCloud, FileText, X } from "lucide-react";

type Props = {
  action: (formData: FormData) => void;
  error?: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        mt-8
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-zinc-700
        bg-zinc-950
        px-6
        py-3
        text-sm
        font-medium
        transition
        hover:border-emerald-400
        hover:text-emerald-400
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {pending ? (
        <>
          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-emerald-400
              border-t-transparent
            "
          />

          Processing Resume...
        </>
      ) : (
        <>
          <UploadCloud className="h-4 w-4" />

          Generate Profile
        </>
      )}
    </button>
  );
}


export default function UploadForm({
  action,
  error,
}: Props) {

  const [fileName, setFileName] = useState<string>("");


  return (
    <form
      action={action}
      className="
        flex
        h-full
        min-h-0
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-10
      "
    >

      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
        "
      >
        <FileText className="h-10 w-10 text-emerald-400" />
      </div>


      <h2 className="mt-8 text-xl font-semibold">
        Upload Resume
      </h2>


      <p className="mt-3 max-w-sm text-center text-sm text-zinc-400">
        Upload a PDF resume and generate an anonymous candidate profile.
      </p>


      <label
        htmlFor="resume"
        className="
          mt-8
          flex
          w-full
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border
          border-dashed
          border-zinc-700
          bg-zinc-950/50
          px-6
          py-10
          transition
          hover:border-emerald-400
        "
      >

        {fileName ? (
          <>
            <FileText className="mb-3 h-8 w-8 text-emerald-400" />

            <span className="max-w-full truncate text-sm text-zinc-200">
              {fileName}
            </span>

            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setFileName("");
              }}
              className="
                mt-3
                flex
                items-center
                gap-1
                text-xs
                text-zinc-500
                hover:text-red-400
              "
            >
              <X className="h-3 w-3" />
              Remove
            </button>
          </>
        ) : (
          <>
            <UploadCloud className="mb-3 h-8 w-8 text-zinc-400" />

            <span className="text-sm text-zinc-400">
              Click to choose PDF
            </span>

            <span className="mt-1 text-xs text-zinc-600">
              Maximum size: 10MB
            </span>
          </>
        )}


        <input
          id="resume"
          name="file"
          type="file"
          accept="application/pdf"
          className="hidden"
          required
          onChange={(event) => {
            const file = event.target.files?.[0];

            if (file) {
              setFileName(file.name);
            }
          }}
        />

      </label>


      <SubmitButton />


      {error && (
        <p className="mt-6 text-center text-sm text-red-400">
          {error}
        </p>
      )}

    </form>
  );
}