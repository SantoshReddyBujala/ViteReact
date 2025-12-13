import type { ReactNode } from "react";

interface UserCardProps {
  id: string;
  name?: string;
  subTitle: ReactNode;
}

export default function UserCard({ id, name, subTitle }: UserCardProps) {
  const displayName = name ?? "Guest";
  return (
    <div>
      <p>ID: {id}</p>
      <h2>{displayName}</h2>
      <p>{subTitle}</p>
    </div>
  );
}
