type LearnProps = {
  params: { id: string };
};

const Learn: React.FC<LearnProps> = ({ params }) => {
  return (
    <>
      <h3>{params.id}</h3>
      <p>Fetch info about {params.id}</p>
      <p>we can use the `/api/cars` filtered by id</p>
      <p>ideally from a database we fetch a unique object by its id</p>
    </>
  );
};

export default Learn;
