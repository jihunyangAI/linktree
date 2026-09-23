"use client";

import { useEffect, useState } from "react";
import LinkCard, { LinkItem } from "@/components/LinkCard";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/links/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) =>
        // 조회 도중 발생한 클릭이 덮어써지지 않도록 큰 값을 유지
        setClicks((prev) => {
          const merged = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            merged[id] = Math.max(merged[id] ?? 0, count);
          }
          return merged;
        })
      )
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/links/${id}/click`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { clicks: number } | null) => {
        if (data) setClicks((prev) => ({ ...prev, [id]: data.clicks }));
      })
      .catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          clicks={clicks[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
