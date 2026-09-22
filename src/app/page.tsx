import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { LinkItem } from "@/components/LinkCard";

const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/username" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "blog", title: "Blog", url: "https://username.blog" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-4 dark:bg-zinc-950">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Profile
          name="홍길동"
          bio="한 줄 자기소개가 들어갑니다"
          imageUrl="/avatar-placeholder.svg"
        />
        <LinkList links={links} />
      </div>
    </div>
  );
}
