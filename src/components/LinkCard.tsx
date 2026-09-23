export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

interface LinkCardProps {
  link: LinkItem;
  clicks: number;
  onClick: () => void;
}

export default function LinkCard({ link, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-14 py-3 text-center text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {link.title}
      <span className="absolute right-4 text-xs font-normal text-zinc-400 tabular-nums dark:text-zinc-500">
        {clicks}회
      </span>
    </a>
  );
}
