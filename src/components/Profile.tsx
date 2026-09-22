import Image from "next/image";

interface ProfileProps {
  name: string;
  bio: string;
  imageUrl: string;
}

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"
        priority
      />
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
    </div>
  );
}
