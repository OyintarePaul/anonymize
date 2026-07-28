import type { Resume } from "@/lib/schema";

import ProfileCard from "@/components/profile-card";
import EmptyProfile from "@/components/empty-profile";

type Props = {
  data?: Resume;
};

export default function ProfilePanel({ data }: Props) {
  return (
    <section
      className="
        min-h-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
      "
    >
      {data ? (
        <ProfileCard data={data} />
      ) : (
        <EmptyProfile />
      )}
    </section>
  );
}