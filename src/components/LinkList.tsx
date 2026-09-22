import LinkCard, { LinkItem } from "@/components/LinkCard";

interface LinkListProps {
  links: LinkItem[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
