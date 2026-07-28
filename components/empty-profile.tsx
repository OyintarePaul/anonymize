import { FileSearch } from "lucide-react";

export default function EmptyProfile() {
  return (
    <div
      className="
        flex
        h-full
        flex-col
        items-center
        justify-center
        text-center
      "
    >

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-950
        "
      >
        <FileSearch className="h-10 w-10 text-zinc-700" />
      </div>


      <h2 className="mt-6 text-lg font-semibold">
        Anonymous Candidate Profile
      </h2>


      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        Upload a resume to generate a privacy-safe staffing profile.
      </p>

    </div>
  );
}