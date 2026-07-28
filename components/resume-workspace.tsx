"use client";

import { useActionState } from "react";

import { anonymizeResumeAction } from "@/app/actions";

import UploadForm from "@/components/upload-form";
import ProfilePanel from "@/components/profile-panel";

const initialState = {
  success: false,
  data: undefined,
  error: undefined,
};

export default function ResumeWorkspace() {
  const [state, formAction] = useActionState(
    anonymizeResumeAction,
    initialState
  );

  return (
    <div
      className="
        grid
        h-screen
        gap-8
        overflow-hidden
        px-6
        py-8
        lg:grid-cols-[40%_60%]
      "
    >

      {/* LEFT COLUMN */}

      <section
        className="
          min-h-0
          overflow-hidden
        "
      >
        <UploadForm
          action={formAction}
          error={state.error}
        />
      </section>


      {/* RIGHT COLUMN */}

      <section
        className="
          min-h-0
          overflow-y-auto
          pr-2
        "
      >
        <ProfilePanel data={state.data} />
      </section>

    </div>
  );
}