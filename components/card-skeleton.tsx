export default function CardSkeleton() {
  return (
    <div
      className="
        w-full
        animate-pulse
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950/40
        p-8
      "
    >

      {/* Badge Row */}

      <div className="flex flex-wrap gap-3">

        <Skeleton className="h-8 w-32 rounded-full" />

        <Skeleton className="h-8 w-44 rounded-full" />

        <Skeleton className="h-8 w-36 rounded-full" />

      </div>


      {/* Copy Button */}

      <div className="mt-6 flex justify-end">

        <Skeleton className="h-10 w-36 rounded-xl" />

      </div>


      {/* Summary */}

      <section className="mt-8">

        <Skeleton className="h-4 w-40" />

        <div className="mt-4 space-y-3">

          <Skeleton className="h-4 w-full" />

          <Skeleton className="h-4 w-11/12" />

          <Skeleton className="h-4 w-9/12" />

        </div>

      </section>


      {/* Skills */}

      <section className="mt-8">

        <Skeleton className="h-4 w-32" />


        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
          "
        >

          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-10 rounded-xl"
            />
          ))}

        </div>

      </section>


      {/* Experience Timeline */}

      <section className="mt-10">

        <Skeleton className="h-4 w-28" />


        <div className="mt-6 space-y-8 border-l border-zinc-800 pl-6">

          {Array.from({ length: 3 }).map((_, index) => (

            <div key={index}>

              <Skeleton className="h-5 w-48" />

              <Skeleton className="mt-3 h-4 w-64" />

              <Skeleton className="mt-3 h-4 w-28" />

              <div className="mt-4 space-y-2">

                <Skeleton className="h-4 w-full" />

                <Skeleton className="h-4 w-10/12" />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Education */}

      <section className="mt-10">

        <Skeleton className="h-4 w-52" />

        <div className="mt-4 space-y-3">

          <Skeleton className="h-4 w-full" />

          <Skeleton className="h-4 w-9/12" />

        </div>

      </section>


    </div>
  );
}


function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        bg-zinc-800
        ${className}
      `}
    />
  );
}