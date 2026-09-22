"use client";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

interface LinkCardProps {
  link: LinkItem;
}

export default function LinkCard({ link }: LinkCardProps) {
  const handleClick = () => {
    fetch(`/api/links/${link.id}/click`, { method: "POST" }).catch(() => {});
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {link.title}
    </a>
  );
}
