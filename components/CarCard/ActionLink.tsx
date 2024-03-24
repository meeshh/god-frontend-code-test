import Image from "next/image";
import Link from "next/link";

type ActionLinkProps = {
  href: string;
  label: string;
};

const ActionLink: React.FC<ActionLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      passHref
      className="uppercase flex items-center gap-8 text-accent-blue font-16"
    >
      {label}
      <Image
        src="/icons/chevron-small.svg"
        width={12}
        height={12}
        alt={label}
      />
    </Link>
  );
};

export default ActionLink;
