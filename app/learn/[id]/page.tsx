import Link from "next/link";

type LearnProps = {
  params: { id: string };
};

const Learn: React.FC<LearnProps> = ({ params }) => {
  return (
    <>
      <h3>
        <Link href="/">Go back</Link>
        <span className="mx-16 font-medium">{params.id}</span>
      </h3>
      <p>Fetch info about {params.id}</p>
      <p>we can use the <code>/api/cars</code> filtered by id</p>
      <p>ideally from a database we fetch a unique object by its id</p>
    </>
  );
};

export default Learn;
