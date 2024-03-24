import Link from "next/link";

type PageProps = {
  params: { id: string };
};

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <h3>
      <Link href="/">Go back</Link>
      <span className="mx-16 font-medium">The shop page of {params.id}</span>
    </h3>
  );
};

export default Page;
