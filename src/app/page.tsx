import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { LinkItem } from "@/components/LinkCard";

const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/jihunyangAI" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/jihunyang" },
  { id: "email", title: "이메일", url: "mailto:jihunyang@naver.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 p-4 dark:bg-zinc-950">
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Profile
          name="김개발"
          bio="풀스택 개발자 | 요즘에는 AI개발에 관심이 많아요"
          imageUrl="/profile.png"
        />
        <LinkList links={links} />
      </div>
    </div>
  );
}
