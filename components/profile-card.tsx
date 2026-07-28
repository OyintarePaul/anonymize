import type { Resume } from "@/lib/schema";

import CopyButton from "./copy-button";

type Props = {
  data: Resume;
};

export default function ProfileCard({ data }: Props) {
  return (
    <div
      className="
        w-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
        backdrop-blur-xl
      "
    >

      {/* Header */}

      <div className="flex flex-wrap gap-3">

        <Badge>
          {data.alias}
        </Badge>

        <Badge>
          {data.targetRole}
        </Badge>

        <Badge>
          {data.locationRegion}
        </Badge>

      </div>


      {/* Copy */}

      <div className="mt-6 flex justify-end">
        <CopyButton data={data} />
      </div>


      {/* Summary */}

      <section className="mt-8">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Executive Summary
        </h3>

        <p className="mt-3 leading-7 text-zinc-300">
          {data.executiveSummary}
        </p>

      </section>


      {/* Skills */}

      <section className="mt-8">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Core Skills
        </h3>


        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
          "
        >

          {data.coreSkills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                px-3
                py-2
                text-sm
                text-zinc-300
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </section>


      {/* Experience */}

      <section className="mt-10">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Experience
        </h3>


        <div className="mt-6 space-y-8 border-l border-zinc-800 pl-6">

          {data.experience.map((experience, index) => (

            <div
              key={`${experience.role}-${index}`}
              className="relative"
            >

              <div
                className="
                  absolute
                  -left-[31px]
                  top-1
                  h-3
                  w-3
                  rounded-full
                  bg-emerald-400
                  ring-4
                  ring-zinc-950
                "
              />


              <h4 className="font-semibold text-white">
                {experience.role}
              </h4>


              <p className="mt-1 text-sm text-emerald-400">
                {experience.maskedCompany}
              </p>


              <p className="mt-1 text-sm text-zinc-500">
                {experience.duration}
              </p>


              <ul className="mt-4 space-y-2 text-sm text-zinc-300">

                {experience.bulletPoints.map((bullet) => (
                  <li
                    key={bullet}
                    className="leading-6"
                  >
                    {bullet}
                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </section>


      {/* Education */}

      <section className="mt-10">

        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Education & Certifications
        </h3>


        <ul className="mt-4 space-y-2 text-sm text-zinc-300">

          {data.educationAndCertifications.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}

        </ul>

      </section>


    </div>
  );
}


function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        rounded-full
        border
        border-zinc-700
        bg-zinc-900/50
        px-4
        py-2
        text-sm
        text-zinc-200
        backdrop-blur-md
      "
    >
      {children}
    </span>
  );
}